from django.contrib import admin
from h4tcsacapp.models.bars import Bar
from h4tcsacapp.models.ratings import Rating
from h4tcsacapp.models.report_types import ReportType


class BarAdmin(admin.ModelAdmin):
    pass


class RatingAdmin(admin.ModelAdmin):
    pass


class ReportTypesAdmin(admin.ModelAdmin):
    pass


admin.site.register(Bar, BarAdmin)
admin.site.register(Rating, RatingAdmin)
admin.site.register(ReportType, ReportTypesAdmin)
