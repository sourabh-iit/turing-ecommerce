from django.shortcuts import render
from .models import Product
from django.shortcuts import render

# Create your views here.
def all_products(request, department='', category=''):
  return render(request, 'product/products.html', {})

def product(request, product_name='', product_id=''):
  return render(request, 'product/products.html', {})

def order(request, order_id=''):
  return render(request, 'product/products.html', {})
