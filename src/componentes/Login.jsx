import React, { useState } from 'react';
import '../styles/login.css'
import { app } from './Config'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";


const auth = getAuth(app);

// Autenticacion con google

const provider = new GoogleAuthProvider();

const handlePopUp = (event) => {
  signInWithPopup(auth, provider)
    .then((result) => {

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('hay un error', errorCode, errorMessage)
      const email = error.customData.email;
      window.alert(email)
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential)
    })
}

// Formulario correo y contraseña
const LoginForm = (props) => {
  const iniciarSesionConEmail = (event) => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        props.setUsuario(userCredential.email)
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorCode, errorMessage)
      });
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  //formulario de inicio de sesion y botones

  return (
    <div className='login'>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <section className='botonesInicio'>
          <button className='botonInicio' type="submit" onClick={iniciarSesionConEmail}>¡Inicia Sesión!</button>

          <button className='botonInicio' onClick={handlePopUp}>Inicia sesión con Google</button>
        </section>
      </form>;
      <a href='./Acceder'><h2 className='cambioRegistro'>¿No tienes cuenta? ¡Registrate Gratis!</h2></a>
    </div>
  );

}

export default LoginForm;
