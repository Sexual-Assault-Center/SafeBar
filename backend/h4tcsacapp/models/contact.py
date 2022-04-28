import uuid
from django.db import models


class Contact(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(("Sponser Name"), max_length=50)
    email = models.EmailField(("Email"), max_length=254)
    phone_number = models.IntegerField("Phone Number")
    contact_name = models.CharField(("Contact Name"), max_length=50)
