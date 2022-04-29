import uuid
from django.db import models


class Bar(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    is_safebar = models.BooleanField("Is Safe Bar", default=False)
    is_approved = models.BooleanField("Is Approved", default=False)
    name = models.CharField("Name", max_length=254,)
    contact_name = models.CharField("Contact Name", max_length=255,)
    phone_number = models.IntegerField("Phone Number")
    street_address = models.CharField("Street Address", max_length=254,)
    city = models.CharField(
        "City",
        max_length=254,
    )
    zip_code = models.CharField(
        "ZIP / Postal code",
        max_length=12,
    )
    latitude = models.CharField(
        "Latitude", max_length=10, blank=True, default="")
    longitude = models.CharField(
        "Longitude", max_length=10, blank=True, default="")
    certification_date = models.DateField("Certification Date", null=True)
    email = models.EmailField(("Email"), max_length=254)
    image = models.URLField(("Image"), max_length=254, blank=True)
    description = models.CharField("Description", max_length=254)
    website = models.URLField(("Website"), max_length=254)

    def __str__(self):
        return self.name
