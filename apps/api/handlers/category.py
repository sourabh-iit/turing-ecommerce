from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import ValidationError

from apps.product.models import Category, Department
from apps.api.serializers.category import CategorySerializer


class CategoryListHandler(APIView):
  def get(self, request, department):
    try:
      department = Department.objects.get(name=department)
      categories = department.categories.all()
      return Response(CategorySerializer(categories, many=True).data)
    except Department.DoesNotExist:
      raise ValidationError('Department with name '+department+' does not exist')
