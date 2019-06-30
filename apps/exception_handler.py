from django.http import JsonResponse, HttpResponse
from django.core.exceptions import ValidationError, PermissionDenied
from django.conf import settings
from django.utils.datastructures import MultiValueDictKeyError


class ExceptionHandlingMiddleware:
  def __init__(self, get_response):
    self.get_response = get_response

  def __call__(self, request):
    response = self.get_response(request)
    return response

  def process_exception(self, request, exception):
    if type(exception)==ValidationError:
      return HttpResponse(exception.message, status=400)
    if type(exception)==PermissionDenied:
      return HttpResponse(exception.message, status=403)
    if type(exception)==MultiValueDictKeyError or type(exception)==KeyError:
      message = 'Following keys are missing in data: '+', '.join(list(exception.args))
      return HttpResponse(message, status=404)
    if not settings.DEBUG:
      import pdb; pdb.set_trace()
      return HttpResponse('Internal server error occurred', status=500)
