from django.db import models

# Create your models here.

class Category(models.Model):
    catg_name=models.CharField(max_length=100)
    
    def __str__(self):
        return self.catg_name
    
    
class Product(models.Model):
    name=models.CharField(max_length=100)
    quantity=models.IntegerField(default=1)
    price=models.IntegerField()
    category=models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    is_available=models.BooleanField(default=True)
    image=models.ImageField( upload_to='image/', default='../PRODUCT/f3.png', null=True)
    date=models.DateTimeField(auto_now_add=True)