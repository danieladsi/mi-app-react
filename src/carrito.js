import React, { useState } from 'react';

const Componente6 = () => {
  const [mensaje, setMensaje] = useState('');

  const handleClick = () => {
    setMensaje('¡Correcto!');
  };

  return (
    <div>
      <p>{mensaje}Bienvenidos</p>
      <img src="/img/numero.png" alt="Descripción de la imagen" />

      <input type='text' placeholder='¿Cuál es el número?'></input>
      <button onClick={handleClick}>Comprobar</button>
    </div>
  );
}

export default Componente6;