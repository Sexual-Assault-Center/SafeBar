from django.forms import ModelForm
from h4tcsacapp.models.bar import Bar

# Create the form class.
class BarForm(ModelForm):
    class Meta:
        model = Bar
        fields = ['name','contact_name', 'phone_number', 'street_address', 'city', 'zip_code', 'email', 'description', 'website']
