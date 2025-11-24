import React from "react";
import "../../styles/templates/Moderna.css";

function Moderna({ cvData, styleConfig }) {
  const personal = cvData.personalInfo?.[0] || {};

  // 🧠 Función auxiliar para evitar errores al mostrar objetos
  const renderText = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object")
      return Object.values(data).filter(Boolean).join(" • ");
    return "";
  };

  return (
    <div
      className="moderna-template"
      style={{
        fontFamily: styleConfig.font || "Poppins, sans-serif",
        color: "#333",
        backgroundColor: "#fff",
      }}
    >
      {/* 🔹 Encabezado principal */}
      <header
        className="moderna-header"
        style={{
          backgroundColor: styleConfig.color || "#005f73",
          color: "#fff",
        }}
      >
        <div className="header-left">
          {cvData.photo && (
            <img src={cvData.photo} alt="Foto" className="moderna-photo" />
          )}
        </div>
        <div className="header-right">
          <h1>{personal.fullName || "Tu Nombre"}</h1>
          <h2>{personal.profession || "Profesión"}</h2>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.city}</p>
        </div>
      </header>

      {/* 🔹 Cuerpo principal */}
      <main className="moderna-content">
        {/* Perfil Profesional */}
        {cvData.profile && (
          <section>
            <h3>Perfil Profesional</h3>
            <p>{renderText(cvData.profile)}</p>
          </section>
        )}

        {/* Experiencia */}
        {cvData.experience?.length > 0 && (
          <section>
            <h3>Experiencia</h3>
            {cvData.experience.map((exp, i) => (
              <div key={i} className="item">
                <strong>{exp.title}</strong> — {exp.company} ({exp.start} - {exp.end})
                <p>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Educación */}
        {cvData.education?.length > 0 && (
          <section>
            <h3>Educación</h3>
            {cvData.education.map((edu, i) => (
              <div key={i} className="item">
                <strong>{edu.degree}</strong> — {edu.institution} ({edu.year})
              </div>
            ))}
          </section>
        )}

        {/* Habilidades */}
        {cvData.skills?.length > 0 && (
          <section>
            <h3>Habilidades</h3>
            <ul className="skills-list">
              {cvData.skills.map((skill, i) => (
                <li key={i}>{renderText(skill.name || skill)}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Certificaciones */}
        {cvData.certifications?.length > 0 && (
          <section>
            <h3>Certificaciones</h3>
            {cvData.certifications.map((cert, i) => (
              <div key={i} className="item">
                <strong>{cert.name}</strong> — {cert.institution} ({cert.year})
              </div>
            ))}
          </section>
        )}

        {/* Idiomas */}
        {cvData.languages?.length > 0 && (
          <section>
            <h3>Idiomas</h3>
            <ul>
              {cvData.languages.map((lang, i) => (
                <li key={i}>
                  {lang.language} — {lang.level}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Proyectos */}
        {cvData.projects?.length > 0 && (
          <section>
            <h3>Proyectos</h3>
            {cvData.projects.map((proj, i) => (
              <div key={i} className="item">
                <strong>{proj.name}</strong> — {proj.description}
              </div>
            ))}
          </section>
        )}

        {/* Referencias */}
        {cvData.references?.length > 0 && (
          <section>
            <h3>Referencias</h3>
            {cvData.references.map((ref, i) => (
              <div key={i} className="item">
                <strong>{ref.name}</strong> — {ref.contact}
              </div>
            ))}
          </section>
        )}

        {/* Información Adicional */}
        {cvData.additional && (
          <section>
            <h3>Información Adicional</h3>
            <p>{renderText(cvData.additional)}</p>
          </section>
        )}

        {/* Salud (Alergias o Enfermedades) */}
        {cvData.health && (
          <section>
            <h3>Alergias o Enfermedades</h3>
            <p>{renderText(cvData.health)}</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default Moderna;
