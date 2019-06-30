from django.shortcuts import render
from django.contrib.auth import logout
from django.shortcuts import reverse
from django.http import HttpResponseRedirect
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver

from .models import Customer


def logout_view(request):
  cart_id = request.session.get('cart_id')
  logout(request)
  if cart_id:
    request.session['cart_id'] = cart_id
  return HttpResponseRedirect(reverse('login'))


@receiver(post_save, sender=User)
def on_super_user_create(sender, instance, **kwargs):
  if instance.is_superuser:
    Customer.objects.get_or_create(user=instance)