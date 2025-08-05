import React, { useState } from "react";
import "../../styles/card.css";

const LanguagesSection = () => {
  const [languages, setLanguages] = useState([
    {
      language: "",
      usedProfessionally: false,
      reading: "",
      writing: "",
      speaking: "",
      certification: "",
    },
  ]);

  const addLanguage = () => {
    setLanguages([
      ...languages,
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

  const updateLanguage = (index, field, value) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const toggleUsedProfessionally = (index) => {
    const updated = [...languages];
    updated[index].usedProfessionally = !updated[index].usedProfessionally;
    setLanguages(updated);
  };

  const removeLanguage = (indexToRemove) => {
    const updated = languages.filter((_, idx) => idx !== indexToRemove);
    setLanguages(updated);
  };

  return (
    <div className="card-section" id="languages">
      <h3>Idiomas</h3>
      {languages.map((lang, i) => (
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
            {i === languages.length - 1 && (
              <button className="add-button" onClick={addLanguage}>
                Agregar idioma
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguagesSection;
