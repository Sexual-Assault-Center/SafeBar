from rest_framework import serializers
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.list import List

from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.list_bar import ListBar
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


class BarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bar
        fields = ['is_safebar', 'name', 'street_address', "city", "image", "website", "zip_code"]


class ListSerializer(serializers.ModelSerializer):
    list_name = serializers.SerializerMethodField()
    list_id = serializers.SerializerMethodField()
    bars = serializers.SerializerMethodField()

    class Meta:
        model = List
        fields = ["list_name", "list_id", "bars"]

    def get_list_name(self, obj):
        return obj.name

    def get_list_id(self, obj):
        return obj.uuid

    def get_bars(self, obj):
        list_bars = ListBar.objects.filter(list=obj)
        bars = []
        for list_bar in list_bars:
            data = BarSerializer(list_bar.bar).data
            data["list_bar_id"] = list_bar.uuid
            bars.append(data)
        return bars
