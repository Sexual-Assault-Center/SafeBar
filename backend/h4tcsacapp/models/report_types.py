from django.db import models


class ReportType(models.Model):
    name = models.CharField(("Report Name"), max_length=50)

    def __str__(self):
        return self.name
