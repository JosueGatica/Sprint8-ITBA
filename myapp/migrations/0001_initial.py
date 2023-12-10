# Generated by Django 5.0 on 2023-12-10 02:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('customer_id', models.AutoField(primary_key=True, serialize=False)),
                ('customer_name', models.TextField()),
                ('customer_surname', models.TextField()),
                ('customer_dni', models.TextField(db_column='customer_DNI')),
                ('dob', models.TextField(blank=True, null=True)),
                ('branch_id', models.IntegerField()),
            ],
            options={
                'db_table': 'cliente',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Cuenta',
            fields=[
                ('account_id', models.AutoField(primary_key=True, serialize=False)),
                ('customer_id', models.IntegerField()),
                ('balance', models.IntegerField()),
                ('iban', models.TextField()),
            ],
            options={
                'db_table': 'cuenta',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Direcciones',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('direccion', models.TextField()),
                ('ciudad', models.TextField(blank=True, null=True)),
                ('estado', models.TextField(blank=True, null=True)),
                ('codigo_postal', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'direcciones',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('employee_id', models.AutoField(primary_key=True, serialize=False)),
                ('employee_name', models.TextField()),
                ('employee_surname', models.TextField()),
                ('employee_hire_date', models.DateField(blank=True, null=True)),
                ('employee_dni', models.TextField(db_column='employee_DNI')),
                ('branch_id', models.IntegerField()),
            ],
            options={
                'db_table': 'empleado',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Marcatarjeta',
            fields=[
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('marca', models.TextField()),
            ],
            options={
                'db_table': 'marcaTarjeta',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('loan_id', models.AutoField(primary_key=True, serialize=False)),
                ('loan_type', models.TextField()),
                ('loan_date', models.TextField()),
                ('loan_total', models.IntegerField()),
                ('customer_id', models.IntegerField()),
            ],
            options={
                'db_table': 'prestamo',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('branch_id', models.AutoField(primary_key=True, serialize=False)),
                ('branch_number', models.BinaryField()),
                ('branch_name', models.TextField()),
                ('branch_address_id', models.IntegerField()),
            ],
            options={
                'db_table': 'sucursal',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tarjeta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.TextField(blank=True, db_column='Numero', null=True, unique=True)),
                ('cvv', models.IntegerField(blank=True, db_column='CVV', null=True)),
                ('fechaotorgamiento', models.DateField(blank=True, db_column='FechaOtorgamiento', null=True)),
                ('fechaexpiracion', models.DateField(blank=True, db_column='FechaExpiracion', null=True)),
                ('tipotarjeta', models.TextField(blank=True, db_column='TipoTarjeta', null=True)),
            ],
            options={
                'db_table': 'tarjeta',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tipocliente',
            fields=[
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('tipo', models.TextField(db_column='Tipo')),
            ],
            options={
                'db_table': 'tipoCliente',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tipocuenta',
            fields=[
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('tipo', models.TextField()),
            ],
            options={
                'db_table': 'tipoCuenta',
                'managed': False,
            },
        ),
    ]
