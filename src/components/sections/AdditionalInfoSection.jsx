import React, { useState } from "react";
import "../../styles/card.css";

const infoTypes = [
  "Premios o reconocimientos",
  "Membresías a asociaciones profesionales",
  "Participaciones en conferencias o charlas",
  "Disponibilidad para reubicarse",
  "Hobbies / Intereses personales",
  "Voluntariado",
];

const AdditionalInfoSection = () => {
  const [additionalInfo, setAdditionalInfo] = useState([
    { type: "", content: "" },
  ]);

  const addInfo = () => {
    setAdditionalInfo([...additionalInfo, { type: "", content: "" }]);
  };

  const updateInfo = (index, field, value) => {
    const updated = [...additionalInfo];
    updated[index][field] = value;
    setAdditionalInfo(updated);
  };

  const removeInfo = (indexToRemove) => {
    const updated = additionalInfo.filter((_, idx) => idx !== indexToRemove);
    setAdditionalInfo(updated);
  };

  return (
    <div className="card-section" id="additional-info">
      <h3>Información Adicional</h3>
      {additionalInfo.map((info, i) => (
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
            {i === additionalInfo.length - 1 && (
              <button className="add-button" onClick={addInfo}>
                Agregar información
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInfoSection;
