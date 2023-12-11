"use client"
import React, { useState } from "react";
import './styles/Section.module.css'

function Section() {

  const [correo, setCorreo] = useState('admin@gmail.com');
  const [contraseña,setContraseña] = useState('admin123');

  const comprobarDatos = () =>{
    if (correo === 'admin@gmail.com' && contraseña === 'admin123'){
      console.log('si')
    } else
    {
      console.log('no')
    }
  }

    return (
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div>
                <div className="card-body p-5 text-center">
                  <form onSubmit={comprobarDatos}>
                    <div className="mb-md-5 mt-md-4 pb-5">
        
                      <h2 className="fw-bold mb-1 mt-5 text-uppercase" id="iniciarsesion">Iniciar sesion</h2>
        
                      <div className="form-outline form-white mb-4">
                          <label className="form-label" htmlFor="typeEmailX">Correo</label>
                        <input type="email" id="typeEmailX" className="correo form-control form-control-lg" value={correo} onChange={() => setCorreo()}
                          />
                      </div>
        
                      <div className="form-outline form-white mb-4">
                          <label className="contraseña form-label" htmlFor="typePasswordX">Contraseña</label>
                        <input type="password" id="typePasswordX" className="password form-control form-control-lg" value={contraseña}  onChange={() => setContraseña()}/>
                      </div>
                      
                      <button className="btn btn-outline-light btn-lg px-5" id="botoniniciarsesion" type="submit">Iniciar sesion</button>
                      <div className="w-100 d-flex justify-content-center pt-5">
                        <img src={require('./img/itbalogo-removebg-preview.png')} alt="Logo ITBA" />
                      </div>
                    </div>
                  </form>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Section;