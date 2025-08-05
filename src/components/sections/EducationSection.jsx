import React, { useState } from "react";
import "../../styles/card.css";

const EducationSection = () => {
  const [education, setEducation] = useState([
    {
      nivel: "",
      titulo: "",
      institucion: "",
      ubicacion: "",
      fechaInicio: "",
      fechaFin: "",
      estado: "",
      promedio: "",
      proyecto: "",
      actividades: ""
    }
  ]);

  const addEducation = () => {
    setEducation([
      ...education,
      {
        nivel: "",
        titulo: "",
        institucion: "",
        ubicacion: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "",
        promedio: "",
        proyecto: "",
        actividades: ""
      }
    ]);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const removeEducation = (indexToRemove) => {
    const updated = education.filter((_, idx) => idx !== indexToRemove);
    setEducation(updated);
  };

  return (
    <div className="card-section" id="education">
      <h3>Educación</h3>
      {education.map((edu, i) => (
        <div className="card" key={i}>
          <input
            type="text"
            placeholder="Nivel educativo (Licenciatura, Técnico, etc.)"
            value={edu.nivel}
            onChange={(e) => updateEducation(i, "nivel", e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre del título obtenido"
            value={edu.titulo}
            onChange={(e) => updateEducation(i, "titulo", e.target.value)}
          />
          <input
            type="text"
            placeholder="Institución educativa"
            value={edu.institucion}
            onChange={(e) => updateEducation(i, "institucion", e.target.value)}
          />
          <input
            type="text"
            placeholder="Ciudad y país"
            value={edu.ubicacion}
            onChange={(e) => updateEducation(i, "ubicacion", e.target.value)}
          />
          <input
            type="month"
            placeholder="Fecha de inicio"
            value={edu.fechaInicio}
            onChange={(e) => updateEducation(i, "fechaInicio", e.target.value)}
          />
          <input
            type="month"
            placeholder="Fecha de finalización"
            value={edu.fechaFin}
            onChange={(e) => updateEducation(i, "fechaFin", e.target.value)}
          />
          <input
            type="text"
            placeholder="Estado (finalizado, en curso, trunco)"
            value={edu.estado}
            onChange={(e) => updateEducation(i, "estado", e.target.value)}
          />
          <input
            type="text"
            placeholder="Promedio o calificaciones (opcional)"
            value={edu.promedio}
            onChange={(e) => updateEducation(i, "promedio", e.target.value)}
          />
          <input
            type="text"
            placeholder="Proyecto de tesis o investigación"
            value={edu.proyecto}
            onChange={(e) => updateEducation(i, "proyecto", e.target.value)}
          />
          <input
            type="text"
            placeholder="Actividades extracurriculares o cargos"
            value={edu.actividades}
            onChange={(e) => updateEducation(i, "actividades", e.target.value)}
          />
          <button className="delete-button" onClick={() => removeEducation(i)}>
            Eliminar
          </button>
        </div>
      ))}
      <button onClick={addEducation} className="add-button">
        Agregar educación
      </button>
    </div>
  );
};

export default EducationSection;
