
from django.urls import path, include, re_path
from rest_framework import routers
from myapi import views


urlpatterns = [
    
    re_path(r'^heroes$', views.herosApi),
    re_path(r'^heroes/([0-9]+)$', views.herosApi)
]