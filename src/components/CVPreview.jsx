import React from "react";
import "../styles/CVPreview.css";

function CVPreview({ cvData }) {
  const { personal, experiences, education, skills } = cvData;

  return (
    <section className="cv-preview">
      <header className="preview-header">
        <h1>{personal.fullName || "Nombre Apellido"}</h1>
        <h3>{personal.title || "Profesión"}</h3>
        <p>{personal.summary}</p>
      </header>

      <section className="contact-info">
        {personal.email && <p>Email: {personal.email}</p>}
        {personal.phone && <p>Tel: {personal.phone}</p>}
        {personal.address && <p>Dirección: {personal.address}</p>}
        {personal.website && (
          <p>
            Web:{" "}
            <a href={personal.website} target="_blank" rel="noreferrer">
              {personal.website}
            </a>
          </p>
        )}
        {personal.linkedin && (
          <p>
            LinkedIn:{" "}
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              {personal.linkedin}
            </a>
          </p>
        )}
      </section>

      <section className="preview-section">
        <h2>Experiencia Laboral</h2>
        {experiences.length === 0 && <p>No hay experiencias agregadas.</p>}
        {experiences.map((exp) => (
          <div key={exp.id} className="preview-item">
            <h3>{exp.position || "Puesto"}</h3>
            <p>
              <b>{exp.company || "Empresa"}</b> - {exp.city || "Ciudad"}
            </p>
            <p>
              {exp.from || "Desde"} - {exp.to || "Hasta"}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="preview-section">
        <h2>Educación</h2>
        {education.length === 0 && <p>No hay educación agregada.</p>}
        {education.map((edu) => (
          <div key={edu.id} className="preview-item">
            <h3>{edu.degree || "Título"}</h3>
            <p>
              <b>{edu.institution || "Institución"}</b> - {edu.city || "Ciudad"}
            </p>
            <p>
              {edu.from || "Desde"} - {edu.to || "Hasta"}
            </p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      <section className="preview-section">
        <h2>Habilidades</h2>
        {skills.length === 0 && <p>No hay habilidades agregadas.</p>}
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill.id}>
              {skill.name} - <i>{skill.level}</i>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default CVPreview;
