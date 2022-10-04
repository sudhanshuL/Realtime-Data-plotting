from pyexpat import model
from rest_framework import serializers
from .models import Value
from .models import Returns

class ValueSerializier(serializers.ModelSerializer):
    class Meta:
        model=Value
        fields="__all__"

class ReturnsSerializier(serializers.ModelSerializer):
    class Meta:
        model=Returns
        fields="__all__"