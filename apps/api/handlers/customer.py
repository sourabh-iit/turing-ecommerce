from rest_framework.views import APIView
from rest_framework.response import Response

from django.db import transaction
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from apps.user.models import Customer
from apps.api.serializers.customer import CustomerSerializer
from apps.shopping.models import ShippingRegion
from django.contrib.auth import authenticate, login


class CustomerListHandler(APIView):
  def get(self, request):
    if request.user.is_authenticated:
      return Response(CustomerSerializer(request.user).data)
    return Response({})
  
  def post(self, request):
    data = request.data
    try:
      if data['password']!=data['confirm_password']:
        raise ValidationError('Password and Confirm Password did not match')
      if User.objects.filter(email=data['email']).exists():
        raise ValidationError('User with email address '+data['email']+' already exists')
      with transaction.atomic():
        user = User.objects.create_user(
          username=data['email'],
          email=data['email'],
          password=data['password']
        )
        customer = Customer.objects.create(user=user)
      return Response(CustomerSerializer(customer).data)
    except KeyError:
      ValidationError('Insufficient data provided')

  def put(self, request):
    user = request.user
    if not user.is_authenticated:
      raise ValidationError('User is not logged in')
    customer = user.customer
    if not customer:
      customer = Customer.objects.create(user=user)
    data = request.data
    for field in CustomerSerializer.write_fields:
      if field in data:
        setattr(customer, field, data[field])
    if 'first_name' in data:
      user.first_name = data['first_name']
    if 'last_name' in data:
      user.last_name = data['last_name']
    if 'shipping_region' in data:
      shipping_region = ShippingRegion.objects.get(id=data['shipping_region'])
      customer.shipping_region = shipping_region
    with transaction.atomic():
      customer.save()
      user.save()
    return Response(CustomerSerializer(customer).data)

class CustomerHandler(APIView):
  def get(self, request):
    user = request.user
    if request.user.is_authenticated:
      return Response(CustomerSerializer(user.customer).data)
    else:
      return Response({})

  def post(self, request):
    data = request.data
    user = authenticate(username=data['email'], password=data['password'])
    if user is not None:
      login(request, user)
    else:
      raise ValidationError('Email address and password did not match')
    try:
      customer = user.customer
    except:
      customer = Customer.objects.create(user=user)
    return Response(CustomerSerializer(user.customer).data)
