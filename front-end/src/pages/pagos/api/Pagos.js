export default (req, res) => {
    // Simula la obtención de datos de pagos desde una base de datos o fuente externa
    const facturas = [
      { id: 1, cliente: 'Cliente 1', monto: 100 },
      { id: 2, cliente: 'Cliente 2', monto: 200 },
      { id: 3, cliente: 'Cliente 3', monto: 300 },
    ];
  
    res.status(200).json({ facturas });
  };
  