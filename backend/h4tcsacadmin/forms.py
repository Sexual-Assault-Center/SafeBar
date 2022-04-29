
from django import forms
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


class BarForm(forms.Form):
    
    is_safebar = forms.BooleanField(widget=forms.NullBooleanSelect(attrs={ 'style': 'width: 30px;'}))
    is_approved = forms.BooleanField(widget=forms.NullBooleanSelect(attrs={'placeholder': '', 'style': 'width: 30px;'}))
    name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'placeholder' :'', 'style': 'width: 300px;'}))
    contact_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    street_address = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    city = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    zip_code = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    phone_number = forms.IntegerField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    website = forms.URLField(widget=forms.URLInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    image = forms.URLField(widget=forms.URLInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    description = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '', 'style': 'width: 300px;'}))
    certification_date = forms.DateField(widget=forms.DateInput(attrs={'placeholder': 'YYYY-MM-DD', 'style': 'width: 300px;'}))
    
    
    # class Meta:
    #     model = Bar
    #     fields = "__all__"


class FAQForm(ModelForm):
    class Meta:
        model = FAQ
        fields = "__all__"
