import uuid
from django.db import models


class LandingContent(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(("Title"), max_length=254)
    media_url = models.URLField(("Media URL"), max_length=254)
    is_video = models.BooleanField(("Is Video"))
    button_text = models.CharField(("Button Text"), max_length=254)
    link_url = models.CharField(("Link URL"), max_length=254)
    link_is_external = models.BooleanField(("Link is External"))
