import React from "react";
import { useCV } from "../contexts/CVContext";

function AlergiasForm() {
  const { cvData, setCvData } = useCV();

  const handleChange = (index, field, value) => {
    const newAlergias = [...cvData.alergias];
    newAlergias[index][field] = value;
    setCvData({ ...cvData, alergias: newAlergias });
  };

  const handleAdd = () => {
    const nuevaAlergia = { alergia: "", descripcion: "" };
    setCvData({ ...cvData, alergias: [...cvData.alergias, nuevaAlergia] });
  };

  const handleRemove = (index) => {
    const newAlergias = cvData.alergias.filter((_, i) => i !== index);
    setCvData({ ...cvData, alergias: newAlergias });
  };

  return (
    <div className="form-container">
      <h2>Alergias o Enfermedades</h2>
      {cvData.alergias?.length > 0 ? (
        cvData.alergias.map((item, i) => (
          <div key={i} className="card" style={{ marginBottom: "1rem" }}>
            <label>Nombre de la alergia o enfermedad:</label>
            <input
              type="text"
              value={item.alergia}
              onChange={(e) => handleChange(i, "alergia", e.target.value)}
              placeholder="Ej. Asma, alergia al polen..."
            />
            <label>Descripción o tratamiento:</label>
            <textarea
              value={item.descripcion}
              onChange={(e) => handleChange(i, "descripcion", e.target.value)}
              placeholder="Detalles relevantes o recomendaciones médicas"
            />
            <button onClick={() => handleRemove(i)} className="delete-btn">
              Eliminar
            </button>
          </div>
        ))
      ) : (
        <p>No hay alergias o enfermedades registradas.</p>
      )}

      <button onClick={handleAdd} className="add-btn">
        ➕ Agregar alergia o enfermedad
      </button>
    </div>
  );
}

export default AlergiasForm;
