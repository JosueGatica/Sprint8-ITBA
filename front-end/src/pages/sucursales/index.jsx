import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../../components/Header";
import "@/components/styles/Cuentas.module.css";
import Footer from "../../components/Footer";

//Datos de todas las sucursales
async function fetchSucursal() {
  try {
    // Realizar la solicitud a la API
    const response = await fetch(
      `http://127.0.0.1:8000/myapp/api/v1/sucursal/`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw new Error("Ocurrió un error al consultar la API.");
  }
}

function ResultadoConsulta({ data }) {
  return (
    <>
      {data.apiDataSucursal.map((sucursal) => (
        <div key={sucursal.branch_id}>
          <p>Nombre: {sucursal.branch_name} - Direccion: {sucursal.direccion_sucursal}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

function ConsultarApiSucursal() {
  const [apiDataSucursal, setApiDataSucursal] = useState(null);

  const consultarAPI = async () => {
    try {
      //Obtengo sucursal
      const sucursal = await fetchSucursal();
      setApiDataSucursal(sucursal);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
       
      <Header />
      <div act>
        <h1>Datos de la sucursales</h1>
        <button type="button" onClick={consultarAPI}>
          Consultar
        </button>
        <div>
          {apiDataSucursal && (
            <ResultadoConsulta
              data={{ apiDataSucursal }}
            />
          )}
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default ConsultarApiSucursal;