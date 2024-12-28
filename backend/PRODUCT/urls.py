from django.urls import path

from rest_framework.routers import DefaultRouter
from.views import ProductViewOperations, ProductViewList, CategoryViewOperations, CategoryViewList

route=DefaultRouter()
route.register('product', ProductViewOperations, basename='products')
route.register('catg', CategoryViewOperations, basename='category')

urlpatterns = [
    path('pro/', ProductViewList.as_view(), name='product'),
    path('catgView/', CategoryViewList.as_view(), name='category')
    
]+route.urls

