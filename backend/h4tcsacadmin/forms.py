from django.forms import ModelForm
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.resource import Resource

class ResourceForm(ModelForm):
    class Meta:
        model = Resource
        fields = "__all__"


class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"


class BarForm(ModelForm):
    class Meta:
        model = Bar
        fields = (
            'is_safebar',
            'is_approved',
            'name',
            'email',
            'contact_name',
            'street_address',
            'city',
            'zip_code',
            'phone_number',
            'website',
            'image',
            'description',
            'certification_date'
            
        )


class FAQForm(ModelForm):
    class Meta:
        model = FAQ
        fields = "__all__"
