import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../components/Header";
import "@/components/styles/Cuentas.module.css";
import Footer from "../../components/Footer";

//Funcion asincronca para obtener los datos del cliente
async function fetchData(id) {
  try {
    // Realizar la solicitud a la API utilizando el ID ingresado
    const response = await fetch(
      `http://127.0.0.1:8000/myapp/api/v1/cliente/${id}`
    );
    //Convierto a json
    const data = await response.json();
    console.log(data);
    console.log(typeof data);
    return data;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API.");
  }
}

///Funcion asincronca para obtener los datos de la cuenta, vinculada con un cliente
async function fetchDataCuenta(id) {
  try {
    // Realizar la solicitud a la API
    const response = await fetch(`http://127.0.0.1:8000/myapp/api/v1/cuenta`);
    const data = await response.json();

    // Converti los valores del objeto a un array
    const arrayDatos = Object.values(data);

    // Filtrar el array segun el id del cliente (ambos comparten customer_id)
    const datosFiltrados = arrayDatos.filter(
      (item) => item.customer_id === Number(id)
    );

    return datosFiltrados;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API en cuenta.");
  }
}

///Funcion asincronca para obtener los datos de las tarjetas del cliente
async function fetchTarjetas(clientes){
  try {
    // Realizar la solicitud a la API
    const response = await fetch(`http://127.0.0.1:8000/myapp/api/v1/tarjeta`);
    const data = await response.json();

    // Convertir los valores del objeto a un array
    const arrayDatos = Object.values(data);

    // Filtrar el array segun el id de la tarjeta
    const datosFiltrados = arrayDatos.filter(
      (item) => item.id === clientes.tarjeta
    );

    console.log(datosFiltrados)

    return datosFiltrados;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API en cuenta.");
  }
}

//Funcion que contenido el contenido a mostrar dado por la API
function ResultadoConsulta({ data }) {
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
      <h2>Datos de la Cuentas</h2>
      <hr />
      {data.apiDataCuenta.map((cuenta) => (
        <div key={cuenta.account_id}>
          <p>Account ID: {cuenta.account_id}</p>
          <p>Customer ID: {cuenta.customer_id}</p>
          <p>Balance: {cuenta.balance}</p>
          <p>IBAN: {cuenta.iban}</p>
          <p>Tipo de Cuenta: {cuenta.tipocuenta}</p>
          <hr />
        </div>
      ))}
      <hr />
      <h2>Tarjetas vinculadas</h2>
      <hr />
      {data.apiDataTarjeta.map((tarjeta) => (
        <div key={tarjeta.id}>
          <p>Numero: {tarjeta.numero}</p>
          <p>CVV: {tarjeta.cvv}</p>
          <p>Fecha otorgamiento: {tarjeta.fechaotorgamiento}</p>
          <p>Fecha expiracion: {tarjeta.fechaexpiracion}</p>
          <p>Tipo de tarjeta: {tarjeta.tipotarjeta}</p>
          <p>Marca tarjeta: {tarjeta.marcatarjeta}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

//Funcion a exportar, que realiza las consultas
function ConsultaAPI() {
  const router = useRouter();
  const { id } = router.query;

  //Defino useState
  const [inputId, setInputId] = useState(id || "");
  const [apiData, setApiData] = useState(null);
  const [apiDataCuenta, setApiDataCuenta] = useState(null);
  const [apiDataTarjeta, setApiDataTarjeta] = useState(null);

  //Realizo las consultas a la api y guardo los estados
  const consultarAPI = async () => {
    try {
      const data = await fetchData(inputId);
      setApiData(data);

      const dataCuenta = await fetchDataCuenta(inputId);
      //console.log(dataCuenta)
      setApiDataCuenta(dataCuenta);

      const dataTarjeta = await fetchTarjetas(apiData);
      setApiDataTarjeta(dataTarjeta);

    } catch (error) {
      alert(error.message);
    }
  };

  //Lo que voy a mostrar
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
          {apiData && apiDataCuenta && apiDataTarjeta && (
            <ResultadoConsulta data={{ apiData, apiDataCuenta, apiDataTarjeta }} />
          )}
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default ConsultaAPI;
