# Generated by Django 4.0.4 on 2022-04-29 15:57

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('h4tcsacapp', '0002_alter_bar_city_alter_bar_contact_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('uid', models.CharField(max_length=25, verbose_name='User ID')),
                ('bar', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='h4tcsacapp.bar')),
            ],
        ),
    ]
