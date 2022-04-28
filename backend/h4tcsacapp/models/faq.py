import uuid
from django.db import models


class FAQ(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    question = models.CharField(("FAQ Question"), max_length=254)
    answer = models.CharField(("FAQ Answer"), max_length=254)
