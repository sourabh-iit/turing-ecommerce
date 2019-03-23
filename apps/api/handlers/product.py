from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from django.core.exceptions import ValidationError
from django.core.cache import cache
from django.http import HttpResponseForbidden

from apps.product.models import Product, Department, Category, ProductCategory, Review
from apps.order.models import OrderDetail
from apps.api.serializers.product import ProductSerializer, ReviewSerializer
from apps.api.handlers.common import PaginationBase, FakePaginationData

import json

product_chache_time = 60 * 60 * 12


class ProductListHandler(APIView, PaginationBase):
  def get(self, request, department='', category=''):
    path = request.path
    search = json.loads(request.GET['search'])
    words = search['value'].split(' ')
    q = Q()
    q1 = Q()
    context={}
    wordsAccepted = []
    wordsIgnored = []
    if len(words)>0:
      if search['all_words']:
        for word in words:
          q &= Q(name__contains=word) | Q(description__contains=word)
          q1 &= Q(product__name__icontains=word) | Q(product__description__icontains=word)
      else:
        for word in words:
          if Product.objects.filter(Q(name__icontains=word)|Q(description__icontains=word)).exists():
            wordsAccepted.append(word)
          else:
            wordsIgnored.append(word)
          q |= Q(name__contains=word) | Q(description__contains=word)
          q1 |= Q(product__name__icontains=word) | Q(product__description__icontains=word)
        context['wordsAccepted'] = wordsAccepted
        context['wordsIgnored'] = wordsIgnored
    
    if len(words)==0 and cache.get(path):
      products = cache.get(path)
    else:
      if department=='' and category=='':
        products = Product.objects.filter(q)
      elif category!='':
        product_categories = ProductCategory.objects.filter(Q(category__name=category),q1)
        products = []
        for product_category in product_categories:
          products.append(product_category.product)
      elif department!='':
        product_categories = ProductCategory.objects.filter(Q(category__department__name=department),q1)
        products = []
        for product_category in product_categories:
          products.append(product_category.product)
        cache.set(path, products, product_chache_time)
    
    page = self.paginate_queryset(products)
    if page is not None:
        serializer = ProductSerializer(page, many=True)
        return self.get_paginated_response(serializer.data, wordsAccepted, wordsIgnored)
    else:
        serializer = ProductSerializer(products, many=True)
        return FakePaginationData(serializer.data, wordsAccepted, wordsIgnored)

class ProductHandler(APIView):
  def get(self, request, product_id):
    try:
      product = Product.objects.get(id=product_id)
      return Response(ProductSerializer(product).data)
    except:
      raise ValidationError('Product does not exist')


class ReviewListHandler(APIView):
  def get(self, request, product_id):
    path = request.path
    try:
      if cache.get(path):
        reviews = cache.get(path)
      else:
        product = Product.objects.get(id=product_id)
        reviews = product.reviews.all()
        cache.set(path, reviews, 60*60*2)
      return Response(ReviewSerializer(reviews, many=True).data)
    except Product.DoesNotExist:
      raise ValidationError('Product does not exist')


class ReviewHandler(APIView):
  def get(self, request, order_detail_id):
    try:
      order_detail = OrderDetail.objects.get(id=order_detail_id)
      if order_detail.order.customer!=request.user.customer:
        raise ValidationError('You do not have permission to edit this review')
      review = Review.objects.get(
        customer = request.user.customer,
        product = order_detail.product
      )
      return Response(ReviewSerializer(review).data)
    except OrderDetail.DoesNotExist:
      raise ValidationError('Order does not exist')
    except Review.DoesNotExist:
      return Response({
        'review': '',
        'rating': 0
      })

  def post(self, request, order_detail_id):
    try:
      order_detail = OrderDetail.objects.prefetch_related('order','product').get(id=order_detail_id)
      user = order_detail.order.customer.user
      if user!=request.user:
        return HttpResponseForbidden('You do not have permission to perform this action')
      data = request.data
      try:
        review = Review.objects.get(
          customer = order_detail.order.customer,
          product = order_detail.product
        )
      except:
        review = Review(
          customer = order_detail.order.customer,
          product = order_detail.product
        )
      review.review = data['review']
      review.rating = data['rating']
      review.save()
      return Response(ReviewSerializer(review).data)
    except OrderDetail.DoesNotExist:
      raise ValidationError('You cannot write review for this product')
