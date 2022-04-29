from rest_framework import serializers
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.resource import Resource


class AdminResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = [
            "uuid",
            "title",
            "description",
            "url"
        ]


class AdminContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = "__all__"


class AdminBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bar
        fields = [
            "uuid",
            "name",
            "description",
            "city",
            "email",
            "is_safebar",
            "is_approved",
        ]


class AdminFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"
