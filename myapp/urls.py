from django.urls import path, include
from rest_framework import routers
from myapp import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'cliente',views.ClienteView,'cliente')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Cliente API')),
]

#Genera por defecto rutas GET,POST, PUT, DELETE