from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ValidationError
from django.core.cache import cache

from apps.product.models import Category, Department
from apps.api.serializers.category import CategorySerializer


def categories_cache_key(department):
  return f'{department}-categories'


class CategoryListHandler(APIView):
  def get(self, request, department):
    cache_key = categories_cache_key(department)
    if cache.get(cache_key):
      data = cache[cache_key]
    else:
      try:
        department = Department.objects.get(name=department)
        categories = department.categories.all()
        data = CategorySerializer(categories, many=True).data
        cache.set(cache_key, data)
      except Department.DoesNotExist:
        raise ValidationError('Department with name '+department+' does not exist')
    return Response(data)
