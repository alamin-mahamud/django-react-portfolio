from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework.response import Response

from .models import Book
from .serializers import BookSerializer

# Create your views here.


def index(request):
    pass


def services(request):
    pass


def about(request):
    pass


def portfolio(request):
    pass


def projects(request):
    pass


def books(request):
    books = list(Book.objects.all().values())
    return JsonResponse(books, safe=False)


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
