from django.contrib import admin
from django.urls import path
from h4tcsacadmin.views.dashboard import dashboard
from h4tcsacadmin.views.resources import ResourceViews
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.list import List
from h4tcsacapp.models.list_bar import ListBar
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.sponser import Sponser


class CustomAdminSite(admin.AdminSite):
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path(r'dashboard/', self.admin_view(dashboard), name="dashboard-view"),
            path(r'resources/', self.admin_view(ResourceViews().run), name="resources-list"),
            path(r'resources/create/', self.admin_view(ResourceViews().create), name="resources-create"),
            path(r'resources/delete/<slug:uuid>', self.admin_view(ResourceViews().delete), name="resources-delete"),
            path(r'resources/update/<slug:uuid>', self.admin_view(ResourceViews().update), name="resources-update"),
        ]
        return my_urls + urls


admin_site = CustomAdminSite(name='myadmin')

admin_site.register(Bar)
admin_site.register(BarReport)
admin_site.register(Contact)
admin_site.register(FAQ)
admin_site.register(Rating)
admin_site.register(ReportType)
admin_site.register(Resource)
admin_site.register(Sponser)
admin_site.register(ListBar)
admin_site.register(List)
