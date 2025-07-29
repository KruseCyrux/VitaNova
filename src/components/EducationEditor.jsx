import React from "react";
import "../styles/EducationEditor.css";

function EducationEditor({ education, updateEducation, deleteEducation }) {
  return (
    <div className="education-editor">
      <input
        type="text"
        placeholder="Título o grado"
        value={education.degree}
        onChange={(e) =>
          updateEducation(education.id, "degree", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Institución"
        value={education.institution}
        onChange={(e) =>
          updateEducation(education.id, "institution", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={education.city}
        onChange={(e) =>
          updateEducation(education.id, "city", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Desde"
        value={education.from}
        onChange={(e) =>
          updateEducation(education.id, "from", e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Hasta"
        value={education.to}
        onChange={(e) =>
          updateEducation(education.id, "to", e.target.value)
        }
      />
      <textarea
        placeholder="Descripción"
        value={education.description}
        onChange={(e) =>
          updateEducation(education.id, "description", e.target.value)
        }
      />
      <button className="delete-btn" onClick={() => deleteEducation(education.id)}>
        Eliminar
      </button>
    </div>
  );
}

export default EducationEditor;
