import uuid
from django.db import models

class BarTokenManager(models.Manager):
    def create_bartoken(self, bar_id):
        barToken = self.create(bar_id=bar_id, token=uuid.uuid4(), notification_sent=False)
        barToken.save()
        return barToken

class BarToken(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    token = models.UUIDField()
    bar_id = models.UUIDField()
    notification_sent = models.BooleanField(default=False, blank=True)
    objects = BarTokenManager()
