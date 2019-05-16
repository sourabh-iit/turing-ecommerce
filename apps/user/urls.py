from django.conf.urls import url

import apps.user.views as views

urlpatterns = (
    url(r'^logout/?$', views.logout_view, name="logout"),
)
