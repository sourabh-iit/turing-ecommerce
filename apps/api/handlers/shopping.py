from rest_framework.views import APIView
from rest_framework.response import Response

from apps.shopping.models import ShippingRegion,Shipping
from apps.api.serializers.shopping import ShippingRegionSerializer, ShippingSerializer


class ShippingRegionListHandler(APIView):
  def get(self, request):
    regions = ShippingRegion.objects.all()
    return Response(ShippingRegionSerializer(regions, many=True).data)


class ShippingListHandler(APIView):
  def get(self, request):
    shippings = Shipping.objects.all()
    return Response(ShippingSerializer(shippings, many=True).data)
