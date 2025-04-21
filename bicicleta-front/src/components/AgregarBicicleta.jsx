import React, { useState } from 'react';
import Notification from './Notification';

const AgregarBicicleta = ({ onAgregar }) => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [notificacion, setNotificacion] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/bicicletas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ marca, modelo }),
    });

    if (response.ok) {
      setNotificacion({ message: '🚲 Bicicleta agregada exitosamente', type: 'success' });
      setMarca('');
      setModelo('');
      onAgregar();
    } else {
      setNotificacion({ message: '❌ Error al agregar bicicleta', type: 'error' });
    }

    setTimeout(() => setNotificacion(null), 3000);
  };

  return (
    <div>
      <h2>Agregar Nueva Bicicleta</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} required />
        <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} required />
        <button type="submit">Agregar Bicicleta</button>
      </form>
      <Notification message={notificacion?.message} type={notificacion?.type} />
    </div>
  );
};

export default AgregarBicicleta;
