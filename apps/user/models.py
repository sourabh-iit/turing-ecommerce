from django.db import models
from django.contrib.auth.models import User


class Customer(models.Model):
    user = models.OneToOneField(User, related_name="customer", on_delete=models.CASCADE)
    credit_card = models.TextField(blank=True, null=True)
    address_1 = models.CharField(max_length=100, blank=True, null=True)
    address_2 = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    region = models.CharField(max_length=100, blank=True, null=True)
    postal_code = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    shipping_region = models.ForeignKey('shopping.ShippingRegion', related_name='users', 
      on_delete=models.CASCADE, null=True)
    day_phone = models.CharField(max_length=100, blank=True, null=True)
    eve_phone = models.CharField(max_length=100, blank=True, null=True)
    mob_phone = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        db_table = 'customer'
