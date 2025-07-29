import React from "react";
import ExperienceEditor from "./ExperienceEditor";
import EducationEditor from "./EducationEditor";
import SkillEditor from "./SkillEditor";
import SectionTitle from "./SectionTitle";
import "../styles/CVEditor.css";

function CVEditor({ cvData, setCvData }) {
  // Actualizar datos personales:
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setCvData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };

  // Experiencias
  const addExperience = () => {
    setCvData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: Date.now(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          description: "",
        },
      ],
    }));
  };

  const updateExperience = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const deleteExperience = (id) => {
    setCvData((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }));
  };

  // Educación
  const addEducation = () => {
    setCvData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          degree: "",
          institution: "",
          city: "",
          from: "",
          to: "",
          description: "",
        },
      ],
    }));
  };

  const updateEducation = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const deleteEducation = (id) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  // Habilidades
  const addSkill = () => {
    setCvData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: Date.now(),
          name: "",
          level: "",
        },
      ],
    }));
  };

  const updateSkill = (id, field, value) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    }));
  };

  const deleteSkill = (id) => {
    setCvData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  return (
    <section className="cv-editor">
      <SectionTitle title="Datos Personales" />
      <div className="personal-form">
        <input
          type="text"
          name="fullName"
          placeholder="Nombre completo"
          value={cvData.personal.fullName}
          onChange={handlePersonalChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Puesto o profesión"
          value={cvData.personal.title}
          onChange={handlePersonalChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={cvData.personal.email}
          onChange={handlePersonalChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={cvData.personal.phone}
          onChange={handlePersonalChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={cvData.personal.address}
          onChange={handlePersonalChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Sitio web"
          value={cvData.personal.website}
          onChange={handlePersonalChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn"
          value={cvData.personal.linkedin}
          onChange={handlePersonalChange}
        />
        <textarea
          name="summary"
          placeholder="Resumen profesional"
          value={cvData.personal.summary}
          onChange={handlePersonalChange}
        />
      </div>

      <SectionTitle title="Experiencia Laboral" />
      {cvData.experiences.map((exp) => (
        <ExperienceEditor
          key={exp.id}
          experience={exp}
          updateExperience={updateExperience}
          deleteExperience={deleteExperience}
        />
      ))}
      <button className="add-btn" onClick={addExperience}>
        + Añadir experiencia
      </button>

      <SectionTitle title="Educación" />
      {cvData.education.map((edu) => (
        <EducationEditor
          key={edu.id}
          education={edu}
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
        />
      ))}
      <button className="add-btn" onClick={addEducation}>
        + Añadir educación
      </button>

      <SectionTitle title="Habilidades" />
      {cvData.skills.map((skill) => (
        <SkillEditor
          key={skill.id}
          skill={skill}
          updateSkill={updateSkill}
          deleteSkill={deleteSkill}
        />
      ))}
      <button className="add-btn" onClick={addSkill}>
        + Añadir habilidad
      </button>
    </section>
  );
}

export default CVEditor;
