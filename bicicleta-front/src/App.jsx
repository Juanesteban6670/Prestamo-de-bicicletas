import React, { useState } from 'react';
import './styles/main.css';
import AgregarBicicleta from './components/AgregarBicicleta';
import ListaBicicletas from './components/ListaBicicletas';

function App() {
  const [actualizar, setActualizar] = useState(false);

  const recargarLista = () => setActualizar(!actualizar);

  return (
    <div className="container">
      <h1>Sistema de Préstamo de Bicicletas</h1>
      <AgregarBicicleta onAgregar={recargarLista} />
      <ListaBicicletas actualizar={actualizar} />
    </div>
  );
}

export default App;
