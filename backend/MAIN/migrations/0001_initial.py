# Generated by Django 5.1.1 on 2024-12-25 18:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CourseCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name': 'CourseCategory',
                'verbose_name_plural': '2.CourseCategorys',
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('email_name', models.CharField(max_length=100)),
                ('password_name', models.CharField(max_length=100)),
                ('qualification', models.CharField(max_length=100)),
                ('phone', models.IntegerField()),
                ('address', models.CharField(max_length=100)),
                ('interest', models.TextField()),
            ],
            options={
                'verbose_name': 'Student',
                'verbose_name_plural': '4.Students',
            },
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('qualification', models.CharField(max_length=100)),
                ('phone', models.IntegerField()),
                ('skills', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Tearcher',
                'verbose_name_plural': '1.Tearchers',
            },
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('tech', models.TextField()),
                ('image', models.ImageField(upload_to='image/')),
                ('category', models.ForeignKey(default='1', on_delete=django.db.models.deletion.CASCADE, to='MAIN.coursecategory')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='MAIN.teacher')),
            ],
            options={
                'verbose_name': 'Course',
                'verbose_name_plural': '3.Courses',
            },
        ),
    ]
