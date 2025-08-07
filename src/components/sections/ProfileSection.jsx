import React, { useState } from "react";
import "../../styles/card.css";

const ProfileSection = () => {
  const [profiles, setProfiles] = useState([
    {
      summary: "",
      goals: "",
      experienceYears: "",
      industry: "",
      values: "",
      availability: "",
      interests: "",
      keywords: "",
      relocation: "",
      salary: ""
    }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...profiles];
    updated[index][field] = value;
    setProfiles(updated);
  };

  const handleAdd = () => {
    setProfiles([
      ...profiles,
      {
        summary: "",
        goals: "",
        experienceYears: "",
        industry: "",
        values: "",
        availability: "",
        interests: "",
        keywords: "",
        relocation: "",
        salary: ""
      }
    ]);
  };

  const handleRemove = (indexToRemove) => {
    const updated = profiles.filter((_, idx) => idx !== indexToRemove);
    setProfiles(updated);
  };

  return (
    <section id="profile" className="cv-section">
      <h2>Perfil Profesional</h2>
      {profiles.map((entry, i) => (
        <div className="card" key={i} style={{ marginBottom: "1.5rem" }}>
          <label>Resumen profesional:</label>
          <textarea
            placeholder="Resumen profesional..."
            value={entry.summary}
            onChange={(e) => handleChange(i, "summary", e.target.value)}
          />

          <label>Descripción breve de objetivos profesionales:</label>
          <textarea
            placeholder="Objetivos profesionales..."
            value={entry.goals}
            onChange={(e) => handleChange(i, "goals", e.target.value)}
          />

          <label>Años de experiencia:</label>
          <input
            type="number"
            min="0"
            placeholder="Años de experiencia"
            value={entry.experienceYears}
            onChange={(e) => handleChange(i, "experienceYears", e.target.value)}
          />

          <label>Sector o industria principal:</label>
          <input
            type="text"
            placeholder="Sector o industria"
            value={entry.industry}
            onChange={(e) => handleChange(i, "industry", e.target.value)}
          />

          <label>Valores personales o profesionales:</label>
          <textarea
            placeholder="Valores personales o profesionales"
            value={entry.values}
            onChange={(e) => handleChange(i, "values", e.target.value)}
          />

          <label>Disponibilidad:</label>
          <input
            type="text"
            placeholder="Disponibilidad (inmediata, medio tiempo, freelance...)"
            value={entry.availability}
            onChange={(e) => handleChange(i, "availability", e.target.value)}
          />

          <label>Intereses laborales:</label>
          <textarea
            placeholder="Puestos deseados, áreas de interés"
            value={entry.interests}
            onChange={(e) => handleChange(i, "interests", e.target.value)}
          />

          <label>Frases clave:</label>
          <input
            type="text"
            placeholder="Orientado a resultados, trabajo en equipo, etc."
            value={entry.keywords}
            onChange={(e) => handleChange(i, "keywords", e.target.value)}
          />

          <label>Permiso de trabajo internacional o disponibilidad de mudanza:</label>
          <input
            type="text"
            placeholder="Sí/No, países, condiciones"
            value={entry.relocation}
            onChange={(e) => handleChange(i, "relocation", e.target.value)}
          />

          <label>Pretensiones salariales (opcional):</label>
          <input
            type="text"
            placeholder="Pretensiones salariales"
            value={entry.salary}
            onChange={(e) => handleChange(i, "salary", e.target.value)}
          />

          <button
            className="delete-button"
            onClick={() => handleRemove(i)}
            style={{ marginTop: "1rem" }}
          >
            Eliminar
          </button>

          {i === profiles.length - 1 && (
            <button className="add-button" onClick={handleAdd} style={{ marginTop: "1rem" }}>
              Añadir otro perfil
            </button>
          )}
          <button
              className="back-to-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Volver arriba
            </button>
        </div>
      ))}
    </section>
  );
};

export default ProfileSection;
