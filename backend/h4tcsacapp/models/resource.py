from django.db import models


class Resource(models.Model):
    title = models.CharField(("Title"), max_length=50)
    description = models.CharField(("Desription"), max_length=255)
    url = models.URLField(("URL"), max_length=200)
