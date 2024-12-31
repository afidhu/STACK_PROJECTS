# Generated by Django 5.1.1 on 2024-12-27 22:55

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MAIN', '0003_alter_addchapter_course'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='address',
            new_name='password',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='email_name',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='student',
            name='password_name',
        ),
        migrations.RemoveField(
            model_name='student',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='student',
            name='qualification',
        ),
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(default=datetime.datetime(2024, 12, 27, 22, 55, 5, 752952, tzinfo=datetime.timezone.utc), max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='course',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teacher_course', to='MAIN.teacher'),
        ),
    ]