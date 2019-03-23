from django.shortcuts import render
from django.contrib.auth import logout
from django.shortcuts import reverse
from django.http import HttpResponseRedirect


def logout_view(request):
  logout(request)
  return HttpResponseRedirect(reverse('login'))