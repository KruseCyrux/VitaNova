import React from "react";
import "../styles/preview.css";

function PreviewPopup({ data, onClose }) {
  // Para no repetir, extraemos el primer objeto de cada sección que es array con un solo item
  const personalInfo = data.personalInfo?.[0] || {};
  const profile = data.profile?.[0] || {};

  return (
    <div className="preview-overlay">
      <div className="preview-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Vista Previa</h2>

        {/* Información Personal */}
        <section>
          <h3>{personalInfo.fullName || "Nombre completo"}</h3>
          <p>{personalInfo.email || "Correo electrónico"}</p>
          <p>{personalInfo.phone || "Teléfono"}</p>
          <p>{personalInfo.address || "Dirección"}</p>
          <p>{personalInfo.website || "Sitio web"}</p>
          <p>{personalInfo.nationality || "Nacionalidad"}</p>
          <p>{personalInfo.maritalStatus || "Estado civil"}</p>
          <p>{personalInfo.birthDate || "Fecha de nacimiento"}</p>
        </section>

        {/* Perfil */}
        <section>
          <h3>Perfil Profesional</h3>
          <p>{profile.summary || "Sin resumen"}</p>
          <p>{profile.goals || "Sin objetivos"}</p>
          <p>{profile.experienceYears ? `Años de experiencia: ${profile.experienceYears}` : ""}</p>
          <p>{profile.industry ? `Industria: ${profile.industry}` : ""}</p>
          <p>{profile.values ? `Valores: ${profile.values}` : ""}</p>
          <p>{profile.availability ? `Disponibilidad: ${profile.availability}` : ""}</p>
          <p>{profile.interests ? `Intereses: ${profile.interests}` : ""}</p>
          <p>{profile.keywords ? `Keywords: ${profile.keywords}` : ""}</p>
          <p>{profile.relocation ? `Relocalización: ${profile.relocation}` : ""}</p>
          <p>{profile.salary ? `Salario deseado: ${profile.salary}` : ""}</p>
        </section>

        {/* Experiencia */}
        <section>
          <h3>Experiencia</h3>
          {data.experience.length > 0 ? (
            <ul>
              {data.experience.map((exp, i) => (
                <li key={i}>
                  <strong>{exp.role || "Cargo"}</strong>
                  {exp.company && ` en ${exp.company}`}
                  {(exp.startDate || exp.endDate) && ` (${exp.startDate || "Inicio"} - ${exp.endDate || "Actual"})`}
                  {exp.location && <p>Ubicación: {exp.location}</p>}
                  {exp.responsibilities && <p>Responsabilidades: {exp.responsibilities}</p>}
                  {exp.tools && <p>Herramientas: {exp.tools}</p>}
                  {exp.employmentType && <p>Tipo de empleo: {exp.employmentType}</p>}
                  {exp.reference && <p>Referencia: {exp.reference}</p>}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul>
                      {exp.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin experiencia agregada</p>
          )}
        </section>

        {/* Educación */}
        <section>
          <h3>Educación</h3>
          {data.education.length > 0 ? (
            <ul>
              {data.education.map((edu, i) => (
                <li key={i}>
                  <strong>{edu.titulo || "Título"}</strong>
                  {edu.institucion && ` - ${edu.institucion}`}
                  {(edu.fechaInicio || edu.fechaFin) && ` (${edu.fechaInicio || "Inicio"} - ${edu.fechaFin || "Fin"})`}
                  {edu.nivel && <p>Nivel: {edu.nivel}</p>}
                  {edu.ubicacion && <p>Ubicación: {edu.ubicacion}</p>}
                  {edu.estado && <p>Estado: {edu.estado}</p>}
                  {edu.promedio && <p>Promedio: {edu.promedio}</p>}
                  {edu.proyecto && <p>Proyecto destacado: {edu.proyecto}</p>}
                  {edu.actividades && <p>Actividades: {edu.actividades}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin educación agregada</p>
          )}
        </section>

        {/* Habilidades */}
        <section>
          <h3>Habilidades</h3>
          {data.skills.length > 0 ? (
            <ul>
              {data.skills.map((skill, i) => (
                <li key={i}>
                  {skill.name || "Habilidad"} - {skill.level || "Nivel"} ({skill.category || "Categoría"})
                  {skill.experience && ` - Experiencia: ${skill.experience}`}
                  {skill.certificate && ` - Certificado: ${skill.certificate}`}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin habilidades agregadas</p>
          )}
        </section>

        {/* Certificaciones */}
        <section>
          <h3>Certificaciones</h3>
          {data.certifications.length > 0 ? (
            <ul>
              {data.certifications.map((cert, i) => (
                <li key={i}>
                  {cert.name || "Certificación"} - {cert.institution || ""}
                  {cert.dateObtained && ` (Obtenida: ${cert.dateObtained})`}
                  {cert.dateExpires && ` (Expira: ${cert.dateExpires})`}
                  {cert.specialty && ` - Especialidad: ${cert.specialty}`}
                  {cert.verificationId && <p>ID Verificación: {cert.verificationId}</p>}
                  {cert.certificateLink && (
                    <p>
                      <a href={cert.certificateLink} target="_blank" rel="noreferrer">
                        Enlace al certificado
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin certificaciones</p>
          )}
        </section>

        {/* Idiomas */}
        <section>
          <h3>Idiomas</h3>
          {data.languages.length > 0 ? (
            <ul>
              {data.languages.map((lang, i) => (
                <li key={i}>
                  {lang.language || "Idioma"} - Lectura: {lang.reading || "-"}; Escritura: {lang.writing || "-"}; Habla: {lang.speaking || "-"}
                  {lang.usedProfessionally && " (Usado profesionalmente)"}
                  {lang.certification && ` - Certificación: ${lang.certification}`}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin idiomas agregados</p>
          )}
        </section>

        {/* Proyectos */}
        <section>
          <h3>Proyectos</h3>
          {data.projects.length > 0 ? (
            <ul>
              {data.projects.map((proj, i) => (
                <li key={i}>
                  <strong>{proj.title || "Proyecto"}</strong>
                  {proj.description && ` - ${proj.description}`}
                  {proj.technologies && <p>Tecnologías: {proj.technologies}</p>}
                  {proj.role && <p>Rol: {proj.role}</p>}
                  {proj.results && <p>Resultados: {proj.results}</p>}
                  {proj.duration && <p>Duración: {proj.duration}</p>}
                  {proj.link && (
                    <p>
                      <a href={proj.link} target="_blank" rel="noreferrer">
                        Enlace al proyecto
                      </a>
                    </p>
                  )}
                  {proj.team && <p>Equipo: {proj.team}</p>}
                  {proj.client && <p>Cliente: {proj.client}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin proyectos</p>
          )}
        </section>

        {/* Información Adicional */}
        <section>
          <h3>Información Adicional</h3>
          {data.additionalInfo.length > 0 ? (
            <ul>
              {data.additionalInfo.map((info, i) => (
                <li key={i}>
                  <strong>{info.type || "Tipo"}</strong>: {info.content || "Contenido"}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sin información adicional</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default PreviewPopup;
