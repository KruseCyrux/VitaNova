import React, { useState } from "react";
import "../../styles/card.css";

const ExperienceSection = () => {
  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      location: "",
      startDate: "",
      endDate: "",
      achievements: [""],
      responsibilities: "",
      tools: "",
      employmentType: "",
      reference: ""
    }
  ]);

  const updateExperience = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const updateAchievement = (expIndex, achIndex, value) => {
    const updated = [...experience];
    updated[expIndex].achievements[achIndex] = value;
    setExperience(updated);
  };

  const addAchievement = (expIndex) => {
    const updated = [...experience];
    updated[expIndex].achievements.push("");
    setExperience(updated);
  };

  const removeAchievement = (expIndex, achIndex) => {
    const updated = [...experience];
    updated[expIndex].achievements = updated[expIndex].achievements.filter(
      (_, i) => i !== achIndex
    );
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "",
        achievements: [""],
        responsibilities: "",
        tools: "",
        employmentType: "",
        reference: ""
      }
    ]);
  };

  const removeExperience = (indexToRemove) => {
    const updated = experience.filter((_, idx) => idx !== indexToRemove);
    setExperience(updated);
  };

  return (
    <div className="card-section" id="experience">
      <h3>Experiencia</h3>
      {experience.map((exp, i) => (
        <div className="card" key={i}>
          <input
            type="text"
            placeholder="Nombre de la empresa"
            value={exp.company}
            onChange={(e) => updateExperience(i, "company", e.target.value)}
          />

          <input
            type="text"
            placeholder="Cargo o puesto"
            value={exp.role}
            onChange={(e) => updateExperience(i, "role", e.target.value)}
          />

          <input
            type="text"
            placeholder="Ciudad y país"
            value={exp.location}
            onChange={(e) => updateExperience(i, "location", e.target.value)}
          />

          <label>Fecha de inicio:</label>
          <input
            type="month"
            value={exp.startDate}
            onChange={(e) => updateExperience(i, "startDate", e.target.value)}
          />

          <label>Fecha de finalización:</label>
          <input
            type="month"
            value={exp.endDate}
            onChange={(e) => updateExperience(i, "endDate", e.target.value)}
          />

          <label>Responsabilidades clave:</label>
          <textarea
            placeholder="Describe responsabilidades importantes"
            value={exp.responsibilities}
            onChange={(e) => updateExperience(i, "responsibilities", e.target.value)}
          />

          <label>Tecnologías/herramientas utilizadas:</label>
          <input
            type="text"
            placeholder="Ej: React, SQL, Jira..."
            value={exp.tools}
            onChange={(e) => updateExperience(i, "tools", e.target.value)}
          />

          <label>Tipo de empleo:</label>
          <input
            type="text"
            placeholder="Ej: Tiempo completo, freelance, remoto..."
            value={exp.employmentType}
            onChange={(e) => updateExperience(i, "employmentType", e.target.value)}
          />

          <label>Referencia laboral (nombre y contacto):</label>
          <textarea
            placeholder="Ej: Juan Pérez - juan@email.com"
            value={exp.reference}
            onChange={(e) => updateExperience(i, "reference", e.target.value)}
          />

          <label>Logros principales:</label>
          {exp.achievements.map((ach, j) => (
            <div key={j} className="nested-field">
              <input
                type="text"
                placeholder={`Logro ${j + 1}`}
                value={ach}
                onChange={(e) => updateAchievement(i, j, e.target.value)}
              />
              <button onClick={() => removeAchievement(i, j)} className="delete-button small">
                X
              </button>
            </div>
          ))}
          <button
            onClick={() => addAchievement(i)}
            className="add-button small"
            style={{ marginBottom: "1rem" }}
          >
            Añadir logro
          </button>

          <button className="delete-button" onClick={() => removeExperience(i)}>
            Eliminar experiencia
          </button>

          {i === experience.length - 1 && (
            <button onClick={addExperience} className="add-button">
              Agregar experiencia
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
