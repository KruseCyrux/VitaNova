import React from "react";
import "../../styles/templates/Minimalista.css";

function Minimalista({ cvData, styleConfig }) {
  const personal = cvData.personalInfo?.[0] || {};

  const renderText = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    if (typeof data === "object")
      return Object.values(data).filter(Boolean).join(" • ");
    return "";
  };

  return (
    <div
      className="minimalista-template"
      style={{
        fontFamily: styleConfig.font || "Inter, sans-serif",
        color: "#333",
        backgroundColor: "#fff",
      }}
    >
      {/* Sidebar */}
      <aside
        className="minimalista-sidebar"
        style={{
          backgroundColor: styleConfig.color || "#1a1a1a",
          color: "#fff",
        }}
      >
        {cvData.photo && (
          <img
            src={cvData.photo}
            alt="Foto de perfil"
            className="minimalista-photo"
          />
        )}

        <h2>{personal.fullName || "Tu Nombre"}</h2>
        <p>{personal.profession || "Profesión"}</p>
        <hr />
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
        <p>{personal.city}</p>
      </aside>

      {/* Contenido principal */}
      <main className="minimalista-content">

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

        {/* Certificaciones */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
            Certificaciones
          </h2>
          {cvData.certifications?.length > 0 ? (
            cvData.certifications.map((cert, i) => (
              <div key={i}>
                <p>
                  {cert.name} – {cert.year}
                </p>
              </div>
            ))
          ) : (
            <p>Sin certificaciones agregadas</p>
          )}
        </section>

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

        {/* Información Médica */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
            Información Médica
          </h2>

          <div>
            <p><strong>Tipo de sangre:</strong> {cvData.medical?.bloodType || "—"}</p>
            <p><strong>Alergias:</strong> {cvData.medical?.allergies || "Ninguna"}</p>
            <p><strong>Enfermedades crónicas:</strong> {cvData.medical?.chronicDiseases || "Ninguna"}</p>
            <p><strong>Medicamentos:</strong> {cvData.medical?.medications || "Ninguno"}</p>
            <p><strong>Estado de salud:</strong> {cvData.medical?.healthStatus || "No especificado"}</p>
            <p>
              <strong>Contacto de emergencia:</strong>{" "}
              {renderText(cvData.medical?.emergencyContact) || "No registrado"}
            </p>
          </div>
        </section>

        {/* Alergias detalladas */}
        <section>
          <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
            Alergias Detalladas
          </h2>
          {cvData.alergias?.length > 0 ? (
            cvData.alergias.map((a, i) => (
              <div key={i} className="item">
                <p><strong>Alergia:</strong> {a.nombreAlergia}</p>
                <p><strong>Tipo:</strong> {a.tipo}</p>
                <p><strong>Gravedad:</strong> {a.gravedad}</p>
                <p><strong>Descripción:</strong> {a.descripcion}</p>
              </div>
            ))
          ) : (
            <p>No se han agregado alergias</p>
          )}
        </section>

        {/* Información Adicional */}
        <section>
          <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
            Información Adicional
          </h2>
          {cvData.additionalInfo?.length > 0 ? (
            cvData.additionalInfo.map((info, i) => (
              <p key={i}>{info.detail}</p>
            ))
          ) : (
            <p>Sin información adicional</p>
          )}
        </section>

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

      </main>
    </div>
  );
}

export default Minimalista;
