import React from 'react'
import styles from './styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
    <div className={`${styles.footerText} flex justify-center items-center gap-7 w-screen max-sm:flex-col max-sm:gap-1`}>
        <a href="">POLITICAS DE SEGURIDAD</a>
        <a href="">TERMINOS Y CONDICIONES</a>
        <a href="">CONTACTO</a>
        <div className={`${styles.footerImg} flex items-center gap-3`}>
            <a href="https://www.instagram.com">
                <Image src="https://logotipoz.com/wp-content/uploads/2021/10/instagram-2-1.svg" width={50} height={50} alt="Instagram Logo"/>
            </a>
            <a href="https://www.twitter.com">
                <Image src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" width={50} height={50} alt="Twitter Logo"/>
            </a>
            <a href="https://www.facebook.com">
                <Image src="https://www.freepnglogos.com/uploads/facebook-logo-13.png" width={50} height={50} alt="Facebook Logo"/>
            </a>
        </div>
    </div>
    </footer>
)
}

export default Footer