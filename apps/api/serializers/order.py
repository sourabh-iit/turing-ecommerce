from rest_framework import serializers

from apps.order.models import Order, OrderDetail
from apps.api.serializers.shopping import ShippingSerializer, TaxSerializer
from apps.api.serializers.product import ProductShortSerializer

import ast


class OrderSerializer(serializers.ModelSerializer):
  write_fields = (
    'total_amount',
    'status'
  )

  class Meta:
    model = Order
    fields = (
      'id',
      'total_amount',
      'created_on',
      'shipped_on',
      'status',
      'comments',
      'customer',
      'auth_code',
      'reference',
      'shipping',
      'tax'
    )


class OrderDetailSerializer(serializers.ModelSerializer):
  product = serializers.SerializerMethodField()
  attributes = serializers.SerializerMethodField()

  @staticmethod
  def get_product(order_detail):
    return ProductShortSerializer(order_detail.product).data

  @staticmethod
  def get_attributes(order_detail):
    return ast.literal_eval(order_detail.attributes)

  class Meta:
    model = OrderDetail
    fields = (
      'id',
      'product',
      'attributes',
      'quantity',
      'unit_cost'
    )


class OrderLongSerializer(serializers.ModelSerializer):
  shipping = serializers.SerializerMethodField()
  tax = serializers.SerializerMethodField()
  order_details = serializers.SerializerMethodField()

  @staticmethod
  def get_shipping(order):
    return ShippingSerializer(order.shipping).data

  @staticmethod
  def get_tax(order):
    return TaxSerializer(order.tax).data

  @staticmethod
  def get_order_details(order):
    return OrderDetailSerializer(order.details.all(), many=True).data

  class Meta:
    model = Order
    fields = (
      'id',
      'total_amount',
      'created_on',
      'shipped_on',
      'status',
      'comments',
      'customer',
      'auth_code',
      'reference',
      'shipping',
      'tax',
      'order_details'
    )


class OrderShortSerializer(serializers.ModelSerializer):
  class Meta:
    model = Order
    fields = (
      'id',
      'total_amount',
      'created_on',
      'shipped_on',
      'status'
    )
