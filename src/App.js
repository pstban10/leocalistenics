import React from 'react';
import './styles/App.css';
import Encabezado from './componentes/Encabezado';
import HeadMenu from './componentes/headMenu';
import Acceder from './componentes/Acceder';
import Programas from './componentes/Programas';
import Nosotros from './componentes/Nosotros';
import Inicio from './componentes/Sesion';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HeadMenu />
      <Encabezado />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/acceder' element={<Acceder />} />
        <Route path='/programas' element={<Programas />} />
        <Route path='/*' element={<Inicio />} />
      </Routes>


    </div>
  );
}

export default App;