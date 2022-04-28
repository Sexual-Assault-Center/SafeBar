from django.contrib import admin
from django.urls import path
from h4tcsacadmin.views.dashboard import dashboard
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.sponser import Sponser


class CustomAdminSite(admin.AdminSite):
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path(r'dashboard/', self.admin_view(self.dashboard_view))
        ]
        urls = my_urls + urls
        return urls

    def dashboard_view(self, request):
        return dashboard(request)


admin_site = CustomAdminSite(name='myadmin')


class BarAdmin(admin.ModelAdmin):
    pass


admin_site.register(Bar, BarAdmin)


class BarReportAdmin(admin.ModelAdmin):
    pass


admin_site.register(BarReport, BarReportAdmin)


class ContactAdmin(admin.ModelAdmin):
    pass


admin_site.register(Contact, ContactAdmin)


class FAQAdmin(admin.ModelAdmin):
    pass


admin_site.register(FAQ, FAQAdmin)


class RatingAdmin(admin.ModelAdmin):
    pass


admin_site.register(Rating, RatingAdmin)


class ReportTypeAdmin(admin.ModelAdmin):
    pass


admin_site.register(ReportType, ReportTypeAdmin)


class ResourceAdmin(admin.ModelAdmin):
    pass


admin_site.register(Resource, ResourceAdmin)


class SponserAdmin(admin.ModelAdmin):
    pass


admin_site.register(Sponser, SponserAdmin)
