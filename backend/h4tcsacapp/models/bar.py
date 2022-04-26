from django.db import models


class Bar(models.Model):
    is_safebar = models.BooleanField("Is Safe Bar")
    name = models.CharField("Name", max_length=1024,)
    contact_name = models.CharField("Contact Name", max_length=1024,)
    phone_number = models.IntegerField("Phone Number")
    street_address = models.CharField("Street Address", max_length=1024,)
    city = models.CharField(
        "City",
        max_length=1024,
    )
    zip_code = models.CharField(
        "ZIP / Postal code",
        max_length=12,
    )
    latitude = models.CharField(
        "Latitude", max_length=10, blank=True, default="")
    longitude = models.CharField(
        "Longitude", max_length=10, blank=True, default="")
    certification_date = models.DateField("Certification Date")
    email = models.EmailField(("Email"), max_length=254)
    image = models.URLField(("Image"), max_length=200)
    description = models.CharField("Description", max_length=254)
    website = models.URLField(("Website"), max_length=200)

    def __str__(self):
        return self.name
