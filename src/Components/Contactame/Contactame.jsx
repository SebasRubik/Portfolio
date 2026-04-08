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
        <button className="social-btn">Li</button>
        <button className="social-btn">Gh</button>
        <button className="social-btn">Ig</button>
      </div>
    </footer>
  );
}