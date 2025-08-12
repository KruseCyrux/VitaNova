import React from "react";
import "../../styles/card.css";
import { useCV } from "../../contexts/CVContext";

const infoTypes = [
  "Premios o reconocimientos",
  "Membresías a asociaciones profesionales",
  "Participaciones en conferencias o charlas",
  "Disponibilidad para reubicarse",
  "Hobbies / Intereses personales",
  "Voluntariado",
];

const AdditionalInfoSection = () => {
  const { cvData, updateSection } = useCV();

  const addInfo = () => {
    updateSection("additionalInfo", [
      ...cvData.additionalInfo,
      { type: "", content: "" },
    ]);
  };

  const updateInfo = (index, field, value) => {
    const updated = [...cvData.additionalInfo];
    updated[index] = { ...updated[index], [field]: value };
    updateSection("additionalInfo", updated);
  };

  const removeInfo = (indexToRemove) => {
    const updated = cvData.additionalInfo.filter((_, idx) => idx !== indexToRemove);
    updateSection("additionalInfo", updated);
  };

  return (
    <div className="card-section" id="additional-info">
      <h3>Información Adicional</h3>
      {cvData.additionalInfo.map((info, i) => (
        <div className="card" key={i}>
          <select
            value={info.type}
            onChange={(e) => updateInfo(i, "type", e.target.value)}
          >
            <option value="" disabled>
              Seleccione el tipo de información
            </option>
            {infoTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Contenido detallado"
            value={info.content}
            onChange={(e) => updateInfo(i, "content", e.target.value)}
            rows={3}
          />
          <div className="button-group">
            <button className="delete-button" onClick={() => removeInfo(i)}>
              Eliminar
            </button>
            {i === cvData.additionalInfo.length - 1 && (
              <button className="add-button" onClick={addInfo}>
                Agregar información
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

export default AdditionalInfoSection;
