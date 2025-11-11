import React from "react";

function Moderna({ cvData, styleConfig }) {
  const personalInfo = cvData.personalInfo?.[0] || {};
  const profile = cvData.profile?.[0] || {};

  return (
    <div
      style={{
        display: "flex",
        fontFamily: styleConfig.font || "Poppins, sans-serif",
        backgroundColor: "#f5f7fa",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      {/* 🔹 Barra lateral izquierda */}
      <aside
        style={{
          width: "30%",
          backgroundColor: styleConfig.color || "#1e90ff",
          color: "#fff",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
              marginBottom: "1.5rem",
              border: "3px solid white",
            }}
          />
        )}
        <h1 style={{ textAlign: "center", fontSize: "1.8rem" }}>
          {personalInfo.fullName || "Tu Nombre Completo"}
        </h1>
        <p style={{ textAlign: "center" }}>{personalInfo.email}</p>
        <p style={{ textAlign: "center" }}>{personalInfo.phone}</p>
        <p style={{ textAlign: "center" }}>{personalInfo.address}</p>

        {/* 🔹 Sección lateral: Habilidades, Idiomas, Certificaciones */}
        <div style={{ marginTop: "2rem", width: "100%" }}>
          <h2 style={{ borderBottom: "2px solid #fff" }}>Habilidades</h2>
          {cvData.skills?.length > 0 ? (
            <ul style={{ paddingLeft: "1rem" }}>
              {cvData.skills.map((skill, i) => (
                <li key={i}>{skill.name}</li>
              ))}
            </ul>
          ) : (
            <p>Sin habilidades</p>
          )}

          <h2 style={{ borderBottom: "2px solid #fff", marginTop: "1.5rem" }}>
            Idiomas
          </h2>
          {cvData.languages?.length > 0 ? (
            cvData.languages.map((lang, i) => (
              <p key={i}>
                {lang.name} – {lang.level}
              </p>
            ))
          ) : (
            <p>Sin idiomas</p>
          )}

          <h2 style={{ borderBottom: "2px solid #fff", marginTop: "1.5rem" }}>
            Certificaciones
          </h2>
          {cvData.certifications?.length > 0 ? (
            cvData.certifications.map((cert, i) => (
              <p key={i}>
                {cert.name} ({cert.year})
              </p>
            ))
          ) : (
            <p>Sin certificaciones</p>
          )}
        </div>
      </aside>

      {/* 🔹 Contenido principal */}
      <main style={{ flex: 1, padding: "2rem 3rem" }}>
        {/* PERFIL PROFESIONAL */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: styleConfig.color || "#1e90ff" }}>
            Perfil Profesional
          </h2>
          <p>{profile.summary || "Resumen profesional"}</p>
          <p>{profile.goals || "Objetivos profesionales"}</p>
        </section>

        {/* EXPERIENCIA */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: styleConfig.color || "#1e90ff" }}>Experiencia</h2>
          {cvData.experience?.length > 0 ? (
            cvData.experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <h3>{exp.role}</h3>
                <p style={{ fontWeight: "bold" }}>
                  {exp.company} | {exp.startDate} – {exp.endDate || "Actual"}
                </p>
                <p>{exp.responsibilities}</p>
              </div>
            ))
          ) : (
            <p>Sin experiencia agregada</p>
          )}
        </section>

        {/* EDUCACIÓN */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: styleConfig.color || "#1e90ff" }}>Educación</h2>
          {cvData.education?.length > 0 ? (
            cvData.education.map((edu, i) => (
              <div key={i}>
                <h3>{edu.titulo}</h3>
                <p>
                  {edu.institucion} | {edu.fechaInicio} – {edu.fechaFin}
                </p>
              </div>
            ))
          ) : (
            <p>Sin educación agregada</p>
          )}
        </section>

        {/* PROYECTOS */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: styleConfig.color || "#1e90ff" }}>Proyectos</h2>
          {cvData.projects?.length > 0 ? (
            cvData.projects.map((proj, i) => (
              <div key={i}>
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>
              </div>
            ))
          ) : (
            <p>Sin proyectos agregados</p>
          )}
        </section>

        {/* REFERENCIAS */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: styleConfig.color || "#1e90ff" }}>Referencias</h2>
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

        {/* INFORMACIÓN ADICIONAL */}
        <section>
          <h2 style={{ color: styleConfig.color || "#1e90ff" }}>
            Información Adicional
          </h2>
          {cvData.additionalInfo?.length > 0 ? (
            cvData.additionalInfo.map((info, i) => <p key={i}>{info.detail}</p>)
          ) : (
            <p>Sin información adicional</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Moderna;


