import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Importa los componentes
import Principal from './Components/Principal/Principal.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
//import Proyectos from './Components/Proyectos';
import Habilidades from './Components/Habilidades/Habilidades.jsx';
import Contactame from './Components/Contactame/Contactame.jsx';

createRoot(document.getElementById('root')).render( 
  <Router>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/about-me" element={<AboutMe/>}/>
      <Route path="/habilidades" element={<Habilidades />} />
      <Route path="/contactame" element={<Contactame />} />
    </Routes>
  </Router>
);

/*  
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/habilidades" element={<Habilidades />} />
      <Route path="/contactame" element={<Contactame />} /></> */