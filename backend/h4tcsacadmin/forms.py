from django.forms import CheckboxInput, DateInput, EmailInput, ModelForm, TextInput, Textarea, URLInput, NumberInput
from h4tcsacapi import checkbox_attributes, form_attributes, date_attributes
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
            'title': TextInput(attrs=form_attributes("Title")),
            'description': Textarea(attrs=form_attributes("Description")),
            'url': URLInput(attrs=form_attributes("Bar Name"))
        }


class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"

        widgets = {
            'name': TextInput(attrs=form_attributes()),
            'email': EmailInput(attrs=form_attributes()),
            'contact_name': TextInput(attrs=form_attributes()),
            'phone_number': NumberInput(attrs=form_attributes())
        }


class BarForm(ModelForm):
    class Meta:
        model = Bar
        fields = (
            'name',
            'contact_name',
            'email',
            'phone_number',
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
            'name': TextInput(attrs=form_attributes()),
            'email': EmailInput(attrs=form_attributes()),
            'contact_name': TextInput(attrs=form_attributes()),
            'street_address': TextInput(attrs=form_attributes()),
            'city': TextInput(attrs=form_attributes()),
            'zip_code': TextInput(attrs=form_attributes()),
            'phone_number': NumberInput(attrs=form_attributes()),
            'website': URLInput(attrs=form_attributes()),
            'image': URLInput(attrs=form_attributes()),
            'description': Textarea(attrs=form_attributes()),
            'certification_date': DateInput(attrs=date_attributes()),
            'is_safebar': CheckboxInput(attrs=checkbox_attributes()),
            'is_approved': CheckboxInput(attrs=checkbox_attributes()),
        }


class FAQForm(ModelForm):
    class Meta:
        model = FAQ
        fields = "__all__"

        widgets = {
            'question': TextInput(attrs=form_attributes()),
            'answer': TextInput(attrs=form_attributes()),
        }


class BarReportForm(ModelForm):
    class Meta:
        model = BarReport
        fields = "__all__"

        widgets = {
            'bar': TextInput(attrs=form_attributes()),
            'report_type': TextInput(attrs=form_attributes()),
            'comment': TextInput(attrs=form_attributes()),
            'uid': TextInput(attrs=form_attributes()),
            'date_submitted': TextInput(attrs=form_attributes()),
        }
