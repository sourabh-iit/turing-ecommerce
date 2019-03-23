from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from django.db import transaction

from apps.api.serializers.order import OrderSerializer, OrderShortSerializer, \
  OrderLongSerializer
from apps.order.models import Order, OrderDetail
from apps.shopping.models import Shipping, Tax, ShoppingCart


class OrderListHandler(APIView):
  def get(self, request):
    orders = Order.objects.filter(customer=request.user.customer)
    return Response(OrderShortSerializer(orders, many=True).data)
  
  def post(self, request):
    try:
      data = request.data
      user = request.user
      shipping=Shipping.objects.get(id=data['shipping'])
      with transaction.atomic():
        order = Order.objects.create(
          status = 3,
          customer=user.customer,
          shipping=shipping
        )
        cartId = request.session.get('cart_id')
        cartItems = ShoppingCart.objects.filter(cart_id=cartId, buy_now=True)
        total_amount = 0
        for item in cartItems:
          amount = item.product.get_cost()*item.quantity
          OrderDetail.objects.create(
            order = order,
            product = item.product,
            attributes = item.attributes,
            product_name = item.product.name,
            quantity = item.quantity,
            unit_cost = amount
          )
          total_amount += amount
        order.total_amount = total_amount
        order.save()
        cartItems.delete()
        return Response(OrderSerializer(order).data)
    except AttributeError:
      raise ValidationError('Insufficient or incorrect data is provided')
    except Shipping.DoesNotExist:
      raise ValidationError('Shipping data provided is incorrect')


class OrderHandler(APIView):
  def get(self, request, orderId):
    try:
      order = Order.objects.get(id=orderId)
    except Order.DoesNotExist:
      raise ValidationError('Order does not exist')
    return Response(OrderLongSerializer(order).data)

  def put(self, request, orderId):
    data = request.data
    try:
      order = Order.objects.get(id=orderId)
      for field in OrderSerializer.write_fields:
        if field in data:
          setattr(order, field, data[field])
      if 'shipping' in data:
        shipping = Shipping.objects.get(id=data['shipping'])
        order.shipping = shipping
      if 'tax' in data:
        tax = Tax.objects.get(id=data['tax'])
        order.tax = tax
      order.save()
      return Response(OrderSerializer(order).data)
    except AttributeError:
      raise ValidationError('Insufficient or incorrect data is provided')
    except Order.DoesNotExist:
      raise ValidationError('Order does not exist')
