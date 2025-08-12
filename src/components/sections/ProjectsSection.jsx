import React from "react";
import "../../styles/card.css";
import { useCV } from "../../contexts/CVContext";

const ProjectsSection = () => {
  const { cvData, updateSection } = useCV();

  const updateProject = (index, field, value) => {
    const updated = [...cvData.projects];
    updated[index] = { ...updated[index], [field]: value };
    updateSection("projects", updated);
  };

  const addProject = () => {
    updateSection("projects", [
      ...cvData.projects,
      {
        title: "",
        description: "",
        technologies: "",
        role: "",
        results: "",
        duration: "",
        link: "",
        team: "",
        client: "",
      },
    ]);
  };

  const removeProject = (indexToRemove) => {
    const updated = cvData.projects.filter((_, idx) => idx !== indexToRemove);
    updateSection("projects", updated);
  };

  return (
    <div className="card-section" id="projects">
      <h3>Proyectos</h3>
      {cvData.projects.map((proj, i) => (
        <div className="card" key={i}>
          <input
            type="text"
            placeholder="Nombre del proyecto"
            value={proj.title}
            onChange={(e) => updateProject(i, "title", e.target.value)}
          />
          <textarea
            placeholder="Descripción breve"
            value={proj.description}
            onChange={(e) => updateProject(i, "description", e.target.value)}
          />
          <input
            type="text"
            placeholder="Tecnologías o herramientas utilizadas"
            value={proj.technologies}
            onChange={(e) => updateProject(i, "technologies", e.target.value)}
          />
          <input
            type="text"
            placeholder="Rol desempeñado"
            value={proj.role}
            onChange={(e) => updateProject(i, "role", e.target.value)}
          />
          <textarea
            placeholder="Resultados o métricas logradas"
            value={proj.results}
            onChange={(e) => updateProject(i, "results", e.target.value)}
          />
          <input
            type="text"
            placeholder="Duración"
            value={proj.duration}
            onChange={(e) => updateProject(i, "duration", e.target.value)}
          />
          <input
            type="url"
            placeholder="Enlace al repositorio o demo"
            value={proj.link}
            onChange={(e) => updateProject(i, "link", e.target.value)}
          />
          <input
            type="text"
            placeholder="Equipo involucrado (opcional)"
            value={proj.team}
            onChange={(e) => updateProject(i, "team", e.target.value)}
          />
          <input
            type="text"
            placeholder="Cliente (si aplica)"
            value={proj.client}
            onChange={(e) => updateProject(i, "client", e.target.value)}
          />

          <div className="button-group">
            <button className="delete-button" onClick={() => removeProject(i)}>
              Eliminar
            </button>
            {i === cvData.projects.length - 1 && (
              <button className="add-button" onClick={addProject}>
                Agregar proyecto
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

export default ProjectsSection;
