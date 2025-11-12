import React from "react";

function Minimalista({ cvData, styleConfig }) {
  const personalInfo = cvData.personalInfo?.[0] || {};
  const profile = cvData.profile?.[0] || {};

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        color: styleConfig.color || "#333",
        fontFamily: styleConfig.font || "Inter, sans-serif",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      {/* 🔹 Encabezado */}
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        {cvData.photo && (
          <img
            src={cvData.photo}
            alt="Foto de perfil"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
            }}
          />
        )}
        <h1 style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>
          {personalInfo.fullName || "Tu Nombre Completo"}
        </h1>
        <p>{personalInfo.email || "correo@ejemplo.com"}</p>
        <p>{personalInfo.phone || "Teléfono"}</p>
        <p>{personalInfo.address || "Dirección"}</p>
      </header>

      {/* 🔹 Perfil Profesional */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Perfil Profesional
        </h2>
        <p>{profile.summary || "Resumen profesional"}</p>
        <p>{profile.goals || "Objetivos profesionales"}</p>
      </section>

      {/* 🔹 Experiencia */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Experiencia
        </h2>
        {cvData.experience?.length > 0 ? (
          cvData.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <h3 style={{ color: styleConfig.color }}>{exp.role}</h3>
              <p>
                {exp.company} | {exp.startDate} – {exp.endDate || "Actual"}
              </p>
              <p>{exp.responsibilities}</p>
            </div>
          ))
        ) : (
          <p>Sin experiencia agregada</p>
        )}
      </section>

      {/* 🔹 Educación */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Educación
        </h2>
        {cvData.education?.length > 0 ? (
          cvData.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <h3 style={{ color: styleConfig.color }}>{edu.titulo}</h3>
              <p>
                {edu.institucion} | {edu.fechaInicio} – {edu.fechaFin}
              </p>
            </div>
          ))
        ) : (
          <p>Sin educación agregada</p>
        )}
      </section>

      {/* 🔹 Habilidades */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Habilidades
        </h2>
        {cvData.skills?.length > 0 ? (
          <ul>
            {cvData.skills.map((skill, i) => (
              <li key={i}>
                {skill.name} – {skill.level}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sin habilidades agregadas</p>
        )}
      </section>

      {/* 🔹 Certificaciones */}
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

      {/* 🔹 Idiomas */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Idiomas
        </h2>
        {cvData.languages?.length > 0 ? (
          cvData.languages.map((lang, i) => (
            <p key={i}>
              {lang.name} – {lang.level}
            </p>
          ))
        ) : (
          <p>Sin idiomas agregados</p>
        )}
      </section>

      {/* 🔹 Proyectos */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Proyectos
        </h2>
        {cvData.projects?.length > 0 ? (
          cvData.projects.map((proj, i) => (
            <div key={i}>
              <h3 style={{ color: styleConfig.color }}>{proj.name}</h3>
              <p>{proj.description}</p>
            </div>
          ))
        ) : (
          <p>Sin proyectos agregados</p>
        )}
      </section>

      {/* 🔹 Referencias */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Referencias
        </h2>
        {cvData.references?.length > 0 ? (
          cvData.references.map((ref, i) => (
            <div key={i}>
              <p>
                {ref.name} – {ref.contact}
              </p>
            </div>
          ))
        ) : (
          <p>Sin referencias agregadas</p>
        )}
      </section>

      {/* 🩺 Sección Médica */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ borderBottom: `2px solid ${styleConfig.color}` }}>
          Información Médica
        </h2>
        {cvData.medical?.length > 0 ? (
          cvData.medical.map((med, i) => (
            <div key={i} style={{ marginBottom: "0.8rem" }}>
              <p>
                <strong>Tipo de sangre:</strong> {med.bloodType || "—"}
              </p>
              <p>
                <strong>Alergias:</strong> {med.allergies || "Ninguna"}
              </p>
              <p>
                <strong>Condiciones médicas:</strong>{" "}
                {med.conditions || "Ninguna"}
              </p>
              <p>
                <strong>Medicamentos:</strong> {med.medications || "Ninguno"}
              </p>
              <p>
                <strong>Contacto de emergencia:</strong>{" "}
                {med.emergencyContact || "No registrado"}
              </p>
            </div>
          ))
        ) : (
          <p>Sin información médica agregada</p>
        )}
      </section>

      {/* 🔹 Información Adicional */}
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
    </div>
  );
}

export default Minimalista;
