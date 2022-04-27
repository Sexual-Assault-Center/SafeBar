import uuid
from django.db import models


class Sponser(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(("Name"), max_length=254)
    logo = models.CharField(("Logo"), max_length=254)
