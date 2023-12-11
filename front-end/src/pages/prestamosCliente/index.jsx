import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../components/Header";
import "@/components/styles/Cuentas.module.css";
import Footer from "../../components/Footer";

//Obtengo los datos del cliente provenientes de la API
async function fetchData(id) {
  try {
    // Realizar la solicitud a la API utilizando el ID ingresado
    const response = await fetch(
      `http://127.0.0.1:8000/myapp/api/v1/cliente/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API.");
  }
}

//Obtener prestamos pertenecientes a ese cliente
async function fetchPrestamo(id) {
  try {
    // Realizar la solicitud a la API
    const response = await fetch(`http://127.0.0.1:8000/myapp/api/v1/prestamo`);
    const data = await response.json();

    // Convertir los valores del objeto a un array
    const arrayDatos = Object.values(data);

    // Filtrar el array en base al id del cliente
    const datosFiltrados = arrayDatos.filter(
      (item) => item.customer_id === Number(id)
    );

    return datosFiltrados;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API en prestamo.");
  }
}

//Funcion que engloba lo que voy a mostrar en pantalla
function ResultadoConsulta({ data }) {
  console.log(data.apiDataPrestamo);
  console.log(data.apiDataPrestamo.account_id);
  return (
    <>
      <div>
        <h1>Cliente numero: {data.apiData.customer_id} </h1>
        <p>Nombre: {data.apiData.customer_name}</p>
        <p>Apellido: {data.apiData.customer_surname}</p>
        <p>DNI: {data.apiData.customer_dni}</p>
        <p>Nacimiento: {data.apiData.dob}</p>
        <p>branch_id: {data.apiData.branch_id}</p>
        <p>Tipo cliente: {data.apiData.tipocliente}</p>
      </div>
      <hr />
      <h2>Prestamos</h2>
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

//Funcion principal
function ConsultarApiPrestamo() {
  const router = useRouter();
  const { id } = router.query;

  const [inputId, setInputId] = useState(id || "");
  const [apiData, setApiData] = useState(null);
  const [apiDataPrestamo, setApiDataPrestamo] = useState(null);

  const consultarAPI = async () => {
    try {
      const data = await fetchData(inputId);
      setApiData(data);
      const dataPrestamo = await fetchPrestamo(inputId);
      //console.log(dataPrestamo)
      setApiDataPrestamo(dataPrestamo);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Datos del cliente</h1>
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
          {apiData && apiDataPrestamo && (
            <ResultadoConsulta data={{ apiData, apiDataPrestamo }} />
          )}
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default ConsultarApiPrestamo;
