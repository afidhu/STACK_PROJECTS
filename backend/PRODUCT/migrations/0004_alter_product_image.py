# Generated by Django 5.1.1 on 2024-12-19 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PRODUCT', '0003_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(default='../PRODUCT/f3.png', null=True, upload_to='image/'),
        ),
    ]
