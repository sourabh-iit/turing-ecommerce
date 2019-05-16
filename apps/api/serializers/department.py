from rest_framework import serializers
from apps.product.models import Department
from apps.api.serializers.category import CategorySerializer


class DepartmentSerializer(serializers.ModelSerializer):
  categories = serializers.SerializerMethodField()

  @staticmethod
  def get_categories(department):
    return CategorySerializer(department.categories, many=True).data

  class Meta:
    model = Department
    fields = (
      'id',
      'name',
      'description',
      'categories'
    )
    