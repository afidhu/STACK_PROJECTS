# Generated by Django 5.1.1 on 2024-12-25 22:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Addchapter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('tech', models.TextField()),
                ('video', models.ImageField(upload_to='video_chapter/')),
                ('Course', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='MAIN.course')),
            ],
        ),
    ]
