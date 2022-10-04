from django.contrib import admin

# Register your models here.
from .models import Value
from .models import Returns

admin.site.register(Value)
admin.site.register(Returns)