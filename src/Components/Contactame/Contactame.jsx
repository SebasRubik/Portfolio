import React from 'react';
import { Link } from 'react-router-dom';
import './Contactame.css';

export default function Contactame() {
    return (
        <div className="pantalla-contactame-C">
            <div className="contenido-contactame-C">
                <div className="titulo-contactame-C">Sebatián Cordoba</div>
                <div className="subtitulo-contactame-C">Científico de datos</div>
                <div className="gradiente-fondo-contactame-C">
                    {[...Array(80)].map((_, i) => (
                        <div
                            key={i}
                            className="estrella"
                            style={{
                                top: `${(Math.random() - 0.1) * 100}%`,
                                left: `${(Math.random() - 0.1) * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${Math.random() * 3 + 4}s`,
                            }}
                        />
                    ))}
                </div>
                <div className="imagen-perfil-contactame-C">
                    <div className="imagen-fondo-contactame-C"></div>
                    <img
                        className="imagen-contactame-C"
                        src='assets/Foto linkedin 1.png'
                        alt="Perfil"
                    />
                </div>
                <img
                    className="icono-contactame-C"
                    src='assets/LinkedIn.svg'
                    style={{ left: 693, top: 266 }}
                    alt="Icon 1"
                />
                <img
                    className="icono-contactame-C"
                    src='assets/Gmail Logo.svg'
                    style={{ left: 693, top: 414 }}
                    alt="Icon 2"
                />
                <div className="contacto-info-C">
                    <span className="correo-contactame-C">juans-cordoba@javeriana.edu.co</span>
                </div>
                <div className="linkedin-contactame-C">
                    <a className='texto-linkedIn-C' href='https://linkedin.com/in/juan-sebastian-cordoba-valderrama-a6a4062ab'> LinkedIn</a>
                </div>
            </div>

            <nav className="menu-proyectos">
                {['Principal', 'Acerca de mí', 'Habilidades', 'Contáctame'].map((item, index) => (
                    <Link key={index} to={['/', "/about-me", "/habilidades", "/contactame"][index]} className="menu-item">
                        {item}
                    </Link>
                ))}
            </nav>
        </div>
    )
}