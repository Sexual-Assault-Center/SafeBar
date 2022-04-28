from django.http import HttpResponseRedirect
from django.shortcuts import render

from .forms import BarForm

def recertify_bar(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = BarForm(request.POST)
        form.Meta().model.is_safebar = False
        # check whether it's valid:
        if form.is_valid():
            new_bar = form.save()
            # redirect to a success page
            return HttpResponseRedirect('success/')
        

    # TODO: for next ticket
    elif request.method == 'PATCH':
        return ""
    # if a GET (or any other method) we'll create a blank form
    else:
        form = BarForm()

    return render(request, 'submit.html', {'form': form})

def success_redirect(request):
    return render(request, 'redirect.html')