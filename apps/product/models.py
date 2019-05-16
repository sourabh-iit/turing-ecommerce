from django.db import models


class Attribute(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        db_table = 'attribute'


class AttributeValue(models.Model):
    attribute = models.ForeignKey(Attribute, related_name='values', on_delete=models.CASCADE)
    value = models.CharField(max_length=100)

    class Meta:
        db_table = 'attribute_value'


class Department(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        db_table = 'department'


class Category(models.Model):
    department = models.ForeignKey(Department, related_name='categories', on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        db_table = 'category'


class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=150, blank=True, null=True)
    image_2 = models.CharField(max_length=150, blank=True, null=True)
    thumbnail = models.CharField(max_length=150, blank=True, null=True)
    display = models.SmallIntegerField()

    def get_cost(self):
      if self.discounted_price>0:
        return self.discounted_price
      else:
        return self.price

    class Meta:
        db_table = 'product'


class ProductAttribute(models.Model):
    product = models.ForeignKey(Product, related_name='attributes', on_delete=models.CASCADE)
    attribute_value = models.ForeignKey(AttributeValue, on_delete=models.CASCADE)

    class Meta:
        db_table = 'product_attribute'
        unique_together = (('product', 'attribute_value'),)


class ProductCategory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        db_table = 'product_category'
        unique_together = (('product', 'category'),)


class Review(models.Model):
    customer = models.ForeignKey('user.Customer', related_name='reviews', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.SmallIntegerField()
    created_on = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'review'
