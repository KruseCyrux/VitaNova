import React, { useState } from "react";
import { useCV } from "../../contexts/CVContext";
import "../../styles/AlergiasSection.css";



function AlergiasSection() {
  const { cvData, setCVData } = useCV();
  const [alergia, setAlergia] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleAdd = () => {
    if (!alergia.trim()) return;
    const nuevaAlergia = { alergia, descripcion };
    const updated = [...(cvData.salud?.alergias || []), nuevaAlergia];

    setCVData({
      ...cvData,
      salud: {
        ...(cvData.salud || {}),
        alergias: updated,
      },
    });

    setAlergia("");
    setDescripcion("");
  };

  const handleDelete = (index) => {
    const updated = cvData.salud?.alergias.filter((_, i) => i !== index) || [];
    setCVData({
      ...cvData,
      salud: {
        ...(cvData.salud || {}),
        alergias: updated,
      },
    });
  };

  return (
    <div className="form-section">
      <h4>Enfermedades o Alergias</h4>

      <div className="form-group">
        <label>Nombre de la enfermedad o alergia:</label>
        <input
          type="text"
          placeholder="Ej. Asma, alergia al polen..."
          value={alergia}
          onChange={(e) => setAlergia(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Descripción / tratamiento:</label>
        <input
          type="text"
          placeholder="Medicamentos o indicaciones médicas"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <button
        type="button"
        onClick={handleAdd}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Agregar
      </button>

      {cvData.salud?.alergias?.length > 0 && (
        <ul>
          {cvData.salud.alergias.map((item, index) => (
            <li
              key={index}
              style={{
                background: "#f8f9fa",
                border: "1px solid #ddd",
                padding: "0.5rem",
                borderRadius: "5px",
                marginBottom: "0.5rem",
              }}
            >
              <strong>{item.alergia}</strong> — {item.descripcion}
              <button
                type="button"
                onClick={() => handleDelete(index)}
                style={{
                  float: "right",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlergiasSection;
