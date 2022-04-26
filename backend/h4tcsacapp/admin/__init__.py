from django.contrib import admin
from h4tcsacapp.models.bars import Bar
# Register your models here.


class BarAdmin(admin.ModelAdmin):
    pass


admin.site.register(Bar, BarAdmin)
