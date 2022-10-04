from django.shortcuts import render

# Create your views here.
from .models import Value
from .serializers import ValueSerializier
from .models import Returns
from .serializers import ReturnsSerializier

from rest_framework import viewsets

class ValueView(viewsets.ModelViewSet):
    queryset=Value.objects.all()
    serializer_class=ValueSerializier

class ReturnsView(viewsets.ModelViewSet):
    queryset=Returns.objects.all()
    serializer_class=ReturnsSerializier