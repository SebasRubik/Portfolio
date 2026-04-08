import React from 'react';
import './Principal.css';

export default function Principal() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-left">
        <span className="mono-label">// DATA SCIENTIST & DEVELOPER</span>
        <h1 className="hero-title">Sebastian Córdoba<span className="text-red">.</span></h1>
        <h3 className="hero-subtitle">Científico de datos — Javeriana</h3>
        <p className="hero-desc">
          Construyo experiencias digitales escalables, modelos de machine learning que aportan valor y código con la disciplina necesaria para dominar cualquier stack. Resolviendo problemas complejos un bloque a la vez.
        </p>
        <div className="hero-ctas">
          <a href="#proyectos" className="btn btn-primary" onClick={(e) => scrollTo(e, 'proyectos')}>Ver proyectos</a>
          <a href="#contacto" className="btn btn-outline" onClick={(e) => scrollTo(e, 'contacto')}>Contáctame</a>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-frame">
          <div className="hero-avatar">
            <img src={`${import.meta.env.BASE_URL}assets/perfil.png`} alt="Sebastián Córdoba" className="hero-img" onError={(e) => {e.target.src = 'https://via.placeholder.com/140'; console.error('Imagen no encontrada')}} />
          </div>
          <p className="hero-username">@SebasRubik</p>
          <div className="hero-strip"></div>
        </div>
      </div>
    </div>
  );
}