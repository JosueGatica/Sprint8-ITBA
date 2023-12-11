from django.urls import path, include
from rest_framework import routers
from myapp import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'cliente',views.ClienteView,'cliente')
router.register(r'cuenta',views.CuentaView,'cuenta')
router.register(r'direcciones',views.DireccionesView,'direcciones')
router.register(r'empleado',views.EmpleadoView,'empleado')
router.register(r'marcatarjeta',views.MarcatarjetaView,'marcatarjeta')
router.register(r'prestamo',views.PrestamoView,'prestamo')
router.register(r'sucursal',views.SucursalView,'sucursal')
router.register(r'tarjeta',views.TarjetaView,'tarjeta')
router.register(r'tipocliente',views.TipoclienteView,'tipocliente')
router.register(r'tipocuenta',views.TipocuentaView,'tipocuenta')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Cliente API')),
]

#Genera por defecto rutas GET,POST, PUT, DELETE