from rest_framework import serializers
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.landing_content import LandingContent
from h4tcsacapp.models.list import List
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.list_bar import ListBar
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.rating import Rating


class ReportTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportType
        fields = '__all__'


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'


class LandingContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingContent
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
        fields = ['is_safebar', 'name', 'street_address', "city", "zip_code", "image", "website"]


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
