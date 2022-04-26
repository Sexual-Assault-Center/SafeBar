from django.db import models
from h4tcsacapp.models.bars import Bar


class Rating(models.Model):
    bar_id = models.ForeignKey(Bar, on_delete=models.PROTECT)
    rating_number = models.IntegerField("Rating Number")
    comment = models.CharField(("Comment"), max_length=254)
    uid = models.CharField(("User ID"), max_length=25)
