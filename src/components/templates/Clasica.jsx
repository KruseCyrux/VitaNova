// src/components/templates/Clasica.jsx
import React from "react";
import "../../styles/templates.css";

const Clasica = ({ cvData, styleConfig }) => {
  return (
    <div className="template clasica" style={{ fontFamily: "Times New Roman" }}>
      <header className="classic-header" style={{ borderLeft: `5px solid ${styleConfig.color}` }}>
        <h1>{cvData.personalInfo[0]?.fullName}</h1>
        <p>{cvData.personalInfo[0]?.email} | {cvData.personalInfo[0]?.phone}</p>
      </header>

      <section>
        <h2 style={{ color: styleConfig.color }}>Perfil Profesional</h2>
        <p>{cvData.profile[0]?.description}</p>
      </section>

      <section>
        <h2 style={{ color: styleConfig.color }}>Experiencia</h2>
        {cvData.experience.map((exp, i) => (
          <div key={i}>
            <strong>{exp.role}</strong> – {exp.company}
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ color: styleConfig.color }}>Educación</h2>
        {cvData.education.map((edu, i) => (
          <div key={i}>
            <strong>{edu.degree}</strong> – {edu.institution}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Clasica;

