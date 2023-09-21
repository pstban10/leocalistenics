import React from "react";
import '../styles/Encabezado.css'
import { Link } from "react-router-dom";

function BotonComenzar() {
  return (
    <Link to='/login'>
      <button className="botonComencemos">Iniciar Sesión</button>
    </Link>
  );
}

function Encabezado() {
  return (
    <div className='contenedorEncabezado'>
      <h1>La Calistenia no tiene limites</h1>
      <BotonComenzar />
    </div>
  )
}


export default Encabezado;