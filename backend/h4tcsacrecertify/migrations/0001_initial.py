# Generated by Django 4.0.4 on 2022-04-29 14:15

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BarToken',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('token', models.UUIDField()),
                ('bar_id', models.UUIDField()),
            ],
        ),
    ]
