from rest_framework import serializers
from apps.shopping.models import ShoppingCart
from .product import ProductSerializer

import json
import ast


class ShoppingCartSerializer(serializers.ModelSerializer):
  write_fields = (
    'quantity',
    'buy_now',
    'attributes'
  )

  product = serializers.SerializerMethodField()
  attributes = serializers.SerializerMethodField()

  @staticmethod
  def get_product(cart):
    return ProductSerializer(cart.product).data

  @staticmethod
  def get_attributes(cart):
    return ast.literal_eval(cart.attributes)

  class Meta:
    model = ShoppingCart
    fields = (
      'id',
      'product',
      'attributes',
      'quantity',
      'buy_now',
      'added_on'
    )
