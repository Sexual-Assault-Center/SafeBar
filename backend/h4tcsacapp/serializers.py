from rest_framework import serializers
from h4tcsacapp.models.contact import Contact

from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.resource import Resource


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'
