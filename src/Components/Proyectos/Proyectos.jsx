import React from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css';

export default function Principal() {
    return (
        <div className="pantalla-proyectos-P">
            <div className="contenido-proyectos-P">
            <div className="proyecto-card-P">
                <div className="proyecto-fondo-P"></div>
                    <img src = 'assets/portfolioImagen.svg'alt="Portfolio" />
                    <div className="proyecto-titulo-P">Portfolio</div>
                </div>
                <div className="proyecto-card-P">
                    <div className="proyecto-fondo-P"></div>
                    <div className="proyecto-titulo-P">Proyecto 2</div>
                </div>
            </div>

            <div className="menu">
                {['Principal','Acerca de mí', 'Habilidades', 'Contáctame'].map((item, index) => {
                    const paths = ['/',"/about-me",, "/habilidades", "/contactame"];
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
    )
}