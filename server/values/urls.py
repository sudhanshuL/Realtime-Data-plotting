
from django.urls import path 
from values import views

urlpatterns = [
    path("first",views.ValueView),
    path("second",views.ReturnsView)
]
