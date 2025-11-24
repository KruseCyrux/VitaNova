import React from "react";
import "../../styles/templates/Clasica.css";

function Clasica({ cvData, styleConfig }) {
  const personal = cvData.personalInfo?.[0] || {};

  // 🔧 Función para convertir objetos simples en texto legible
  const formatValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return ""; // Evitamos mostrar JSON crudo
    }
    return value || "";
  };

  return (
    <div
      className="clasica-template"
      style={{
        fontFamily: styleConfig.font || "Georgia, serif",
        backgroundColor: "#fff",
        color: "#333",
        padding: "2rem",
        lineHeight: "1.6",
      }}
    >
      {/* 🔹 Encabezado con foto y datos personales */}
      <header
        className="clasica-header"
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: `4px solid ${styleConfig.color}`,
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        {cvData.photo && (
          <img
            src={cvData.photo}
            alt="Foto de perfil"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "1.5rem",
              border: `3px solid ${styleConfig.color}`,
            }}
          />
        )}
        <div>
          <h1
            style={{
              color: styleConfig.color,
              marginBottom: "0.5rem",
            }}
          >
            {personal.fullName || "Tu Nombre Completo"}
          </h1>
          <h3>{personal.profession || "Profesión / Puesto"}</h3>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.city}</p>
        </div>
      </header>

      {/* 🔹 Perfil Personal */}
      {cvData.profilePersonal && cvData.profilePersonal.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Perfil Personal</h2>
          {cvData.profilePersonal.map((perfil, i) => (
            <div key={i}>
              {perfil.summary && <p>{perfil.summary}</p>}
              {perfil.goals && <p><strong>Metas:</strong> {perfil.goals}</p>}
              {perfil.values && <p><strong>Valores:</strong> {perfil.values}</p>}
              {perfil.interests && <p><strong>Intereses:</strong> {perfil.interests}</p>}
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Perfil Profesional */}
      {cvData.profile && cvData.profile.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Perfil Profesional</h2>
          {cvData.profile.map((prof, i) => (
            <div key={i}>
              {prof.summary && <p>{prof.summary}</p>}
              {prof.goals && <p><strong>Metas:</strong> {prof.goals}</p>}
              {prof.experienceYears && (
                <p><strong>Años de experiencia:</strong> {prof.experienceYears}</p>
              )}
              {prof.industry && <p><strong>Industria:</strong> {prof.industry}</p>}
              {prof.values && <p><strong>Valores:</strong> {prof.values}</p>}
              {prof.availability && (
                <p><strong>Disponibilidad:</strong> {prof.availability}</p>
              )}
              {prof.interests && <p><strong>Intereses:</strong> {prof.interests}</p>}
              {prof.keywords && <p><strong>Palabras clave:</strong> {prof.keywords}</p>}
              {prof.relocation && <p><strong>Reubicación:</strong> {prof.relocation}</p>}
              {prof.salary && <p><strong>Salario deseado:</strong> {prof.salary}</p>}
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Experiencia */}
      {cvData.experience?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Experiencia Laboral</h2>
          {cvData.experience.map((exp, i) => (
            <div key={i} className="item">
              <strong>{formatValue(exp.title)}</strong> —{" "}
              {formatValue(exp.company)} ({formatValue(exp.start)} -{" "}
              {formatValue(exp.end)})
              <p>{formatValue(exp.description)}</p>
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Educación */}
      {cvData.education?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Educación</h2>
          {cvData.education.map((edu, i) => (
            <div key={i} className="item">
              <strong>{formatValue(edu.degree)}</strong> —{" "}
              {formatValue(edu.institution)} ({formatValue(edu.year)})
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Habilidades */}
      {cvData.skills?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Habilidades</h2>
          <ul>
            {cvData.skills.map((skill, i) => (
              <li key={i}>{formatValue(skill.name)}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 🔹 Certificaciones */}
      {cvData.certifications?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Certificaciones</h2>
          {cvData.certifications.map((cert, i) => (
            <div key={i} className="item">
              <strong>{formatValue(cert.name)}</strong> —{" "}
              {formatValue(cert.institution)} ({formatValue(cert.year)})
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Idiomas */}
      {cvData.languages?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Idiomas</h2>
          <ul>
            {cvData.languages.map((lang, i) => (
              <li key={i}>
                {formatValue(lang.language)} — {formatValue(lang.level)}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 🔹 Proyectos */}
      {cvData.projects?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Proyectos</h2>
          {cvData.projects.map((proj, i) => (
            <div key={i} className="item">
              <strong>{formatValue(proj.name)}</strong> —{" "}
              {formatValue(proj.description)}
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Referencias */}
      {cvData.references?.length > 0 && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Referencias</h2>
          {cvData.references.map((ref, i) => (
            <div key={i} className="item">
              <strong>{formatValue(ref.name)}</strong> —{" "}
              {formatValue(ref.contact)}
            </div>
          ))}
        </section>
      )}

      {/* 🔹 Información Adicional */}
      {cvData.additional && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Información Adicional</h2>
          <p>{formatValue(cvData.additional)}</p>
        </section>
      )}

      {/* 🔹 Alergias o Enfermedades */}
      {cvData.health && (
        <section>
          <h2 style={{ color: styleConfig.color }}>Alergias o Enfermedades</h2>
          <p>{formatValue(cvData.health)}</p>
        </section>
      )}
    </div>
  );
}

export default Clasica;
