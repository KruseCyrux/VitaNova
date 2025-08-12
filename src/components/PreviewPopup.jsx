import React from "react";
import { useCV } from "../contexts/CVContext";
import "../styles/preview.css";

function PreviewPopup({ onClose }) {
  const { cvData } = useCV();

  return (
    <div className="preview-overlay">
      <div className="preview-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Vista Previa</h2>

        {/* Información Personal */}
        <section>
          <h3>{cvData.personalInfo.name || "Nombre completo"}</h3>
          <p>{cvData.personalInfo.email || "Correo electrónico"}</p>
          <p>{cvData.personalInfo.phone || "Teléfono"}</p>
          <p>{cvData.personalInfo.address || "Dirección"}</p>
        </section>

        {/* Perfil */}
        {cvData.profile && (
          <section>
            <h3>Perfil Profesional</h3>
            <p>{cvData.profile}</p>
          </section>
        )}

        {/* Experiencia */}
        {cvData.experience.length > 0 && (
          <section>
            <h3>Experiencia</h3>
            <ul>
              {cvData.experience.map((exp, i) => (
                <li key={i}>
                  <strong>{exp.role}</strong> en {exp.company} ({exp.start} - {exp.end})
                  <p>{exp.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Educación */}
        {cvData.education.length > 0 && (
          <section>
            <h3>Educación</h3>
            <ul>
              {cvData.education.map((edu, i) => (
                <li key={i}>
                  <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Habilidades */}
        {cvData.skills.length > 0 && (
          <section>
            <h3>Habilidades</h3>
            <ul>
              {cvData.skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </section>
        )}

        {/* Certificaciones */}
        {cvData.certifications.length > 0 && (
          <section>
            <h3>Certificaciones</h3>
            <ul>
              {cvData.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
            </ul>
          </section>
        )}

        {/* Idiomas */}
        {cvData.languages.length > 0 && (
          <section>
            <h3>Idiomas</h3>
            <ul>
              {cvData.languages.map((lang, i) => <li key={i}>{lang}</li>)}
            </ul>
          </section>
        )}

        {/* Proyectos */}
        {cvData.projects.length > 0 && (
          <section>
            <h3>Proyectos</h3>
            <ul>
              {cvData.projects.map((proj, i) => (
                <li key={i}>
                  <strong>{proj.name}</strong> - {proj.description}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Información Adicional */}
        {cvData.additionalInfo && (
          <section>
            <h3>Información Adicional</h3>
            <p>{cvData.additionalInfo}</p>
          </section>
        )}
      </div>
    </div>
  );
}

export default PreviewPopup;