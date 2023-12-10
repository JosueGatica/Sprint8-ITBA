from django.urls import path, include
from rest_framework import routers
from myapp import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'cliente',views.ClienteView,'cliente')
router.register(r'cuenta',views.ClienteView,'cuenta')
router.register(r'direcciones',views.ClienteView,'direcciones')
router.register(r'empleado',views.ClienteView,'empleado')
router.register(r'marcatarjeta',views.ClienteView,'marcatarjeta')
router.register(r'prestamo',views.ClienteView,'prestamo')
router.register(r'sucursal',views.ClienteView,'sucursal')
router.register(r'tarjeta',views.ClienteView,'tarjeta')
router.register(r'tipocliente',views.ClienteView,'tipocliente')
router.register(r'tipocuenta',views.ClienteView,'tipocuenta')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Cliente API')),
]

#Genera por defecto rutas GET,POST, PUT, DELETE