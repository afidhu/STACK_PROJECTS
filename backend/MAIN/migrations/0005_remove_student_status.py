# Generated by Django 5.1.1 on 2024-12-27 23:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0004_rename_address_student_password_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='status',
        ),
    ]