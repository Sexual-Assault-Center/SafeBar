from rest_framework import serializers
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
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
        fields = [
            "uuid",
            "name",
            "contact_name",
            "email",
            "phone_number",
        ]


class AdminBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bar
        fields = [
            "uuid",
            "name",
            "description",
            "contact_name",
            "phone_number",
            "zip_code",
            "street_address",
            "city",
            "email",
            "is_safebar",
            "is_approved",
            "latitude",
            "longitude",
            "certification_date",
            "image",
            "website",
        ]


class AdminBarReportSerializer(serializers.ModelSerializer):
    bar = serializers.SerializerMethodField()
    report_type = serializers.SerializerMethodField()
    date_submitted = serializers.SerializerMethodField()

    class Meta:
        model = BarReport
        fields = [
            "uuid",
            'bar',
            'report_type',
            'comment',
            'date_submitted',
            'is_visible',
        ]

    def get_bar(self, obj):
        return obj.bar.name

    def get_report_type(self, obj):
        return obj.report_type.name

    def get_date_submitted(self, obj):
        y, m, d = str(obj.date_submitted).split(" ")[0].split("-")
        return "%s/%s/%s" % (m, d, y)


class AdminFAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = [
            "uuid",
            "question",
            "answer"
        ]
