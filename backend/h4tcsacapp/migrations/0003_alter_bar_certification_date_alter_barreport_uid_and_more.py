# Generated by Django 4.0.4 on 2022-04-29 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('h4tcsacapp', '0002_alter_bar_city_alter_bar_contact_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bar',
            name='certification_date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Certification Date'),
        ),
        migrations.AlterField(
            model_name='barreport',
            name='uid',
            field=models.CharField(max_length=100, verbose_name='User ID'),
        ),
        migrations.AlterField(
            model_name='list',
            name='uid',
            field=models.CharField(max_length=100, verbose_name='User ID'),
        ),
        migrations.AlterField(
            model_name='rating',
            name='uid',
            field=models.CharField(max_length=100, verbose_name='User ID'),
        ),
    ]
