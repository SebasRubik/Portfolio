import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';



export default function AboutMe() {
    return (
        <div className="pantalla-principal-A">
            <div className="contenido-principal-A">
                <div className="nombre-titulo-A">Sebatián Córdoba</div>
                <div className="subtitulo-A">Científico de datos</div>
                <div className="gradiente-fondo-A">   {[...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        className="estrella-A"
                        style={{
                            top: `${(Math.random() - 0.1) * 100}%`,
                            left: `${(Math.random() - 0.1) * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${Math.random() * 3 + 4}s`,
                        }}
                    />
                ))}
                </div>
                <div className="imagen-perfil-A">
                    <div className="imagen-fondo-A" />
                    <img
                        className="imagen-A"
                        src='assets/Foto linkedin 1.png'
                        alt="Perfil"
                    />
                </div>
                <div className="descripcion-A">
                    Estudiante de Ciencia de Datos con experiencia en programación (Python, R, Java, C++), análisis y visualización de datos, aprendizaje automático, y bases de datos (SQL).
                    <br />
                    <br />
                    Habilidades en inteligencia de negocios (Power BI, Looker) y desarrollo de soluciones. Interesado en la inteligencia artificial y mejora de procesos organizacionales.
                </div>
            </div>

            <nav className="menu-proyectos">
                {['Principal', 'Proyectos', 'Habilidades', 'Contáctame'].map((item, index) => (
                    <Link key={index} to={['/', "/proyectos", "/habilidades", "/contactame"][index]} className="menu-item">
                        {item}
                    </Link>
                ))}
            </nav>
        </div>
    )

}