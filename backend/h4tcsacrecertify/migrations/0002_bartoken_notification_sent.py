# Generated by Django 4.0.4 on 2022-04-29 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('h4tcsacrecertify', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bartoken',
            name='notification_sent',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
