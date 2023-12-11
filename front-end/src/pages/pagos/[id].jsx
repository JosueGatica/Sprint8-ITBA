import React from 'react';
import { useRouter } from 'next/router';

const DetalleFactura = ({ factura }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Detalle de la Factura #{id}</h1>
      <p>Cliente: {factura.cliente}</p>
      <p>Monto: ${factura.monto}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  // Realiza una llamada a la API para obtener los detalles de la factura
  const response = await fetch(`/api/pagos/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true, // Devuelve un 404 si no se encontró la factura
    };
  }

  return {
    props: {
      factura: data, // Pasa los detalles de la factura a la página
    },
  };
}

export default DetalleFactura;
