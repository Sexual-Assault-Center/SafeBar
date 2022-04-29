import time
from http import HTTPStatus
from datetime import date
from dateutil.relativedelta import *
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .utilities import get_bar_by_token, send_recert_email
from h4tcsacapp.models import Bar
from .models import BarToken
from .forms import BarForm, RecertifyForm

def submit_bar(request):
    if request.method == 'POST':
        form = BarForm(request.POST)
        if form.is_valid():
            new_bar = form.save()
            return HttpResponseRedirect('success/')
        # We have validation on submit, but just in case, here's a path for errors
        if form.is_valid() == False:
            return HttpResponseRedirect('error/')
    else:
        form = BarForm()

    return render(request, 'submit.html', {'form': form})

def success_redirect(request):
    return render(request, 'success.html')

def error_redirect(request):
    return render(request, 'error.html')

def check_bars_for_recert_status(request):
    
    # Filter bars where the certification date was >= 6 months ago
    bars_to_notify = Bar.objects.filter(certification_date__lte=date.today()-relativedelta(months=+6))

    for bar in bars_to_notify:
        # Toggle safe bar status to false
        bar.is_safebar = False
        bar.save()

        # Prevent resending emails
        if(not BarToken.objects.filter(bar_id=bar.uuid).filter(notification_sent=True).exists()):
            # Create a unique token for the bar
            barToken = BarToken.objects.create_bartoken(bar.uuid)

            # Send recertification email
            exp_date = bar.certification_date + relativedelta(months=+6)
            try:
                send_recert_email(bar.name, bar.contact_name, barToken.token, exp_date, bar.email)
                barToken.notification_sent = True
                barToken.save()
            except:
                print('ERROR: An error occurred while sending a recertification email to: ' + bar.name)
            
            # Wait 100ms
            # In the future, this section would be better as a queued async task
            time.sleep(0.1)

    return render(request, 'success.html')

def recertify_bar(request, id):
    bar = get_bar_by_token(id)
    if request.method == 'POST':
        bar.certification_date = date.today()
        form = RecertifyForm(request.POST, instance=bar)
        if form.is_valid():
            new_bar = form.save()
            return HttpResponseRedirect('success/')
    else:
        form = RecertifyForm()

    return render(request, 'recertify.html', {'form': form, 'token': id, 'bar_name': bar.name})

def recertify_succcess_redirect(request, id):
    bar = get_bar_by_token(id)
    return render(request, 'recertify_success.html', {'bar_name': bar.name})
