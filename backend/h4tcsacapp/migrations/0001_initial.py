# Generated by Django 4.0.4 on 2022-04-29 14:15

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bar',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('is_safebar', models.BooleanField(default=False, verbose_name='Is Safe Bar')),
                ('is_approved', models.BooleanField(default=False, verbose_name='Is Approved')),
                ('name', models.CharField(max_length=254, verbose_name='Name')),
                ('contact_name', models.CharField(max_length=255, verbose_name='Contact Name')),
                ('phone_number', models.IntegerField(verbose_name='Phone Number')),
                ('street_address', models.CharField(max_length=254, verbose_name='Street Address')),
                ('city', models.CharField(max_length=254, verbose_name='City')),
                ('zip_code', models.CharField(max_length=12, verbose_name='ZIP / Postal code')),
                ('latitude', models.CharField(blank=True, default='', max_length=10, verbose_name='Latitude')),
                ('longitude', models.CharField(blank=True, default='', max_length=10, verbose_name='Longitude')),
                ('certification_date', models.DateField(null=True, verbose_name='Certification Date')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('image', models.URLField(blank=True, max_length=254, verbose_name='Image')),
                ('description', models.CharField(max_length=254, verbose_name='Description')),
                ('website', models.URLField(max_length=254, verbose_name='Website')),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, verbose_name='Sponser Name')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone_number', models.BigIntegerField(verbose_name='Phone Number')),
                ('contact_name', models.CharField(max_length=50, verbose_name='Contact Name')),
            ],
        ),
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('question', models.CharField(max_length=254, verbose_name='Question')),
                ('answer', models.CharField(max_length=10000, verbose_name='Answer')),
            ],
        ),
        migrations.CreateModel(
            name='LandingContent',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=254, verbose_name='Title')),
                ('media_url', models.URLField(max_length=254, verbose_name='Media URL')),
                ('is_video', models.BooleanField(verbose_name='Is Video')),
                ('button_text', models.CharField(max_length=254, verbose_name='Button Text')),
                ('link_url', models.CharField(max_length=254, verbose_name='Link URL')),
                ('link_is_external', models.BooleanField(verbose_name='Link is External')),
            ],
        ),
        migrations.CreateModel(
            name='List',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('uid', models.CharField(max_length=25, verbose_name='User ID')),
                ('name', models.CharField(max_length=254, verbose_name='Name')),
            ],
        ),
        migrations.CreateModel(
            name='ReportType',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50, verbose_name='Report Name')),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50, verbose_name='Title')),
                ('description', models.CharField(max_length=254, verbose_name='Desription')),
                ('url', models.URLField(max_length=254, verbose_name='URL')),
            ],
        ),
        migrations.CreateModel(
            name='Sponser',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=254, verbose_name='Name')),
                ('logo', models.CharField(max_length=254, verbose_name='Logo')),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('rating_number', models.IntegerField(verbose_name='Rating Number')),
                ('comment', models.CharField(max_length=254, verbose_name='Comment')),
                ('uid', models.CharField(max_length=25, verbose_name='User ID')),
                ('bar', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='h4tcsacapp.bar')),
            ],
        ),
        migrations.CreateModel(
            name='ListBar',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('bar', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='h4tcsacapp.bar')),
                ('list', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='h4tcsacapp.list')),
            ],
        ),
        migrations.CreateModel(
            name='BarReport',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('comment', models.CharField(max_length=254, verbose_name='Comment')),
                ('uid', models.CharField(max_length=25, verbose_name='User ID')),
                ('bar', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='h4tcsacapp.bar')),
                ('report_type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='h4tcsacapp.reporttype')),
            ],
        ),
    ]
