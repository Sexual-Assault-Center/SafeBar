from django.contrib import admin
from h4tcsacapp.models.bars import Bar
from h4tcsacapp.models.ratings import Rating
# Register your models here.


class BarAdmin(admin.ModelAdmin):
    pass


class RatingAdmin(admin.ModelAdmin):
    pass


admin.site.register(Bar, BarAdmin)
admin.site.register(Rating, RatingAdmin)
