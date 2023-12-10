from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ClienteSerializer,CuentaSerializer,DireccionesSerializer,EmpleadoSerializer,MarcatarjetaSerializer,PrestamoSerializer,SucursalSerializer,TarjetaSerializer,TipoclienteSerializer,TipocuentaSerializer
from .models import Cliente, Cuenta, Direcciones, Empleado,Marcatarjeta, Prestamo, Sucursal, Tarjeta, Tipocliente, Tipocuenta 

# Create your views here.
class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset= Cliente.objects.all()

class CuentaView(viewsets.ModelViewSet):
    serializer_class = CuentaSerializer
    queryset= Cuenta.objects.all()

class DireccionesView(viewsets.ModelViewSet):
    serializer_class = DireccionesSerializer
    queryset= Direcciones.objects.all()

class EmpleadoView(viewsets.ModelViewSet):
    serializer_class = EmpleadoSerializer
    queryset= Empleado.objects.all()

class MarcatarjetaView(viewsets.ModelViewSet):
    serializer_class = MarcatarjetaSerializer
    queryset= Marcatarjeta.objects.all()

class PrestamoView(viewsets.ModelViewSet):
    serializer_class = PrestamoSerializer
    queryset= Prestamo.objects.all()

class SucursalView(viewsets.ModelViewSet):
    serializer_class = SucursalSerializer
    queryset= Sucursal.objects.all()

class TarjetaView(viewsets.ModelViewSet):
    serializer_class = TarjetaSerializer
    queryset= Tarjeta.objects.all()

class TipoclienteView(viewsets.ModelViewSet):
    serializer_class = TipoclienteSerializer
    queryset= Tipocliente.objects.all()

class TipocuentaView(viewsets.ModelViewSet):
    serializer_class = TipocuentaSerializer
    queryset= Tipocuenta.objects.all()