import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#inicio" onClick={(e) => scrollTo(e, 'inicio')}>Seba<span className="text-red">s.</span></a>
      </div>
      <div className="navbar-links">
        <a href="#inicio" onClick={(e) => scrollTo(e, 'inicio')}>INICIO</a>
        <a href="#inicio" onClick={(e) => scrollTo(e, 'inicio')}>SOBRE MÍ</a>
        <a href="#proyectos" onClick={(e) => scrollTo(e, 'proyectos')}>PROYECTOS</a>
        <a href="#skills" onClick={(e) => scrollTo(e, 'skills')}>SKILLS</a>
        <a href="#contacto" onClick={(e) => scrollTo(e, 'contacto')}>CONTACTO</a>
      </div>
    </nav>
  );
}
