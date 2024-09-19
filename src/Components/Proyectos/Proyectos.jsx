import React from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css'; // Asegúrate de importar el archivo CSS

export default function Proyectos() {
  const projects = [
    { title: "Portfolio", image: "assets/portfolioImagen.svg" },
    { title: "Proyecto 2", image: "assets/proyecto2.svg" },
    { title: "Proyecto 3", image: "assets/proyecto3.svg" }
  ];

  return (
    <div className="pantalla-proyectos-p">
      <h1 className="titulo-principal-p">Proyectos</h1>
      <div className="contenido-proyectos-p">
        {projects.map((project, index) => (
          <div key={index} className="proyecto-card-p">
            <img src={project.image} alt={project.title} className="proyecto-imagen-p" />
            <div className="proyecto-overlay-p">
              <h3 className="proyecto-titulo-p">{project.title}</h3>
              <button className="proyecto-boton-p">Ver más</button>
            </div>
          </div>
        ))}
      </div>
      <nav className="menu-proyectos-p">
        {['Principal', 'Acerca de mí', 'Habilidades', 'Contáctame'].map((item, index) => (
          <Link key={index} to={['/', "/about-me", "/habilidades", "/contactame"][index]} className="menu-item-p">
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
}