import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el mensaje y los datos
    console.log('Mensaje enviado:', message);
    console.log('Nombre:', name);
    console.log('Email:', email);

    // Limpia los campos después de enviar
    setMessage('');
    setName('');
    setEmail('');
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-semibold mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="border rounded w-full py-2 px-3"
            placeholder="Tu nombre"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border rounded w-full py-2 px-3"
            placeholder="tucorreo@example.com"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="border rounded w-full py-2 px-3"
            placeholder="Escribe tu mensaje aquí"
            value={message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
