# Generated by Django 4.2 on 2023-05-15 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_post_followed_post_readed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='followed',
            field=models.BooleanField(default=True),
        ),
    ]
