from django.contrib import admin
from django.urls import path, include
from . import views

from rest_framework import routers

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'books', views.BookViewSet)

urlpatterns = [
    #path('about', views.about),
    #path('portfolio', views.portfolio),
    #path('projects', views.projects),
    #path('services', views.services),
    path('', include(router.urls)),
    path('auth', include('rest_framework.urls', namespace='rest_framework'))
]
