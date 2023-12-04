import React from 'react';
import { Link } from 'react-router-dom';
// import './css/navbar.css';

const Navbar = () => {
  return (
    

<nav>
  <Link to="/Inicio">Inicio</Link>
  <Link to="/Menu">Menu</Link>
  <Link to="/Pedidos">Pedidos</Link>
  <Link to="/Contactos">Contactos</Link>
</nav>



  );
};

export default Navbar;
