import React from 'react';
import './FeidBanner.css';

export default function FeidBanner() {
  return (
    <div className="feid-banner-wrapper">
      <div className="feid-banner-discrete">
        <div className="feid-accent-line"></div>
        <div className="feid-content">
          <span className="feid-label">MOR <span className="neon-dot"></span></span>
          <p className="feid-quote">
            "Si el código compila, el ferxxo celebra."
          </p>
        </div>
      </div>
    </div>
  );
}
