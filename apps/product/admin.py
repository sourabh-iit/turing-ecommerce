from django.contrib import admin
from .models import Product, ProductAttribute, ProductCategory, Category, \
  Department, Attribute, AttributeValue, Review
from django.core.cache import cache
from apps.api.handlers.product import products_cache_key, product_cache_key, \
  product_reviews_cache_key
from apps.api.handlers.category import categories_cache_key

def delete_cache(department, category):
  for key in cache.keys('*'):
    if (department and department in key) or (category and category in key):
      cache.delete(key)

def delete_cache_for_product(obj):
  cache.delete(product_cache_key(obj.id))
  product_categories = ProductCategory.objects.filter(product=obj)
  for product_category in product_categories:
    category = product_category.category.name
    department = product_category.category.department.name
    delete_cache(department, category)


class ProductAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)
    cache.delete(products_cache_key('',''))
    if change:
      delete_cache_for_product(obj)

  def delete_model(self, request, obj):
    super().delete_model(request, obj)
    cache.delete(products_cache_key('',''))
    delete_cache_for_product(obj)

  def delete_queryset(self, request, queryset):
    super().delete_queryset(request, queryset)
    for obj in queryset:
      delete_cache_for_product(obj)


class ProductCategoryAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)
    self.delete_cache_for_product_category(obj)

  def delete_model(self, request, obj):
    super().delete_model(request, obj)
    self.delete_cache_for_product_category(obj)

  def delete_queryset(self, request, queryset):
    super().delete_queryset(request, queryset)
    for obj in queryset:
      self.delete_cache_for_product_category(request, queryset)

  def delete_cache_for_product_category(obj):
    cache.delete(products_cache_key('',''))
    category = obj.category.name
    department = obj.category.department.name
    delete_cache(department, category)


class ProductAttributeAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)
    self.delete_cache_for_product_attribute(obj)

  def delete_model(self, request, obj):
    super().delete_model(request, obj)
    self.delete_cache_for_product_attribute(obj)

  def delete_queryset(self, request, queryset):
    super().delete_queryset(request, queryset)
    for obj in queryset:
      self.delete_cache_for_product_attribute(obj)

  def delete_cache_for_product_attribute(self, obj):
    cache.delete(products_cache_key('',''))
    delete_cache_for_product(obj.product)


class CategoryAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)
    self.delete_cache_for_category(obj)

  def delete_model(self, request, obj):
    super().delete_model(request, obj)
    self.delete_cache_for_category(obj)

  def delete_queryset(self, request, queryset):
    super().delete_queryset(request, queryset)
    for obj in queryset:
      self.delete_cache_for_category(obj)

  def delete_cache_for_category(obj):
    department_name = obj.category.department.name
    key = categories_cache_key(department_name)
    cache.delete(key)

  
class DepartmentAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)
    cache.delete('departments')

  def delete_model(self, request, obj):
    super().delete_model(request, obj)
    cache.delete('departments')

  def delete_queryset(self, request, queryset):
    super().delete_queryset(request, queryset)
    cache.delete('departments')


class AttributeAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)

  
class AttributeValueAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)


class ReviewAdmin(admin.ModelAdmin):
  def save_model(self, request, obj, form, change):
    super().save_model(request, obj, form, change)
    cache.delete(product_reviews_cache_key(obj.product.id))

  def delete_model(self, request, obj):
    super().delete_model(request, obj)
    cache.delete(product_cache_key(obj.product.id))
  
  def delete_queryset(self, request, queryset):
    super().delete_model(request, queryset)
    for obj in queryset:
      cache.delete(product_cache_key(obj.product.id))


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductAttribute, ProductAttributeAdmin)
admin.site.register(ProductCategory, ProductCategoryAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Department, DepartmentAdmin)
admin.site.register(Attribute, AttributeAdmin)
admin.site.register(AttributeValue, AttributeValueAdmin)
admin.site.register(Review, ReviewAdmin)