from django.conf.urls import url

import apps.product.views as views

urlpatterns = (
    url(r'^$', views.all_products, name="all-products"),
    url(r'^cart/?$', views.all_products, name="cart"),
    url(r'^orders/?$', views.all_products, name="orders"),
    url(r'^orders/(?P<order_id>[0-9]+)/?$', views.order, name="order"),
    url(r'^checkout/?$', views.all_products, name="checkout"),
    url(r'^products/?$', views.all_products, name="all-products"),
    url(r'^products/(?P<product_name>[-\w]+)/(?P<product_id>[0-9]+)/?$', views.product, name="product"),
    url(r'^(?P<product_name>[a-zA-Z0-9-]+)/write-review/(?P<product_id>[0-9]+)/?$', views.product, name="write-reivew"),
    url(r'^department/(?P<department>[-\w]+)/products/?$', views.all_products, name="department-products"),
    url(r'^customer/login/?$', views.all_products, name="login"),
    url(r'^customer/register/?$', views.all_products, name="register"),
    url(r'^customer/profile/?$', views.all_products, name="profile"),
    url(r'^department/(?P<department>[-\w]+)/category/(?P<category>[-\w]+)/products/?$', views.all_products, name="category-products"),
)
