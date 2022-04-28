from django.contrib import admin
from django.urls import path
from h4tcsacadmin.views.dashboard import dashboard
from h4tcsacadmin.views.resources import ResourceViews


class CustomAdminSite(admin.AdminSite):
    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path(r'dashboard/', self.admin_view(dashboard)),
            path(r'resources/', self.admin_view(ResourceViews().run)),
            path(r'resources/<slug:action>', self.admin_view(ResourceViews().run))
        ]
        return my_urls + urls


admin_site = CustomAdminSite(name='myadmin')
