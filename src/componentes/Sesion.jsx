import React, { useState, useEffect } from "react";
import LoginForm from "./Login";
import Contenido from "./Contenido";
import { app } from './Config'
import { getAuth } from "firebase/auth";

const auth = getAuth(app);


function Inicio() {

  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        console.log('sesion ya iniciada con:', userCredential);
        setUsuario(userCredential);
      } else {
        console.log('no hay sesion iniciada')
      }
    })
  })

  return <>
    {usuario ? <Contenido /> : <LoginForm setUsuario={setUsuario} />}
  </>
}

export default Inicio;