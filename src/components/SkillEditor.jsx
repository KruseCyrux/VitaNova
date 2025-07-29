import React from "react";
import "../styles/SkillEditor.css";

function SkillEditor({ skill, updateSkill, deleteSkill }) {
  return (
    <div className="skill-editor">
      <input
        type="text"
        placeholder="Nombre habilidad"
        value={skill.name}
        onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Nivel (ej. Básico, Intermedio, Avanzado)"
        value={skill.level}
        onChange={(e) => updateSkill(skill.id, "level", e.target.value)}
      />
      <button className="delete-btn" onClick={() => deleteSkill(skill.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default SkillEditor;
