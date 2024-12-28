from django.shortcuts import render
from.serializers import ProductSerializer, CategorySerializer
from.models import Product, Category
from rest_framework import generics
from rest_framework import viewsets
# Create your views here.

class ProductViewList(generics.ListAPIView):
    queryset=o=Product.objects.all()
    serializer_class=ProductSerializer
    
    
    
class CategoryViewList(generics.ListAPIView):
    queryset=o=Category.objects.all()
    serializer_class=CategorySerializer
    
    
    
class ProductViewOperations(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        qls = Product.objects.all()
        nams = self.request.query_params.get('name')
        
        if nams is not None:
            qls = qls.filter(name__icontains=nams)  # Corrected filter lookup
        return qls

    
class CategoryViewOperations(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
