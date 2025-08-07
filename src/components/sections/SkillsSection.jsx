import React, { useState } from "react";
import "../../styles/card.css";

const SkillsSection = () => {
  const [skills, setSkills] = useState([
    {
      name: "",
      category: "",
      level: "",
      experience: "",
      certificate: "",
    },
  ]);

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        name: "",
        category: "",
        level: "",
        experience: "",
        certificate: "",
      },
    ]);
  };

  const updateSkill = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const removeSkill = (indexToRemove) => {
    const updated = skills.filter((_, idx) => idx !== indexToRemove);
    setSkills(updated);
  };

  return (
    <div className="card-section" id="skills">
      <h3>Habilidades</h3>
      {skills.map((skill, i) => (
        <div className="card" key={i}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label>Categoría</label>
              <select
                value={skill.category}
                onChange={(e) => updateSkill(i, "category", e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                <option value="Técnica">Técnica</option>
                <option value="Blanda">Blanda</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label>Nivel de Dominio</label>
              <select
                value={skill.level}
                onChange={(e) => updateSkill(i, "level", e.target.value)}
              >
                <option value="">Selecciona nivel</option>
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
                <option value="Experto">Experto</option>
              </select>
            </div>
          </div>

          <input
            type="text"
            placeholder="Nombre de la habilidad"
            value={skill.name}
            onChange={(e) => updateSkill(i, "name", e.target.value)}
          />

          <input
            type="text"
            placeholder="Años de experiencia"
            value={skill.experience}
            onChange={(e) => updateSkill(i, "experience", e.target.value)}
          />

          <input
            type="text"
            placeholder="Certificado que lo respalde (opcional)"
            value={skill.certificate}
            onChange={(e) => updateSkill(i, "certificate", e.target.value)}
          />

          <div className="button-group">
            <button className="delete-button" onClick={() => removeSkill(i)}>
              Eliminar
            </button>
            {i === skills.length - 1 && (
              <button className="add-button" onClick={addSkill}>
                Agregar habilidad
              </button>
            )}
             <button
              className="back-to-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Volver arriba
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
