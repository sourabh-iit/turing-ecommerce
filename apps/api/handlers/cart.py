from rest_framework.views import APIView
from apps.shopping.models import ShoppingCart
from apps.product.models import Product
from rest_framework.response import Response
from apps.api.serializers.cart import ShoppingCartSerializer
from django.core.exceptions import ValidationError
from apps.api.utils import create_random_string


class ShoppingCartHandler(APIView):
  def get(self, request):
    cart_id = request.session.get('cart_id')
    if not cart_id:
      return Response([])
    cart_items = ShoppingCart.objects.filter(cart_id=cart_id)
    return Response(ShoppingCartSerializer(cart_items, many=True).data)

  def post(self, request):
    try:
      data = request.data
      product = Product.objects.get(id=data['product']['id'])
      cart_id = request.session.get('cart_id')
      if not cart_id:
        cart_id = create_random_string(32)
        while ShoppingCart.objects.filter(cart_id=cart_id).exists():
          cart_id = create_random_string(32)
        item = ShoppingCart.objects.create(
          cart_id = cart_id,
          product = product,
          attributes = data['attributes'],
          quantity = 1,
          buy_now=data['buy_now']
        )
      else:
        try:
          item = ShoppingCart.objects.get(cart_id=cart_id, product__id=data['product']['id'], attributes=data['attributes'])
          item.quantity += 1
          item.save()
        except:
          item = ShoppingCart.objects.create(
            cart_id=cart_id,
            product=product,
            attributes = data['attributes'],
            quantity = 1,
            buy_now=data['buy_now']
          )
      request.session['cart_id']=cart_id
      return Response(ShoppingCartSerializer(item).data)
    except Product.DoesNotExist:
      raise ValidationError('')
  
  def put(self, request):
    data=request.data
    cart_id = request.session.get('cart_id')
    for item in data['items']:
      try:
        cart_item = ShoppingCart.objects.get(id=item['id'], cart_id=cart_id)
      except:
        continue
      for field in ShoppingCartSerializer.write_fields:
        if field in item:
          setattr(cart_item, field, item[field])
      cart_item.save()
    cart_items = ShoppingCart.objects.filter(cart_id=cart_id)
    return Response(ShoppingCartSerializer(cart_items, many=True).data)


class ShoppingCartItemHandler(APIView):
  def put(self, request, item_id):
    cart_id = request.session.get('cart_id')
    if not cart_id:
      raise ValidationError('Cart item does not exist')
    try:
      item = ShoppingCart.objects.get(id=item_id, cart_id=cart_id)
    except:
      raise ValidationError('Cart Item does not exist')
    data = request.data
    for field in ShoppingCartSerializer.write_fields:
      if field in data:
        setattr(item, field, data[field])
    item.save()
    return Response(ShoppingCartSerializer(item).data)

  def delete(self, request, item_id):
    cart_id = request.session.get('cart_id')
    if not cart_id:
      raise ValidationError('Cart item does not exist')
    try:
      item = ShoppingCart.objects.get(id=item_id, cart_id=cart_id)
    except:
      raise ValidationError('Cart Item does not exist')
    item.delete()
    return Response('successful')
