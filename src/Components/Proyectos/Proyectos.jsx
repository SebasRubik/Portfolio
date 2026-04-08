import React from 'react';
import './Proyectos.css';

export default function Proyectos() {
  const projects = [
    {
      id: 1,
      init: 'EX',
      name: 'Explive',
      desc: 'Plataforma web dinámica construida para visualización y gestión en tiempo real.',
      tags: ['React', 'Node.js']
    },
    {
      id: 2,
      init: 'HT',
      name: 'Habit Tracker',
      desc: 'Aplicación interactiva para seguimiento de hábitos y rutinas personales.',
      tags: ['React', 'CSS']
    },
    {
      id: 3,
      init: 'YT',
      name: 'YouTube Comments Processing',
      desc: 'Pipeline de NLP para análisis y procesamiento masivo de comentarios en YouTube.',
      tags: ['Python', 'NLP']
    }
  ];

  return (
    <div className="proyectos-section">
      <div className="section-header">
        <span className="mono-label">// PROYECTOS DESTACADOS</span>
        <h2 className="section-title">Lo que he construido</h2>
      </div>

      <div className="proyectos-grid">
        {projects.map((proj) => (
          <div className="proyecto-card" key={proj.id}>
            <div className="proyecto-icon">
              {proj.init}
            </div>
            <h3 className="proyecto-name">{proj.name}</h3>
            <p className="proyecto-desc">{proj.desc}</p>
            <div className="proyecto-tags">
              {proj.tags.map((tag, i) => (
                <span className="tag-pill" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}