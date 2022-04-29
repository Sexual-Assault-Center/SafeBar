import uuid
from django.db import models


class Bar(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    is_safebar = models.BooleanField("Is Safe Bar", default=False, blank=True)
    is_approved = models.BooleanField("Is Approved", default=False, blank=True)
    name = models.CharField("Name", max_length=254, blank=True, default="")
    contact_name = models.CharField("Contact Name", max_length=255, blank=True, default="")
    phone_number = models.IntegerField("Phone Number", blank=True, null=True, default=None)
    street_address = models.CharField("Street Address", max_length=254, blank=True, default="")
    city = models.CharField(
        "City",
        max_length=254, blank=True, default=""
    )
    zip_code = models.CharField(
        "ZIP / Postal code",
        max_length=12, blank=True, default=""
    )
    latitude = models.CharField(
        "Latitude", max_length=10, blank=True, default="")
    longitude = models.CharField(
        "Longitude", max_length=10, blank=True, default="")
    certification_date = models.DateField("Certification Date", null=True, blank=True, default=None)
    email = models.EmailField(("Email"), max_length=254, blank=True, default="")
    image = models.URLField(("Image"), max_length=254, blank=True, default="")
    description = models.CharField(("Description"), max_length=254, blank=True, default="")
    website = models.URLField(("Website"), max_length=254, blank=True, default="")

    def __str__(self):
        return self.name

    def needs_recertification(self):
        print(self.certification_date)
