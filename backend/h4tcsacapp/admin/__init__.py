from django.contrib import admin
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.models.resource import Resource


class BarAdmin(admin.ModelAdmin):
    pass


class RatingAdmin(admin.ModelAdmin):
    pass


class ReportTypesAdmin(admin.ModelAdmin):
    pass


class BarReportAdmin(admin.ModelAdmin):
    pass


class ResourceAdmin(admin.ModelAdmin):
    pass


admin.site.register(Bar, BarAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(BarReport, BarReportAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(ReportType, ReportTypesAdmin)
