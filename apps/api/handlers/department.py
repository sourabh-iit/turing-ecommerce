from rest_framework.views import APIView
from rest_framework.response import Response

from apps.product.models import Department
from apps.api.serializers.department import DepartmentSerializer


class DepartmentListHandler(APIView):
  def get(self, request):
    departments = Department.objects.all()
    return Response(DepartmentSerializer(departments, many=True).data)