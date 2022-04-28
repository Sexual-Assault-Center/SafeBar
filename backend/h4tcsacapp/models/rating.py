import uuid
from django.db import models
from h4tcsacapp.models.bar import Bar


class Rating(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bar = models.ForeignKey(Bar, on_delete=models.PROTECT)
    rating_number = models.IntegerField("Rating Number")
    comment = models.CharField(("Comment"), max_length=254)
    uid = models.CharField(("User ID"), max_length=25)
