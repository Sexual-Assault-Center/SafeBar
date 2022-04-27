from h4tcsacapp.models.contact import Contact
from h4tcsacapp.serializers import ContactSerializer
from rest_framework.viewsets import ModelViewSet


class ContactViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    http_method_names = ['get']
