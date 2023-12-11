import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import img1 from './img/3d-fluency-money-mouth-face.png'
export const getStaticProps = async ({ params }) => {
    const { id } = params
    const res = await fetch(`http://localhost:3001/data/${id}`)
    const data = await res.json()
    return {
        props: { data }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:3001/data`)
    const data = await res.json()
    const paths = data.map(item => ({params: {id:item.id.toString()} }))

    return {
        paths,
        fallback: false
    }
}

const transferenciaId = ({data}) => {
  return (
    <div>
        <Header />
        <main className='bg-slate-200  flex items-center justify-center'>
            <div className='min-h-[86vh] flex flex-col items-center justify-center gap-10'>
                <h1 className='text-primary text-[50px] font-bold border-b-2 border-b-primary max-xml:text-2xl'>Detalles de tus Movimientos</h1>  
                {
                    data ? (
                        <div className="card lg:card-side max-xml:w-[90%] bg-base-100 shadow-xl">
                            <figure><Image src={img1} width={200} height={200} alt="Album"/></figure>
                        <div className="card-body flex items-center mt-5">
                            <div className='overflow-x-auto'>
                                <table className='table max-xml:table-xs'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Desde</th>
                                            <th>Hacia</th>
                                            <th>Monto</th>
                                            <th>Motivo</th>
                                            <th>Fecha</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={data.id}>
                                            <th>{data.id}</th>
                                            <td>{data.desde}</td>
                                            <td>{data.hacia}</td>
                                            <td>{data.monto}</td>
                                            <td>{data.motivo}</td>
                                            <td>{data.fecha}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Volver</button>
                        </div>
                        </div>
                        </div>
                    ) : 
                    <span className="loading loading-infinity loading-lg text-primary"></span>
                }
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default transferenciaId