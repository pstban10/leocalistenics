import React from "react";
import '../styles/Programas.css'

function Programas(props) {
  return (
    <div className='contenedorProgramas'>
      <div className='apartado'>
        <h2>Presencial</h2>
        <img src={require('../imagenes/presencial.png')} alt='virtual' />
      </div>
      <div className='apartado'>
        <h2>Virtual</h2>
        <img src={require('../imagenes/presencial.png')} alt='virtual' />
      </div>
      <div className='apartado'>
        <h2>Asesorias especiales</h2>
        <img src={require('../imagenes/presencial.png')} alt='Asesorias especiales' />
      </div>
      <div className='apartado'>
        <h2>Rutinas gratis</h2>
        <img src={require('../imagenes/presencial.png')} alt='virtual' />
      </div>
    </div>


  )
}
Programas()
export default Programas;