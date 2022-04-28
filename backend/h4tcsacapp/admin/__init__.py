from django.contrib import admin
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.sponser import Sponser


@admin.register(Bar)
class BarAdmin(admin.ModelAdmin):
    pass


@admin.register(BarReport)
class BarReportAdmin(admin.ModelAdmin):
    pass


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    pass


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    pass


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    pass


@admin.register(ReportType)
class ReportTypeAdmin(admin.ModelAdmin):
    pass


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    pass


@admin.register(Sponser)
class SponserAdmin(admin.ModelAdmin):
    pass
