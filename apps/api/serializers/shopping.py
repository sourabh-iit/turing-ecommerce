from rest_framework import serializers
from apps.shopping.models import ShippingRegion, Shipping, Tax


class ShippingRegionSerializer(serializers.ModelSerializer):
  class Meta:
    model = ShippingRegion
    fields = (
      'id',
      'shipping_region'
    )

class ShippingSerializer(serializers.ModelSerializer):
  shipping_region = serializers.SerializerMethodField()

  @staticmethod
  def get_shipping_region(shipping):
    return {
      'id': shipping.shipping_region.id,
      'shipping_region': shipping.shipping_region.shipping_region
    }

  class Meta:
    model = Shipping
    fields = (
      'id',
      'shipping_type',
      'shipping_cost',
      'shipping_region'
    )


class TaxSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tax
    fields = (
      'id',
      'tax_type',
      'tax_percentage'
    )
