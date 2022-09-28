from django.forms import (CheckboxInput, DateInput, DateTimeInput, EmailInput, ModelForm, NumberInput, Select, Textarea, TextInput, URLInput)
from h4tcsacapi import (checkbox_attributes, date_attributes,
                        disabled_input_attributes, input_attributes)
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.resource import Resource


class ResourceForm(ModelForm):
    class Meta:
        model = Resource
        fields = "__all__"

        widgets = {
            'title': TextInput(attrs=input_attributes("Title")),
            'description': Textarea(attrs=input_attributes("Description")),
            'url': URLInput(attrs=input_attributes("Bar Name"))
        }


class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"

        widgets = {
            'name': TextInput(attrs=input_attributes()),
            'email': EmailInput(attrs=input_attributes()),
            'contact_name': TextInput(attrs=input_attributes()),
            'phone_number': NumberInput(attrs=input_attributes())
        }


class BarForm(ModelForm):
    class Meta:
        model = Bar
        fields = (
            'name',
            'contact_name',
            'email',
            'phone_number',
            'latitude',
            'longitude',
            'street_address',
            'city',
            'zip_code',
            'website',
            'image',
            'description',
            'certification_date',
            'is_safebar',
            'is_approved',
        )

        widgets = {
            'name': TextInput(attrs=input_attributes()),
            'email': EmailInput(attrs=input_attributes()),
            'contact_name': TextInput(attrs=input_attributes()),
            'street_address': TextInput(attrs=input_attributes()),
            'city': TextInput(attrs=input_attributes()),
            'zip_code': TextInput(attrs=input_attributes()),
            'latitude': NumberInput(attrs=input_attributes()),
            'longitude': NumberInput(attrs=input_attributes()),
            'phone_number': NumberInput(attrs=input_attributes()),
            'website': URLInput(attrs=input_attributes()),
            'image': URLInput(attrs=input_attributes()),
            'description': Textarea(attrs=input_attributes()),
            'certification_date': DateInput(attrs=date_attributes()),
            'is_safebar': CheckboxInput(attrs=checkbox_attributes()),
            'is_approved': CheckboxInput(attrs=checkbox_attributes()),
        }


class FAQForm(ModelForm):
    class Meta:
        model = FAQ
        fields = "__all__"

        widgets = {
            'question': TextInput(attrs=input_attributes()),
            'answer': TextInput(attrs=input_attributes()),
        }


class BarReportForm(ModelForm):
    class Meta:
        model = BarReport
        fields = "__all__"

        widgets = {
            'bar': Select(attrs=input_attributes()),
            'report_type': Select(attrs=input_attributes()),
            'comment': TextInput(attrs=input_attributes()),
            'uid': TextInput(attrs=disabled_input_attributes()),
            'is_visible': CheckboxInput(attrs=checkbox_attributes()),
            'date_submitted': DateTimeInput(attrs=disabled_input_attributes()),
        }
