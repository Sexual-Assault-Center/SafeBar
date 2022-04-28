from django.contrib import admin
from django.urls import path
from h4tcsacadmin.views.dashboard import dashboard
from h4tcsacadmin.views.resources import ResourceViews


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
