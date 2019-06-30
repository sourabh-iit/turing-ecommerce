from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.cache import cache

from apps.product.models import Department
from apps.api.serializers.department import DepartmentSerializer


class DepartmentListHandler(APIView):
  def get(self, request):
    if cache.get('departments'):
      data = cache.get('departments')
    else:
      departments = Department.objects.all()
      data = DepartmentSerializer(departments, many=True).data
      cache.set('departments', data)
    return Response(data)