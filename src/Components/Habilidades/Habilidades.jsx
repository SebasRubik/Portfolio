import React from 'react';
import './Habilidades.css';

export default function Habilidades() {
  const skills = [
    { name: 'Python', percent: 85 },
    { name: 'R', percent: 80 },
    { name: 'React', percent: 75 },
    { name: 'SQL', percent: 80 },
    { name: 'Power BI', percent: 70 },
    { name: 'Java', percent: 70 },
    { name: 'C++', percent: 65 },
    { name: 'ML', percent: 75 }
  ];

  return (
    <div className="habilidades-section">
      <div className="section-header">
        <span className="mono-label">// TECH STACK</span>
        <h2 className="section-title">Mis Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-pill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-progress-bg">
              <div 
                className="skill-progress-fill" 
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <span className="skill-percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
