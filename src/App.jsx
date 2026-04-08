import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Principal from './Components/Principal/Principal';
import FeidBanner from './Components/FeidBanner/FeidBanner';
import Proyectos from './Components/Proyectos/Proyectos';
import Habilidades from './Components/Habilidades/Habilidades';
import Contactame from './Components/Contactame/Contactame';
import SpiderBackground from './Components/SpiderBackground/SpiderBackground';

export default function App() {
  return (
    <>
      <SpiderBackground />
      <div className="portfolio-container">
        <Navbar />
        <main>
          <section id="inicio">
            <Principal />
          </section>
          
          <FeidBanner />
          
          <section id="proyectos">
            <Proyectos />
          </section>
          
          <section id="skills">
            <Habilidades />
          </section>
        </main>
        
        <section id="contacto">
          <Contactame />
        </section>
      </div>
    </>
  );
}
