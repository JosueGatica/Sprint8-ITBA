"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import logo from './img/itbalogo-removebg-preview.png'
import styles from './styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const router = usePathname();

  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 z-[2] text-center text-xl text-primary bg-[#020B12] p-2 shadow rounded-box w-[80vw]">
        <Link href='/' className={router === "/" ? `${styles.active}` : ""}>Inicio</Link>
        <Link href='/cuenta' className={router === '/cuenta' ? `${styles.active}` : ''}>Cuenta</Link>
        <Link href='/transferencias' className={router === '/transferencias' ? `${styles.active}` : ''}>Transferencias</Link>
        <Link href='/pagos' className={router === '/pagos' ? `${styles.active}` : ''}>Pagos</Link>
        <Link href='/ayuda' className={router === '/ayuda' ? `${styles.active}` : ''}>Ayuda</Link>
        <Link href='/iniciar-sesion' className={router === '/iniciar-sesion' ? `${styles.active}` : ''}>Iniciar Sesion</Link>
      </ul>
    </div>
    <Image src={logo} width={40} height={30} alt='bank logo' />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 text-xl text-primary">
    <Link href='/' className={`${router === "/" ? `${styles.active}` : ""} hover:text-white hover:duration-700`}>Inicio</Link>
    <Link href='/cuenta' className={`${router === "/cuenta" ? `${styles.active}` : ""} hover:text-white hover:duration-700`}>Cuenta</Link>
    <Link href='/transferencias' className={`${router === "/transferencias" ? `${styles.active}` : ""} hover:text-white hover:duration-700`}>Transferencias</Link>
    <Link href='/pagos' className={`${router === "/pagos" ? `${styles.active}` : ""} hover:text-white hover:duration-700`}>Pagos</Link>
    <Link href='/ayuda' className={`${router === "/ayuda" ? `${styles.active}` : ""} hover:text-white hover:duration-700`}>Ayuda</Link>
    <Link href='/iniciarsesion' className={`${router === "/iniciarsesion" ? `${styles.active}` : ""} hover:text-white hover:duration-700`}>Iniciar Sesion</Link>
    </ul>
  </div>
</div>
  )
}

export default Header