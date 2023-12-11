"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const TransferenciasContent = () => {
let fecha = new Date().toLocaleDateString('es-ES')
const [id, setId] = useState(3)
const [data, setData] = useState([])
const [formData, setFormData] = useState({
  desde: '',
  hacia: '',
  monto: '',
  motivo: '',
  fecha: fecha,
})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001/data')
        const jsonData = await res.json()
        setData(jsonData)
      } catch (error) {
        console.log('Error: ', error);
      }
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const res = await fetch('http://localhost:3001/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if(formData.monto && formData.hacia && formData.motivo && formData.desde != null){
      if(res.ok){
        console.log("Solicitud POST correcta");
        setId(id + 1)
      }
    } else {
        console.log("Error al realizar el POST");
      }
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  }
  

  return (
    <main className='bg-slate-200  flex items-center'>
      <div className="flex flex-col max-lg:gap-12 min-h-[86vh] w-full p-6 lg:flex-row">
        <div className="grid flex-grow h-32 card min-h-[450px] rounded-box place-items-center ">
          <div>
            <h1 className='text-primary text-[50px]'>Transferir</h1>
          </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-4xl bg-base">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Cuenta Origen</span>
          </label>
          <input type="text" placeholder="cuenta origen" value={formData.origen} onChange={handleChange} name='desde' className="input input-bordered text-white" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cuenta Destino</span>
          </label>
          <input type="text" placeholder="cuenta destino" value={formData.hacia} onChange={handleChange} name='hacia' className="input input-bordered text-white" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Monto</span>
          </label>
          <input type="number" placeholder="monto" value={formData.monto} onChange={handleChange} name='monto' className="input input-bordered text-white" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Motivo</span>
          </label>
          <input type="text" placeholder="motivo" value={formData.motivo} onChange={handleChange} name='motivo' className="input input-bordered text-white" required />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSubmit} className="btn hover:bg-red-800 bg-primary text-white border-none text-2xl font-medium">Transferir</button>
        </div>
      </div>
    </div>
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className=" flex-grow card  place-items-center">
            <h2 className='text-primary text-[50px] text-center'>Movimientos</h2>
          <div className='overflow-x-auto rounded-box h-[450px]  shadow-4xl mb-5 '>
            <table className='table bg-base-200 label-text table-pin-rows'>
              <thead>
                <tr>
                  <td>Desde</td> 
                  <td>Hacia</td> 
                  <td>Monto</td> 
                  <td>Motivo</td> 
                  <td>Fecha</td> 
                  <td>Detalle</td>
                </tr>
              </thead>
              <tbody>
              {data ? data.map((item, index) => (
                <tr key={index}>
                  <td >{item.desde}</td> 
                  <td>{item.hacia}</td> 
                  <td>{item.monto}</td> 
                  <td>{item.motivo}</td> 
                  <td>{item.fecha}</td> 
                  <td><Link href={`transferencias/${item.id}`} className=' text-blue-700 font-bold'>Detalle</Link></td>
                </tr>
              ))
              : (
                <span className='text-2xl text-black '>CARGANDO</span>
              )
              }
              </tbody>
              <tfoot>
                <tr>
                <td>Desde</td> 
                  <td>Hacia</td> 
                  <td>Monto</td> 
                  <td>Motivo</td> 
                  <td>Fecha</td> 
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TransferenciasContent