import uuid
from django.db import models
from h4tcsacapp.models.bar import Bar


class Favorite(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bar = models.ForeignKey(Bar, on_delete=models.PROTECT)
    uid = models.CharField(("User ID"), max_length=25)
