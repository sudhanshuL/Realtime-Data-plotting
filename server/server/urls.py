from django.urls import path,include
from django.conf import settings
# from django.conf.urls.static import static

from values.views import ValueView
from rest_framework import routers
from values.views import ReturnsView


from django.contrib import admin
# from django.urls import path
route1=routers.DefaultRouter()
route2=routers.DefaultRouter()
route1.register("",ValueView,basename='valueview')
route2.register("",ReturnsView,basename='returnsview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('companies/',include(route1.urls)),
    path('returns/',include(route2.urls))

]
