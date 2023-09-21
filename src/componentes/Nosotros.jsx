import '../styles/Nosotros.css'
import React from "react";

function Nosotros() {
  return (
    <div className='contenedorInfo'>
      <div className='contenedorSlider'>
        <img src={require('../imagenes/vale.png')} alt="fotoDeVale" />
      </div>
      <div className='textoInfo'>
        <h2>¿a que nos dedicamos?</h2>
        <p>Nos dedicamos a la calistenia como metodo de entrenamiento, ya sea para la salud de cualquier persona que quiera hacerse mas fuerte, saludale, flexible y coordinado, como tambien a la calistenia de competicion, donde preparamos a atletas para que puedan dar su mejor versión en la disciplina que amamos</p>
        <h2>¿Porque unirtenos?</h2>
        <p>Somos un grupo que nacio desde la idea de dar lugar a personas que quieran mejorar constantemente y de gran calidad humana, eso es lo que queremos que se encuentre cada nuevo integrante que se una a nuestros entrenamientos</p>
        <h2>Requisitos</h2>
        <ul>
          <li>50 muscle ups</li>
          <li>600 push ups</li>
          <li>300 pull ups</li>
          <li>150 burpees</li>
          <li>3min frontLever</li>
        </ul>
      </div>
    </div>
  )
}
export default Nosotros;