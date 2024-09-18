import React from 'react';
import { Link } from 'react-router-dom';
import './Principal.css';

export default function Principal() {
  return (
    <div className="pantalla-principal">
      <div className="contenido-principal">
        <div className="nombre-titulo">
          Sebatián Córdoba 1
        </div>
        <div className="subtitulo">
          Científico de datos
        </div>
        <div className="gradiente-fondo">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="estrella"
              style={{
                top: `${(Math.random()-0.1) * 100}%`,
                left: `${(Math.random()-0.1) * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
              }}
            />
          ))}
        </div>

        <div className="imagen-perfil">
          <img
            className="imagen"
            src="dist/assets/Foto Linkedin 1.png"
            alt="Foto de perfil"
          />
        </div>
        <a href="https://linkedin.com/in/juan-sebastian-cordoba-valderrama-a6a4062ab" target="_blank" rel="noopener noreferrer">
          <img
            className="icono"
            src="dist/assets/LinkedIn.svg"
            alt="LinkedIn Icon"
            style={{ left: 684 }}
          />
        </a>

        <a href="https://x.com/seeb444s" target="_blank" rel="noopener noreferrer">
          <img
            className="icono"
            src="dist/assets/TwitterX.svg"
            alt="Twitter Icon"
            style={{ left: 839 }}
          />
        </a>

        <a href="https://www.instagram.com/seeb444s/" target="_blank" rel="noopener noreferrer">
          <img
            className="icono"
            src="dist/assets/Instagram.svg"
            alt="Instagram Icon"
            style={{ left: 995 }}
          />
        </a>

        <a href="https://github.com/SebasRubik" target="_blank" rel="noopener noreferrer">
          <img
            className="git"
            src="dist/assets/Github.svg"
            alt="Github Icon"
            style={{ left: 1151 }}
          />
        </a>

        <div className="descripcion">
          Estudiante de ciencia de datos<br /><br />
          Entusiasta de la tecnología<br /><br />
          Fanático de la programación
        </div>
      </div>

      <div className="menu">
        {['Acerca de mí', 'Proyectos', 'Habilidades', 'Contáctame'].map((item, index) => {
          const paths = ["/about-me", "/proyectos", "/habilidades", "/contactame"];
          return (
            <div key={index} className="menu-item">
              <Link to={paths[index]} className="menu-texto">
                {item}
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}
