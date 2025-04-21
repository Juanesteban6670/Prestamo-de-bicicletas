import React, { useEffect, useState } from 'react';
import Notification from './Notification';

const ListaBicicletas = ({ actualizar }) => {
  const [bicicletas, setBicicletas] = useState([]);
  const [notificacion, setNotificacion] = useState(null);

  const cargarBicicletas = async () => {
    const response = await fetch('http://localhost:8080/bicicletas');
    const data = await response.json();
    setBicicletas(data);
  };

  useEffect(() => {
    cargarBicicletas();
  }, [actualizar]);

  const realizarAccion = async (id, accion) => {
    const response = await fetch(`http://localhost:8080/bicicletas/${id}/${accion}`, {
      method: 'PUT',
    });
  
    if (response.ok) {
      setNotificacion({ message: `✅ Bicicleta ${accion === 'prestar' ? 'prestada' : 'devuelta'}`, type: 'success' });
      cargarBicicletas();
    } else {
      setNotificacion({ message: '❌ No se pudo realizar la acción', type: 'error' });
    }
  
    setTimeout(() => setNotificacion(null), 3000);
  };
  
  return (
    <div>
      <h2>Lista de Bicicletas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {bicicletas.map((bici) => (
            <tr key={bici.id}>
              <td>{bici.id}</td>
              <td>{bici.marca}</td>
              <td>{bici.modelo}</td>
              <td className={`status ${bici.disponible ? 'available' : 'unavailable'}`}>
                {bici.disponible ? 'Disponible' : 'Prestada'}
              </td>
              <td>
                {bici.disponible ? (
                  <button className="action-btn prestar" onClick={() => realizarAccion(bici.id, 'prestar')}>
                    Prestar
                  </button>
                ) : (
                  <button className="action-btn devolver" onClick={() => realizarAccion(bici.id, 'devolver')}>
                    Devolver
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Notification message={notificacion?.message} type={notificacion?.type} />
    </div>
  );
};

export default ListaBicicletas;
