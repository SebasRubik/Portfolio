import React, { useState } from 'react';
import './Habilidades.css';

export default function Habilidades() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      title: "Stack Principal & Uso Diario",
      skills: [
        { name: 'Python', desc: 'Mi lenguaje principal para backend, scripts y análisis robusto de datos.' },
        { name: 'SQL', desc: 'Indispensable para modelado, consultas complejas y extracción de bases de datos relacionales.' },
        { name: 'R', desc: 'Uso R para exploración estadística pura y modelado matemático preciso.' },
        { name: 'React', desc: 'Construyo todas mis interfaces de usuario interactivas con React (como este portafolio).' },
        { name: 'C++', desc: 'Para algoritmos de alto rendimiento y lógica que requiere control absoluto de memoria.' },
        { name: 'Java', desc: 'Desarrollo en entornos empresariales fuertemente tipados y microservicios.' },
        { name: 'Kotlin', desc: 'La alternativa moderna para desarrollos en el ecosistema de la JVM y Android.' }
      ]
    },
    {
      title: "Data Science & Machine Learning",
      skills: [
        { name: 'Pandas & NumPy', desc: 'Mi pan de cada día para manipulación de tablas masivas y cálculo matricial en Python.' },
        { name: 'Scikit-Learn', desc: 'El motor principal para aplicar modelos clásicos de Machine Learning y pre-procesamiento.' },
        { name: 'TensorFlow', desc: 'Librería para arquitecturas de Deep Learning y redes neuronales.' },
        { name: 'Matplotlib', desc: 'Creación de visualizaciones estáticas para reportes y análisis exploratorio riguroso.' },
        { name: 'NLP', desc: 'Técnicas de procesamiento de lenguaje natural aplicado a gran escala.' },
        { name: 'Power BI', desc: 'Construcción de Dashboards gerenciales interactivos para la toma de decisiones.' }
      ]
    },
    {
      title: "Infraestructura & Exploración",
      skills: [
        { name: 'HPE PCAI', desc: 'Explorando Private Cloud AI de HPE para manejo corporativo y escalado local de IA.' },
        { name: 'Despliegue de Modelos On-Prem', desc: 'Asegurando que los modelos corran in-house para máxima confidencialidad de datos corporativos.' },
        { name: 'Apache Spark', desc: 'Procesamiento distribuido de Big Data cuando los recursos en máquina única no alcanzan.' },
        { name: 'Firebase', desc: 'Bases de datos no relacionales en tiempo real y autenticación rápida de apps.' }
      ]
    }
  ];

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      setSelectedSkill(null);
    }
  };

  return (
    <div className="habilidades-section">
      <div className="section-header">
        <span className="mono-label">// TECH STACK & ARSENAL</span>
        <h2 className="section-title">Habilidades y Tecnologías</h2>
      </div>

      <div className="skills-categories-wrapper">
        {skillCategories.map((category, idx) => (
          <div className="skill-category" key={idx}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-container inner-skills">
              {category.skills.map((skill, index) => (
                <div 
                  className="skill-pill interactive-pill" 
                  key={index}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="skill-dot"></div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedSkill && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="skill-modal">
            <button className="close-btn" onClick={() => setSelectedSkill(null)}>×</button>
            <div className="skill-modal-content">
              <div className="skill-dot modal-dot"></div>
              <h3>{selectedSkill.name}</h3>
              <p>{selectedSkill.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
