// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [idUsuario, setIdUsuario] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // Realizar la autenticación utilizando la API de Django
    const response = await fetch('URL_DE_TU_API/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_usuario: idUsuario }),
    });

    if (response.ok) {
      // Redirigir a la página principal después del inicio de sesión exitoso
      router.push('/');
    } else {
      // Manejar caso de inicio de sesión fallido
      const errorData = await response.json();
      console.error('Error al iniciar sesión:', errorData);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <label htmlFor="idInput">ID de Usuario:</label>
      <input
        type="text"
        id="idInput"
        value={idUsuario}
        onChange={(e) => setIdUsuario(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
}