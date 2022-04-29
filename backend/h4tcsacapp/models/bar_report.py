import uuid
from django.db import models
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.report_type import ReportType


class BarReport(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bar = models.ForeignKey(Bar, on_delete=models.PROTECT)
    report_type = models.ForeignKey(ReportType, on_delete=models.PROTECT)
    comment = models.CharField(("Comment"), max_length=254)
    uid = models.CharField(("User ID"), max_length=100)
