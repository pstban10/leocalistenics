import React from "react";
import '../styles/HeadMenu.css'
import { Link, Outlet } from 'react-router-dom'
import { app } from "./Config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app)

function HeadMenu() {
  const cerrarSesion = (event) => {
    event.preventDefault();
    auth.signOut()
    window.alert('cerraste sesion')

  }

  return (
    <div className="menu">
      <img src={require("../imagenes/logoLeocalistenicsWhite.png")} alt="logoLeocalistenics" />
      <nav>
        <ul className='menuDeNavegacion'>
          <li className='lista1'><Link>Perfil</Link>
            <ul className='perfil'>
              <li className="desplegable"><Link to='#'>Mi Perfil</Link></li>
              <li className="desplegable"><Link to='#'>Contactanos</Link></li>
              <li className="desplegable"><Link onClick={cerrarSesion}>Cerrar Sesion</Link></li>
            </ul></li>
          <li className='lista1'><Link to='/'>Inicio</Link></li>
          <li className='lista1'><Link to='/Programas'>Programas</Link></li>
          <li className='lista1'><Link to='/Nosotros'>Nosotros</Link></li>
          <li className='lista1'><Link to='/Acceder'>Registrate</Link></li>

        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default HeadMenu;