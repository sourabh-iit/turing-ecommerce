from django.db import models


class ShippingRegion(models.Model):
    shipping_region = models.CharField(max_length=100)

    class Meta:
        db_table = 'shipping_region'


class Shipping(models.Model):
    shipping_type = models.CharField(max_length=100)
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=2)
    shipping_region = models.ForeignKey(ShippingRegion, related_name='shippings', on_delete=models.CASCADE)

    class Meta:
        db_table = 'shipping'


class ShoppingCart(models.Model):
    cart_id = models.CharField(max_length=32)
    product = models.ForeignKey('product.Product', related_name='carts', on_delete=models.CASCADE)
    attributes = models.CharField(max_length=1000)
    quantity = models.IntegerField()
    buy_now = models.IntegerField()
    added_on = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'shopping_cart'


class Tax(models.Model):
    tax_type = models.CharField(max_length=100)
    tax_percentage = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'tax'
