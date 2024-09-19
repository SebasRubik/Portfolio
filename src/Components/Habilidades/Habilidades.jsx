import React from 'react';
import { Link } from 'react-router-dom';
import './Habilidades.css';

export default function Habilidades() {
	return (
		<div className="pantalla-principal-h">
			<div className="contenido-principal-h">
				<div className="nombre-titulo-h">Sebatián Córdoba</div>
				<div className="subtitulo-h">Científico de datos</div>
				<div className="gradiente-fondo-h">
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

				<div className="imagen-perfil-h">
					<div className="imagen-fondo-h"></div>
					<img className="imagen-h" src='assets/Foto linkedin 1.png' alt="Perfil" />
				</div>

				<div className="barra-h habilidad-logica-h">
					<div className="barra-fondo-h"></div>
				</div>
				<div className="texto-h texto-logica-h">Lógica de programación</div>
				<div className="porcentaje-h porcentaje-logica-h">90%</div>

				<div className="barra-h habilidad-estadistica-h">
					<div className="barra-fondo-h"></div>
				</div>
				<div className="texto-h texto-estadistica-h">Estadística aplicada</div>
				<div className="porcentaje-h porcentaje-estadistica-h">90%</div>

				<div className="barra-h habilidad-python-h">
					<div className="barra-fondo-h2"></div>
				</div>
				<div className="texto-h texto-python-h">Python</div>
				<div className="porcentaje-h porcentaje-python-h">80%</div>

				<div className="barra-h habilidad-r-h">
					<div className="barra-fondo-h2"></div>
				</div>
				<div className="texto-h texto-r-h">R</div>
				<div className="porcentaje-h porcentaje-r-h">80%</div>
			</div>

			<nav className="menu-proyectos">
				{['Principal', 'Acerca de mí', 'Habilidades', 'Contáctame'].map((item, index) => (
					<Link key={index} to={['/', "/about-me", "/habilidades", "/contactame"][index]} className="menu-item">
						{item}
					</Link>
				))}
			</nav>
		</div>
	);
}
