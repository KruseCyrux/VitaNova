import React from "react";
import "../../styles/card.css";
import { useCV } from "../../contexts/CVContext";

const LanguagesSection = () => {
  const { cvData, updateSection } = useCV();

  const updateLanguage = (index, field, value) => {
    const updated = [...cvData.languages];
    updated[index] = { ...updated[index], [field]: value };
    updateSection("languages", updated);
  };

  const toggleUsedProfessionally = (index) => {
    const updated = [...cvData.languages];
    updated[index] = { 
      ...updated[index], 
      usedProfessionally: !updated[index].usedProfessionally 
    };
    updateSection("languages", updated);
  };

  const addLanguage = () => {
    updateSection("languages", [
      ...cvData.languages,
      {
        language: "",
        usedProfessionally: false,
        reading: "",
        writing: "",
        speaking: "",
        certification: "",
      },
    ]);
  };

  const removeLanguage = (indexToRemove) => {
    const updated = cvData.languages.filter((_, idx) => idx !== indexToRemove);
    updateSection("languages", updated);
  };

  return (
    <div className="card-section" id="languages">
      <h3>Idiomas</h3>
      {cvData.languages.map((lang, i) => (
        <div className="card" key={i}>
          <input
            type="text"
            placeholder="Idioma"
            value={lang.language}
            onChange={(e) => updateLanguage(i, "language", e.target.value)}
          />
          <label className="checkbox-inline">
            <input
              type="checkbox"
              checked={lang.usedProfessionally}
              onChange={() => toggleUsedProfessionally(i)}
            />
            <span> Uso profesional</span>
          </label>

          <input
            type="text"
            placeholder="Nivel de lectura"
            value={lang.reading}
            onChange={(e) => updateLanguage(i, "reading", e.target.value)}
          />
          <input
            type="text"
            placeholder="Nivel de escritura"
            value={lang.writing}
            onChange={(e) => updateLanguage(i, "writing", e.target.value)}
          />
          <input
            type="text"
            placeholder="Nivel de habla"
            value={lang.speaking}
            onChange={(e) => updateLanguage(i, "speaking", e.target.value)}
          />
          <input
            type="text"
            placeholder="Certificación (ej. TOEFL, IELTS...)"
            value={lang.certification}
            onChange={(e) =>
              updateLanguage(i, "certification", e.target.value)
            }
          />

          <div className="button-group">
            <button className="delete-button" onClick={() => removeLanguage(i)}>
              Eliminar
            </button>
            {i === cvData.languages.length - 1 && (
              <button className="add-button" onClick={addLanguage}>
                Agregar idioma
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

export default LanguagesSection;
