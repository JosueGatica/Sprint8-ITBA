import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../components/Header";
import "@/components/styles/Cuentas.module.css";
import Footer from "../../components/Footer";

//Datos de la sucursal
async function fetchSucursal(id) {
  try {
    // Realizar la solicitud a la API utilizando el ID ingresado
    const response = await fetch(
      `http://127.0.0.1:8000/myapp/api/v1/sucursal/${id}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API.");
  }
}

//Datos del cliente de esa sucursal
async function fetchCliente(id) {
  try {
    // Realizar la solicitud a la API utilizando el ID ingresado
    const response = await fetch(`http://127.0.0.1:8000/myapp/api/v1/cliente`);
    const data = await response.json();

    // Convertir los valores del objeto a un array
    const arrayDatos = Object.values(data);

    // Filtrar el array
    const datosFiltrados = arrayDatos.filter(
      (item) => item.branch_id === Number(id)
    );

    return datosFiltrados;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API en prestamo.");
  }
}

//Datos de prestamos del cliente de esa sucursal
async function fetchPrestamo(clientes) {
  try {
    // Realizar la solicitud a la API utilizando el ID ingresado
    const response = await fetch(`http://127.0.0.1:8000/myapp/api/v1/prestamo`);
    const data = await response.json();

    // Convertir los valores del objeto a un array
    const prestamo = Object.values(data);
    console.log(prestamo);

    const prestamosVinculados = clientes.map((cliente) => {
      // Filtra los préstamos correspondientes al cliente actual
      const prestamosConCliente = prestamo.filter(
        (prestamosCliente) =>
          prestamosCliente.customer_id == cliente.customer_id
      );

      return prestamosConCliente;
    });

    // console.log(prestamosVinculados)

    // Combina todos los arrays de préstamos en uno solo
    const listaDePrestamos = prestamosVinculados.flat();
    //console.log(listaDePrestamos)

    return listaDePrestamos;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API en prestamo.");
  }
}

function ResultadoConsulta({ data }) {
  return (
    <>
      <div>
        <h1>Sucursal: {data.apiDataSucursal.branch_id}</h1>
      </div>
      <hr />
      <h2>Cliente vinculados a la sucursal</h2>
      <hr />
      {data.apiDataCliente.map((cliente) => (
        <div key={cliente.customer_id}>
          <h1>Cliente numero: {cliente.customer_id} </h1>
          <p>Nombre: {cliente.customer_name}</p>
          <p>Apellido: {cliente.customer_surname}</p>
          <p>DNI: {cliente.customer_dni}</p>
          <hr />
        </div>
      ))}
      <hr />
      <h2>Prestamos de esa sucursal</h2>
      <hr />
      {data.apiDataPrestamo.map((prestamo) => (
        <div key={prestamo.account_id}>
          <p>ID: {prestamo.loan_id}</p>
          <p>Tipo: {prestamo.loan_type}</p>
          <p>Fecha: {prestamo.loan_date}</p>
          <p>Total: {prestamo.loan_total}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

function ConsultarApiPrestamo() {
  const router = useRouter();
  const { id } = router.query;

  const [inputId, setInputId] = useState(id || "");
  const [apiDataSucursal, setApiDataSucursal] = useState(null);
  const [apiDataCliente, setApiDataCliente] = useState(null);
  const [apiDataPrestamo, setApiDataPrestamo] = useState(null);

  const consultarAPI = async () => {
    try {
      //Obtengo sucursal
      const sucursal = await fetchSucursal(inputId);
      setApiDataSucursal(sucursal);

      //Obtengo cliente
      const cliente = await fetchCliente(sucursal.branch_id);
      setApiDataCliente(cliente);

      const prestamos = await fetchPrestamo(cliente);
      setApiDataPrestamo(prestamos);

      //console.log(apiDataPrestamo);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Datos de la sucursal</h1>
        <label htmlFor="idInput">Ingrese el ID:</label>
        <input
          type="text"
          id="idInput"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button type="button" onClick={consultarAPI}>
          Consultar
        </button>
        <div>
          {apiDataSucursal && apiDataCliente && apiDataPrestamo && (
            <ResultadoConsulta
              data={{ apiDataSucursal, apiDataCliente, apiDataPrestamo }}
            />
          )}
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default ConsultarApiPrestamo;
