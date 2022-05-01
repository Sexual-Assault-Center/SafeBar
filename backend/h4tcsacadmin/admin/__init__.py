from datetime import date

from dateutil.relativedelta import *
from django.contrib import admin
from django.template.response import TemplateResponse
from h4tcsacadmin.forms import BarForm, ContactForm, FAQForm, ResourceForm
from h4tcsacadmin.serializers import (AdminBarReportSerializer, AdminBarSerializer,
                                      AdminContactSerializer,
                                      AdminFAQSerializer,
                                      AdminResourceSerializer)
from h4tcsacadmin.views.custom_crud_view import CustomDjangoListViews, CustomDjangoViews
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.contact import Contact
from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.models.landing_content import LandingContent
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.models.sponser import Sponser
from h4tcsacapp.serializers import BarContactSerializer, BarReportExpandedSerializer


class CustomAdminSite(admin.AdminSite):

    def index(self, request, extra_context=None):
        bar_reports = BarReport.objects.all()
        bars = Bar.objects.filter(is_safebar=True)
        bar_reports_data = BarReportExpandedSerializer(bar_reports, many=True).data[:-4]

        for (index, report) in enumerate(bar_reports_data):
            y, m, d = report['date_submitted'].split("T")[0].split("-")
            bar_reports_data[index]['date_submitted'] = "%s/%s/%s" % (m, d, y)

        recert_bars = []

        for bar in bars:
            if(bar.certification_date):
                expiration = bar.certification_date + relativedelta(months=6)
                expiration_start = bar.certification_date + relativedelta(months=5)
                if (date.today() < expiration) and (date.today() > expiration_start):
                    bar_data = BarContactSerializer(bar).data
                    (y, m, d) = str(expiration).split("-")
                    bar_data["expiration"] = "%s/%s/%s" % (m, d, y)
                    recert_bars.append(bar_data)

        expired_bars = Bar.objects.filter(certification_date__lte=date.today() - relativedelta(months=+6))
        context_expired_bars = []
        for bar in expired_bars:
            expiration = bar.certification_date + relativedelta(months=6)
            bar_data = BarContactSerializer(bar).data
            (y, m, d) = str(expiration).split("-")
            bar_data["expiration"] = "%s/%s/%s" % (m, d, y)
            print(bar_data["expiration"])
            context_expired_bars.append(bar_data)

        return TemplateResponse(request, self.index_template or 'dashboard/index.html', {
            "report_count": bar_reports.count(),
            'safebar_count': bars.count(),
            "bar_reports_data": bar_reports_data,
            'expired_bars': context_expired_bars,
            'recert_bars': recert_bars
        })

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
        site_urls = site_urls + CustomDjangoListViews(
            BarReport,
            AdminBarReportSerializer,
            "reports",
            self.admin_view,
            "Report",
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
admin_site.register(LandingContent)
