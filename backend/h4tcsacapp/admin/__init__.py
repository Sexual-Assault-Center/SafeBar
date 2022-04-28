from django.contrib import admin
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.sponser import Sponser
from h4tcsacapp.models.list import List


class BarAdmin(admin.ModelAdmin):
    pass


class RatingAdmin(admin.ModelAdmin):
    pass


class ReportTypeAdmin(admin.ModelAdmin):
    pass


class BarReportAdmin(admin.ModelAdmin):
    pass


class ResourceAdmin(admin.ModelAdmin):
    pass


class FAQAdmin(admin.ModelAdmin):
    pass


class ContactAdmin(admin.ModelAdmin):
    pass


class SponserAdmin(admin.ModelAdmin):
    pass


class ListAdmin(admin.ModelAdmin):
    pass


class ListBarAdmin(admin.ModelAdmin):
    pass


admin.site.register(Bar, BarAdmin)
admin.site.register(BarReport, BarReportAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(FAQ, FAQAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(ReportType, ReportTypeAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(Sponser, SponserAdmin)
admin.site.register(List, ListAdmin)
