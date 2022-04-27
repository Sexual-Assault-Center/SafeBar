import uuid

from django.db import models
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.list import List


class ListBar(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bar = models.ForeignKey(Bar, on_delete=models.PROTECT)
    list = models.ForeignKey(List, on_delete=models.PROTECT)
