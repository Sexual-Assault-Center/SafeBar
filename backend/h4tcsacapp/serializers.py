from rest_framework import serializers
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.landing_content import LandingContent
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.favorite import Favorite


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
        fields = ['uuid', 'is_safebar', 'name', 'street_address', "city", "zip_code", "latitude", "longitude", "description", "phone_number", "image", "website"]


class BarContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bar
        fields = ['uuid', 'is_safebar', 'name', 'street_address', "city", "zip_code", "image", "website", "contact_name"]


class BarReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarReport
        fields = '__all__'


class BarReportExpandedSerializer(serializers.ModelSerializer):
    class Meta:
        model = BarReport
        fields = '__all__'
        depth = 1


class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__'
        depth = 1
