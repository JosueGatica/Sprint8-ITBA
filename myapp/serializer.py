from rest_framework import serializers
from .models import Cliente, Cuenta, Direcciones, Empleado,Marcatarjeta, Prestamo, Sucursal, Tarjeta, Tipocliente, Tipocuenta 

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'

class DireccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Direcciones
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'

class MarcatarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcatarjeta
        fields = '__all__'

class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = '__all__'

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'

class TarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarjeta
        fields = '__all__'

class TipoclienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipocliente
        fields = '__all__'

class TipocuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipocuenta
        fields = '__all__'

