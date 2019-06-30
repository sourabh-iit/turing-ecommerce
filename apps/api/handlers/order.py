from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from django.db import transaction
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.conf import settings

from apps.api.serializers.order import OrderSerializer, OrderShortSerializer, \
  OrderLongSerializer
from apps.order.models import Order, OrderDetail
from apps.shopping.models import Shipping, Tax, ShoppingCart

import stripe

stripe.api_key = settings.STRIPE_API_KEY


class OrderListHandler(APIView):
  @method_decorator(login_required)
  def get(self, request):
    orders = Order.objects.filter(customer=request.user.customer)
    return Response(OrderShortSerializer(orders, many=True).data)
  
  @method_decorator(login_required)
  def post(self, request):
    try:
      data = request.data
      order = data['order']
      token = data['token']
      user = request.user
      shipping=Shipping.objects.get(id=order['shipping'])
      with transaction.atomic():
        cartId = request.session.get('cart_id')
        cartItems = ShoppingCart.objects.filter(cart_id=cartId, buy_now=True)
        if len(cartItems)==0:
          raise ValidationError('No item in shopping cart')
        order = Order.objects.create(
          status = 3,
          customer=user.customer,
          shipping=shipping
        )
        total_amount = shipping.shipping_cost
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
        total_amount = int(total_amount*100)
        try:
          response = stripe.Charge.create(
            amount = total_amount,
            currency = 'usd',
            source = token
          )
        except stripe.error.RateLimitError as e:
          raise ValidationError('Unable to process request. Please try again later')
        except stripe.error.InvalidRequestError as e:
          raise ValidationError('Invalid parameters passed')
        except stripe.error.AuthenticationError as e:
          raise ValidationError('Invalid API keys. Contact administration.')
        except stripe.error.APIConnectionError as e:
          raise ValidationError('Connection error occurred. Please try again later')
        except stripe.error.StripeError as e:
          raise ValidationError('Error occurred while processing request. Please try again later')
        order.reference = response['id']
        if not response['paid'] or response['amount']!=total_amount:
          raise ValidationError('Total amount is not paid')
        order.save()
        cartItems.delete()
        return Response(OrderSerializer(order).data)
    except AttributeError:
      raise ValidationError('Insufficient or incorrect data is provided')
    except Shipping.DoesNotExist:
      raise ValidationError('Shipping data provided is incorrect')


class OrderHandler(APIView):
  @method_decorator(login_required)
  def get(self, request, orderId):
    try:
      order = Order.objects.get(id=orderId)
    except Order.DoesNotExist:
      raise ValidationError('Order does not exist')
    return Response(OrderLongSerializer(order).data)

  @method_decorator(login_required)
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
