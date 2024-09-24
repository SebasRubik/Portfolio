import React from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css'; // Asegúrate de importar el archivo CSS

export default function Proyectos() {
    const projects = [
        { title: "Portfolio", image: "assets/portfolioImagen.svg", repo: 'https://github.com/SebasRubik/Portfolio' },
        { title: "Fundamentos Multivariado", image: "assets/RpubsFundamentosMulti.png", repo: 'http://rpubs.com/Seeb444s/FundamentosAnalisisMultivariado' },
        { title: "Explive", image: "assets/logoExplive.png", repo: 'https://github.com/SebasRubik/Explive' },
        {title: 'Habit Tracker', image: "assets/HabitTrackerLogo.png", repo: 'https://github.com/SebasRubik/Habit-Tracker'},
        {title: 'Procesamiento Comentarios de Youtube', image: 'assets/youtubelogo.png', repo: 'https://github.com/SebasRubik/YuotubeComments-Processing' }
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
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <button className="proyecto-boton-p">Ver más</button>
                            </a>
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