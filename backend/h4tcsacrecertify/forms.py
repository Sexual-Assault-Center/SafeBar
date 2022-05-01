from django.forms import ModelForm, TextInput, NumberInput, EmailInput, URLInput, Textarea
from h4tcsacapi import form_attributes
from h4tcsacapp.models.bar import Bar


class BarForm(ModelForm):
    class Meta:
        model = Bar
        fields = ['name', 'contact_name', 'phone_number', 'street_address', 'city', 'zip_code', 'email', 'description', 'website']

        widgets = {
            'name': TextInput(attrs=form_attributes("Bar Name")),
            'contact_name': TextInput(attrs=form_attributes("Bar's Contact Name")),
            'phone_number': NumberInput(attrs=form_attributes("0000000000")),
            'street_address': TextInput(attrs=form_attributes("Street Address")),
            'city': TextInput(attrs=form_attributes()),
            'zip_code': TextInput(attrs=form_attributes()),
            'email': EmailInput(attrs=form_attributes()),
            'description': Textarea(attrs=form_attributes()),
            'website': URLInput(attrs=form_attributes())
        }


class RecertifyForm(ModelForm):
    class Meta:
        model = Bar
        fields = ['is_safebar']
        labels = {
            'is_safebar': ('I agree'),
        }
