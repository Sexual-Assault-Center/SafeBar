import uuid
from django.db import models


class List(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    uid = models.CharField(("User ID"), max_length=100)
    name = models.CharField("Name", max_length=254)
