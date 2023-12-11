import React from 'react'
import Header from "../../components/Header";
import '@/components/styles/Cuentas.module.css';
import SeccionDerecha from "../../components/SeccionDerecha";
import SeccionIzquierda from "../../components/SeccionIzquierda";
import Footer from "../../components/Footer";
import { useState,useEffect } from 'react';

async function fetchData(context) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/myapp/api/v1/cuenta/${context}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function cuenta() {
  const [cuentaData, setCuentaData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(1); //Arreglar
        setCuentaData(data);
        console.log(data)
      } catch (error) {
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        console.error('Error:', error);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <>  
      <Header />
      <main class="flex items-center">
        
        <div class="contenedor flex justify-center items-center gap-5 pt-5">
          {cuentaData && (
            <div>
              <h1>Datos del cliente logeado</h1>
              <p>ID: {cuentaData.customer_id}</p>
              <p>Nombre: {cuentaData.customer_name}</p>
              <p>Apellido: {cuentaData.customer_surname}</p>
              <p>DNI: {cuentaData.customer_dni}</p>
              <p>Nacimiento: {cuentaData.dob}</p>
              <p>branch_id: {cuentaData.branch_id}</p>
              <p>Tipo cliente: {cuentaData.tipocliente}</p>
              <p>Tarjeta: {cuentaData.tarjeta}</p>
            </div>
          )}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default cuenta