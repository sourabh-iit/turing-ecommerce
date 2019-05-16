from django.db import models


class Order(models.Model):
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    shipped_on = models.DateTimeField(blank=True, null=True)
    status = models.IntegerField(default=0)
    comments = models.CharField(max_length=255, blank=True, null=True)
    customer = models.ForeignKey('user.Customer', related_name='orders', on_delete=models.CASCADE, blank=True, null=True)
    auth_code = models.CharField(max_length=50, blank=True, null=True)
    reference = models.CharField(max_length=50, blank=True, null=True)
    shipping = models.ForeignKey('shopping.Shipping', related_name='orders', on_delete=models.CASCADE, blank=True, null=True)
    tax = models.ForeignKey('shopping.Tax', related_name='orders', on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'orders'


class Audit(models.Model):
    order = models.ForeignKey(Order, related_name='audits', on_delete=models.CASCADE)
    created_on = models.DateTimeField()
    message = models.TextField()
    code = models.IntegerField()

    class Meta:
        db_table = 'audit'


class OrderDetail(models.Model):
    order = models.ForeignKey(Order, related_name='details', on_delete=models.CASCADE)
    product = models.ForeignKey('product.Product', related_name='details', on_delete=models.CASCADE)
    attributes = models.CharField(max_length=1000)
    product_name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    unit_cost = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = 'order_detail'
