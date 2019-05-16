from rest_framework import serializers
from apps.product.models import Product, ProductAttribute, Review


class ReviewSerializer(serializers.ModelSerializer):
  customer = serializers.SerializerMethodField()

  @staticmethod
  def get_customer(review):
    user = review.customer.user
    return {
      'email': user.email,
      'first_name': user.first_name,
      'last_name': user.last_name
    }

  class Meta:
    model = Review
    fields = (
      'customer',
      'review',
      'rating',
      'created_on',
      'id'
    )


class ProductSerializer(serializers.ModelSerializer):
  attributes = serializers.SerializerMethodField()

  @staticmethod
  def get_attributes(product):
    attributes = {}
    for product_attribute in product.attributes.all():
      attribute_name = product_attribute.attribute_value.attribute.name
      attribute_value = product_attribute.attribute_value
      value = {
        'value': attribute_value.value,
        'id': attribute_value.id
      }
      if attribute_name in attributes:
        attributes[attribute_name].append(value)
      else:
        attributes[attribute_name] = [value]
    return attributes

  class Meta:
    model = Product
    fields = (
      'id',
      'name',
      'price',
      'description',
      'image',
      'image_2',
      'discounted_price',
      'thumbnail',
      'display',
      'attributes'
    )


class ProductShortSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = (
      'id',
      'name',
      'price',
      'description',
      'image',
      'image_2',
      'discounted_price',
      'thumbnail',
      'display'
    )

