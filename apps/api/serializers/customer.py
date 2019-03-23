from rest_framework import serializers
from apps.user.models import Customer
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = (
      'username',
      'email',
      'first_name',
      'last_name'
    )


class CustomerSerializer(serializers.ModelSerializer):
  write_fields = (
    'credit_card',
    'address_1',
    'address_2',
    'city',
    'region',
    'postal_code',
    'country',
    'day_phone',
    'eve_phone',
    'mob_phone'
  )
  
  user = serializers.SerializerMethodField()
  shipping_region = serializers.SerializerMethodField()

  @staticmethod
  def get_shipping_region(customer):
    shipping_region = customer.shipping_region
    if not shipping_region:
      return None
    return shipping_region.id

  @staticmethod
  def get_user(customer):
    return UserSerializer(customer.user).data

  class Meta:
    model = Customer
    fields = (
      'user',
      'credit_card',
      'address_1',
      'address_2',
      'city',
      'region',
      'postal_code',
      'country',
      'shipping_region',
      'day_phone',
      'eve_phone',
      'mob_phone'
    )
