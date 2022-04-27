import uuid
from django.db import models


class Resource(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(("Title"), max_length=50)
    description = models.CharField(("Desription"), max_length=254)
    url = models.URLField(("URL"), max_length=254)
