# Generated by Django 3.1.5 on 2022-07-28 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0007_change_video_id_to_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flagrequest',
            name='slug',
            field=models.SlugField(blank=True, max_length=250, null=True),
        ),
    ]