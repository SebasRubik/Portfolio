import React from 'react';
import './Contactame.css';

export default function Contactame() {
  return (
    <footer className="contactame-section">
      <div className="contact-left">
        <h2 className="contact-title">Hablemos.</h2>
        <a href="mailto:sebastian.cordoba@acropolisia.com" className="contact-email">
          sebastian.cordoba@acropolisia.com
        </a>
      </div>
      
      <div className="contact-right">
        <a href="https://www.linkedin.com/in/sebastian-cordoba" target="_blank" rel="noreferrer" className="social-btn">Li</a>
        <a href="https://github.com/SebasRubik" target="_blank" rel="noreferrer" className="social-btn">Gh</a>
        <a href="https://www.instagram.com/seeb444s/" target="_blank" rel="noreferrer" className="social-btn">Ig</a>
      </div>
    </footer>
  );
}