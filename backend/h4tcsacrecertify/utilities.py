from h4tcsacapp.models import Bar
from .models import BarToken
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template import Context
from django.template.loader import get_template

# Utilities

def get_bar_by_token(token):
    bar_id = BarToken.objects.get(token=token).bar_id
    return Bar.objects.get(uuid=bar_id)

def send_recert_email(bar_name, contact_name, token, exp_date, to_address):
    subject, from_email, to = 'SafeBar - Time to recertify your bar!', 'safebartn@gmail.com', to_address

    # Render email templates from context
    context = { 'bar_name': bar_name, 'contact_name': contact_name, 'token': token, 'exp_date': exp_date, 'to_address': to_address }
    text_content = get_template('recert-email.txt').render(context)
    html_content = get_template('recert-email.html').render(context)

    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
    msg.attach_alternative(html_content, "text/html")
    msg.send()

