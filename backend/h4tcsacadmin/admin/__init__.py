from django.contrib import admin
from h4tcsacadmin.forms import BarForm, ContactForm, FAQForm, ResourceForm
from h4tcsacadmin.serializers import AdminBarSerializer, AdminContactSerializer, AdminFAQSerializer, AdminResourceSerializer
from h4tcsacadmin.views.custom_crud_view import CustomDjangoViews
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.landing_content import LandingContent
from h4tcsacapp.models.list import List
from h4tcsacapp.models.list_bar import ListBar
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.sponser import Sponser
from django.template.response import TemplateResponse

from h4tcsacapp.serializers import BarReportSerializer


class CustomAdminSite(admin.AdminSite):

    def index(self, request, extra_context=None):
        bar_reports = BarReport.objects.all()
        report_count = bar_reports.count()
        safebar_count = Bar.objects.filter(is_safebar=True).count()
        bar_reports_data = BarReportSerializer(bar_reports, many=True).data[:-4]
        return TemplateResponse(request, self.index_template or 'dashboard/index.html', {"report_count": report_count, 'safebar_count': safebar_count, "bar_reports_data": bar_reports_data})

    def get_urls(self):
        site_urls = []
        site_urls = site_urls + CustomDjangoViews(
            Resource,
            AdminResourceSerializer,
            "resources",
            self.admin_view,
            "Resource",
            ResourceForm
        ).urls()
        site_urls = site_urls + CustomDjangoViews(
            Contact,
            AdminContactSerializer,
            "contacts",
            self.admin_view,
            "Contact",
            ContactForm
        ).urls()
        site_urls = site_urls + CustomDjangoViews(
            FAQ,
            AdminFAQSerializer,
            "faqs",
            self.admin_view,
            "FAQ",
            FAQForm
        ).urls()
        # Bars
        site_urls = site_urls + CustomDjangoViews(
            Bar,
            AdminBarSerializer,
            "bars",
            self.admin_view,
            "Bar",
            BarForm
        ).urls()
        site_urls = site_urls + super().get_urls()
        return site_urls


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
admin_site.register(LandingContent)
