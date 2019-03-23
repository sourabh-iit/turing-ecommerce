from django.conf.urls import re_path
from django.views.decorators.cache import cache_page

import apps.product.views as views

from apps.api.handlers.product import ProductListHandler, ProductHandler, ReviewListHandler, \
  ReviewHandler
from apps.api.handlers.department import DepartmentListHandler
from apps.api.handlers.category import CategoryListHandler
from apps.api.handlers.cart import ShoppingCartHandler, ShoppingCartItemHandler
from apps.api.handlers.customer import CustomerListHandler, CustomerHandler
from apps.api.handlers.shopping import ShippingRegionListHandler, ShippingListHandler
from apps.api.handlers.order import OrderHandler, OrderListHandler

urlpatterns = (
  re_path(r'^departments/?$', cache_page(60 * 60 * 12)(DepartmentListHandler.as_view())),
  re_path(r'^department/(?P<department>[-\w]+)/categories/?$', cache_page(60 * 60 * 12)(CategoryListHandler.as_view())),
  re_path(r'^products/?$', ProductListHandler.as_view()),
  re_path(r'^products/(?P<product_id>[0-9]+)/?$', cache_page(60 * 60 * 12)(ProductHandler.as_view())),
  re_path(r'^department/(?P<department>[-\w]+)/products/?$', ProductListHandler.as_view()),
  re_path(r'^department/(?P<department>[-\w]+)/category/(?P<category>[-\w]+)/products/?$', ProductListHandler.as_view()),
  re_path(r'^cart/?$', ShoppingCartHandler.as_view()),
  re_path(r'^cart/(?P<item_id>[0-9]+)/?$', ShoppingCartItemHandler.as_view()),
  re_path(r'^customer/register/?$', CustomerListHandler.as_view()),
  re_path(r'^customer/login/?$', CustomerHandler.as_view()),
  re_path(r'^shipping_regions/?$', cache_page(60 * 60 * 12)(ShippingRegionListHandler.as_view())),
  re_path(r'^shippings/?$', cache_page(60 * 60 * 12)(ShippingListHandler.as_view())),
  re_path(r'^orders/?$', OrderListHandler.as_view()),
  re_path(r'^orders/(?P<orderId>[0-9]+)/?$', OrderHandler.as_view()),
  re_path(r'^(?P<order_detail_id>[0-9]+)/review/?$', ReviewHandler.as_view()),
  re_path(r'^(?P<product_id>[0-9]+)/reviews/?$', ReviewListHandler.as_view()),
)
