from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ValidationError
from django.conf import settings


class ExceptionHandlingMiddleware:
  def __init__(self, get_response):
    self.get_response = get_response

  def __call__(self, request):
    response = self.get_response(request)
    return response

  def process_exception(self, request, exception):
    if type(exception)==ValidationError:
      return HttpResponse(exception.message, status=400)
    if not settings.DEBUG:
      return HttpResponse('Internal server error occurred', status=500)
