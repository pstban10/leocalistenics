import '../styles/Acceder.css'
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from './Config'

const auth = getAuth(app);



function RegistroForm() {
  // Creacion de Usuario con Correo electronico y contraseña
  // Logica de registro con Email y Contraseña
  const creacionDeUsuario = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.alert('Usuario creado con exito')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert('tenemos esto: ', { errorCode, errorMessage })
      });
  }
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [dni, setDNI] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === repetirPassword) {
      console.log("Formulario enviado:", nombreCompleto, dni, email, password);
      creacionDeUsuario()
    } else {
      window.alert("Las contraseñas no coinciden, intenta otra vez");
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre Completo:</label>
        <input type="text" value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} required />
      </div>
      <div>
        <label>DNI:</label>
        <input type="text" value={dni} onChange={(e) => setDNI(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Repite Contraseña:</label>
        <input type="password" value={repetirPassword} onChange={(e) => setRepetirPassword(e.target.value)} required />
      </div>
      <button type="submit">Apuntarse</button>
    </form>
  );
}

function Acceder(props) {
  return (
    <div className="acceder">
      <div className='textoAcceder'>
        <h2>¿Queres apuntarte a nuestras clases?</h2>
        <h2>¿O a nuestro grupo hardcore?</h2>
      </div>

      <div className='contenidoAcceder'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pkedBZT_tK8?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen ></iframe>

        <div className="formulario">
          <RegistroForm />
        </div>
      </div>
    </div>
  )
}
export default Acceder;