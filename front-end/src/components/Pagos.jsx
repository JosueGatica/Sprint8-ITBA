import React from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

const Pagos = () => {
  const facturas = [
    { id: 1, cliente: 'Cliente 1', monto: 100 },
    { id: 2, cliente: 'Cliente 2', monto: 200 },
    { id: 3, cliente: 'Cliente 3', monto: 150 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-[#020B12] text-white p-4 md:p-8 lg:p-12 xl:p-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
          Pagos de Facturas
        </h1>
        <ul className="text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4">
          <li className="mb-4">
            <a className="text-[#DB5860] hover:underline" href="/factura/1">
              Factura #1 - Cliente: Cliente 1 - Monto: $100
            </a>
          </li>
          <li className="mb-4">
            <a className="text-[#DB5860] hover:underline" href="/factura/2">
              Factura #2 - Cliente: Cliente 2 - Monto: $200
            </a>
          </li>
          <li className="mb-4">
            <a className="text-[#DB5860] hover:underline" href="/factura/3">
              Factura #3 - Cliente: Cliente 3 - Monto: $150
            </a>
          </li>
          <li className="mb-4">
            <a className="text-[#DB5860] hover:underline" href="/factura/3">
              Factura #4 - Cliente: Cliente 4 - Monto: $1920
            </a>
          </li>
          <li className="mb-4">
            <a className="text-[#DB5860] hover:underline" href="/factura/3">
              Factura #5 - Cliente: Cliente 5 - Monto: $120
            </a>
          </li>
          <li className="mb-4">
            <a className="text-[#DB5860] hover:underline" href="/factura/3">
              Factura #6 - Cliente: Cliente 6 - Monto: $1500
            </a>
          </li>
          
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Pagos;