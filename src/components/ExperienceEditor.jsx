import React from "react";
import "../styles/ExperienceEditor.css";

function ExperienceEditor({ experience, updateExperience, deleteExperience }) {
  return (
    <div className="experience-editor">
      <input
        type="text"
        placeholder="Puesto"
        value={experience.position}
        onChange={(e) =>
          updateExperience(experience.id, "position", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Empresa"
        value={experience.company}
        onChange={(e) =>
          updateExperience(experience.id, "company", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={experience.city}
        onChange={(e) =>
          updateExperience(experience.id, "city", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Desde"
        value={experience.from}
        onChange={(e) =>
          updateExperience(experience.id, "from", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Hasta"
        value={experience.to}
        onChange={(e) =>
          updateExperience(experience.id, "to", e.target.value)
        }
      />
      <textarea
        placeholder="Descripción"
        value={experience.description}
        onChange={(e) =>
          updateExperience(experience.id, "description", e.target.value)
        }
      />
      <button className="delete-btn" onClick={() => deleteExperience(experience.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default ExperienceEditor;
