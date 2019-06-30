from rest_framework.test import APITestCase
from django.urls import reverse
from django.contrib.auth.models import User
from django.conf import settings

from apps.user.models import Customer
from apps.product.models import Product, ProductAttribute, ProductCategory, \
  Department, Category, Attribute, AttributeValue
from apps.api.serializers.product import ProductSerializer
from apps.shopping.models import Shipping, ShippingRegion
from apps.order.models import Order, OrderDetail

import stripe

stripe.api_key = settings.STRIPE_API_KEY


class LoginTestCase(APITestCase):

  def test_login_password_key_error(self):
    url = reverse('login')
    response = self.client.post(url, {'email': 'sfgfs'}, format='json')
    self.assertContains(response, 'password', status_code=404)

  def test_login_authentication_error(self):
    url = reverse('login')
    response = self.client.post(url, {'email': 'sfgfs','password': 'sdfdg'}, format='json')
    self.assertContains(response, 'Email address and password did not match', status_code=400)

  def test_login_customer_created(self):
    url = reverse('login')
    user = User.objects.create_user('sfgfs',password='sdfdg')
    response = self.client.post(url, {'email': 'sfgfs','password': 'sdfdg'}, format='json')
    self.assertEqual(response.status_code, 200)
    self.assertEqual(Customer.objects.filter(user=user).count(),1)


class RegisterTestCase(APITestCase):

  def test_passwords_mismatch(self):
    url = reverse('register')
    response = self.client.post(url, {'email': 'skfjh@sdf.com', 'password': 'sjdg', 'confirm_password': 'sjdfg'})
    self.assertContains(response, 'Password and Confirm Password did not match', status_code=400)

  def test_email_exists(self):
    url = reverse('register')
    response = self.client.post(url, {'email': 'skfjh@sdf.com', 'password': 'sjdg', 'confirm_password': 'sjdg'})
    response = self.client.post(url, {'email': 'skfjh@sdf.com', 'password': 'sjdg', 'confirm_password': 'sjdg'})
    self.assertContains(response, 'User with email address', status_code=400)

  def test_customer_created(self):
    url = reverse('register')
    response = self.client.post(url, {'email': 'skfjh@sdf.com', 'password': 'sjdg', 'confirm_password': 'sjdg'})
    self.assertEqual(response.status_code, 200)
    self.assertEqual(Customer.objects.filter(user__username='skfjh@sdf.com').count(),1)


class ProfileTestCase(APITestCase):

  def test_user_authentication_required(self):
    url = reverse('register')
    response = self.client.put(url, {})
    self.assertEqual(response.status_code, 403)

  def test_data(self):
    data = {
      'city': 'c',
      'region': 'r',
      'user':{
        'first_name': 'f'
      }
    }
    url = reverse('register')
    user = User.objects.create_user('sfgfs',password='sdfdg')
    self.client.force_authenticate(user=user)
    response = self.client.put(url, data, format="json")
    self.assertEqual(response.data['city'], 'c')
    self.assertEqual(response.data['region'], 'r')
    self.assertEqual(response.data['user']['first_name'], 'f')

def productSetup(self):
  self.p1 = Product.objects.create(
    name='ght',
    description='asd asr rtg',
    price='15',
    discounted_price='12',
    image='dfh',
    image_2='dfg',
    thumbnail='sfg',
    display=0
  )
  self.p2 = Product.objects.create(
    name='ast',
    description='ght asr',
    price='13',
    discounted_price='10',
    image='dfh',
    image_2='dfg',
    thumbnail='sfg',
    display=0
  )
  self.p3 = Product.objects.create(
    name='ghe',
    description='asd asr ast',
    price='14',
    discounted_price='12',
    image='dfh',
    image_2='dfg',
    thumbnail='sfg',
    display=0
  )
  self.a1 = Attribute.objects.create(name='a1')
  self.a2 = Attribute.objects.create(name='a2')
  self.a11 = AttributeValue.objects.create(
    attribute=self.a1,
    value='a11'
  )
  self.a12 = AttributeValue.objects.create(
    attribute=self.a1,
    value='a12'
  )
  self.a21 = AttributeValue.objects.create(
    attribute=self.a2,
    value='a21'
  )
  self.a22 = AttributeValue.objects.create(
    attribute=self.a2,
    value='a22'
  )
  self.d1 = Department.objects.create(name='d1',description='df')
  self.c1 = Category.objects.create(
    name='c1',
    description='df',
    department=self.d1
  )
  self.c2 = Category.objects.create(
    name='c2',
    description='df',
    department=self.d1
  )
  ProductAttribute.objects.create(product=self.p1, attribute_value=self.a11)
  ProductAttribute.objects.create(product=self.p1, attribute_value=self.a12)
  ProductAttribute.objects.create(product=self.p1, attribute_value=self.a21)
  ProductAttribute.objects.create(product=self.p2, attribute_value=self.a11)
  ProductAttribute.objects.create(product=self.p2, attribute_value=self.a22)
  ProductAttribute.objects.create(product=self.p3, attribute_value=self.a12)
  ProductAttribute.objects.create(product=self.p3, attribute_value=self.a22)
  ProductCategory.objects.create(product=self.p1,category=self.c1)
  ProductCategory.objects.create(product=self.p2,category=self.c1)
  ProductCategory.objects.create(product=self.p3,category=self.c2)


class ProductTestCase(APITestCase):
  def setUp(self):
    productSetup(self)

  def test_get_all_products(self):
    url = reverse('products')
    response = self.client.get(url,{"search":'{"value":"","all_words":"False"}'})
    self.assertEqual(len(response.data['results']),3)

  def test_get_products_by_department(self):
    url = reverse('department_products',kwargs={'department':'d1'})
    response = self.client.get(url,{"search":'{"value":"","all_words":"False"}'})
    self.assertEqual(len(response.data['results']),3)

  def test_get_products_by_category(self):
    url = reverse('category_products',kwargs={'category':'c1','department':'d1'})
    response = self.client.get(url,{"search":'{"value":"","all_words":"False"}'})
    self.assertEqual(len(response.data['results']),2)
    url = reverse('category_products',kwargs={'category':'c2','department':'d1'})
    response = self.client.get(url,{"search":'{"value":"","all_words":"False"}'})
    self.assertEqual(len(response.data['results']),1)

  def test_get_all_products(self):
    url = reverse('products')
    response = self.client.get(url,{"search":'{"value":"ght asdd","all_words":false}'})
    self.assertEqual(len(response.data['results']),2)
    self.assertEqual(response.data['wordsAccepted'],['ght'])
    self.assertEqual(response.data['wordsIgnored'],['asdd'])
    # self.as(len(response.data['results']),2)
    response = self.client.get(url,{"search":'{"value":"rtg asdd","all_words":false}'})
    self.assertEqual(len(response.data['results']),1)
    response = self.client.get(url,{"search":'{"value":"rtg asdd","all_words":true}'})
    self.assertEqual(len(response.data['results']),0)

class CartTestCase(APITestCase):
  def setUp(self):
    productSetup(self)
    self.cart_url = reverse('cart')

  def add_item_to_cart(self, product):
    p = ProductSerializer(product).data
    attributes = {}
    for attribute in p['attributes']:
      attributes[attribute] = p['attributes'][attribute][0]
    data = {
      'product': p,
      'attributes': attributes,
      'buy_now': 1
    }
    return self.client.post(self.cart_url, data, format='json')

  def test_cart_empty(self):
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),0)

  def test_item_added_to_new_cart(self):
    response = self.add_item_to_cart(self.p1)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),1)
  
  def test_item_added_to_existing_cart(self):
    response = self.add_item_to_cart(self.p1)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),1)
    response = self.add_item_to_cart(self.p2)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),2)

  def test_add_item_with_same_attributes_increase_quantity(self):
    response = self.add_item_to_cart(self.p1)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),1)
    response = self.add_item_to_cart(self.p1)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),1)

  def test_add_item_with_different_attributes_increase_items(self):
    response = self.add_item_to_cart(self.p1)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),1)
    p = ProductSerializer(self.p1).data
    attributes = {}
    for attribute in p['attributes']:
      if len(p['attributes'][attribute])>1:
        attributes[attribute] = p['attributes'][attribute][1]
      else:
        attributes[attribute] = p['attributes'][attribute][0]
    data = {
      'product': p,
      'attributes': attributes,
      'buy_now': 1
    }
    response = self.client.post(self.cart_url, data, format='json')
    response = self.add_item_to_cart(self.p1)
    response = self.client.get(self.cart_url)
    self.assertEqual(len(response.data),2)

  def test_delete_cart_item(self):
    response = self.add_item_to_cart(self.p1)
    url = reverse('cart_item',kwargs={'item_id': response.data['id']})
    response = self.client.delete(url)
    self.assertContains(response, 'successful')
    

class OrderTestCase(APITestCase):
  def setUp(self):
    user = User.objects.create_user(username='ashdga@sdfkjh.com',password='askjfh')
    self.client.force_authenticate(user=user)
    Customer.objects.create(user=user)
    productSetup(self)
    self.sr1 = ShippingRegion.objects.create(shipping_region='sr1')
    self.s = Shipping.objects.create(
      shipping_type='st1',
      shipping_cost='20',
      shipping_region=self.sr1
    )

  def add_item_to_cart(self, product):
    p = ProductSerializer(product).data
    attributes = {}
    for attribute in p['attributes']:
      attributes[attribute] = p['attributes'][attribute][0]
    data = {
      'product': p,
      'attributes': attributes,
      'buy_now': 1
    }
    return self.client.post(reverse('cart'), data, format='json')

  def test_get_orders(self):
    url = reverse('orders')
    response = self.client.get(url)
    self.assertEqual(response.status_code,200)
    self.assertEqual(len(response.data),0)

  def test_empty_cart_error(self):
    url = reverse('orders')
    data = {
      'order': {
        'shipping': 1
      },
      'token': 'dfg'
    }
    response = self.client.post(url, data, format='json')
    self.assertEqual(response.status_code, 400)

  def test_create_order(self):
    url = reverse('orders')
    data = {
      'order': {
        'shipping': 1
      },
      'token': 'dfg'
    }
    response = stripe.Token.create(
      card={
        'number': '4242424242424242',
        'exp_month': 12,
        'exp_year': 2020,
        'cvc': '123',
      }
    )
    data['token'] = response.id
    self.add_item_to_cart(self.p1)
    self.add_item_to_cart(self.p2)
    response = self.client.post(url, data, format='json')
    self.assertEqual(response.status_code, 200)
    order = Order.objects.get(id=response.data['id'])
    self.assertEqual(OrderDetail.objects.filter(order=order).count(),2)
    self.assertEqual(response.data['total_amount'],'42.00')