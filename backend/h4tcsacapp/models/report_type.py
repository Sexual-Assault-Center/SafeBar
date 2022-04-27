import uuid
from django.db import models


class ReportType(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(("Report Name"), max_length=50)

    def __str__(self):
        return self.name
