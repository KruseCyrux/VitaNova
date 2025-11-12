import React from "react";
import "../../styles/card.css";
import { useCV } from "../../contexts/CVContext";

const MedicalSection = () => {
  const { cvData, updateSection } = useCV();

  const medical = cvData.medical || {};

  const updateField = (field, value) => {
    updateSection("medical", { ...medical, [field]: value });
  };

  const updateNested = (section, field, value) => {
    updateSection("medical", {
      ...medical,
      [section]: {
        ...medical[section],
        [field]: value,
      },
    });
  };

  return (
    <div className="card-section" id="medical">
      <h3>Información Médica</h3>
      <div className="card">
        <input
          type="text"
          placeholder="Tipo de sangre"
          value={medical.bloodType || ""}
          onChange={(e) => updateField("bloodType", e.target.value)}
        />
        <input
          type="text"
          placeholder="Alergias"
          value={medical.allergies || ""}
          onChange={(e) => updateField("allergies", e.target.value)}
        />
        <input
          type="text"
          placeholder="Enfermedades crónicas"
          value={medical.chronicDiseases || ""}
          onChange={(e) => updateField("chronicDiseases", e.target.value)}
        />
        <input
          type="text"
          placeholder="Medicamentos actuales"
          value={medical.medications || ""}
          onChange={(e) => updateField("medications", e.target.value)}
        />
        <input
          type="text"
          placeholder="Estado general de salud"
          value={medical.healthStatus || ""}
          onChange={(e) => updateField("healthStatus", e.target.value)}
        />

        <h4>Contacto de emergencia</h4>
        <input
          type="text"
          placeholder="Nombre del contacto"
          value={medical.emergencyContact?.name || ""}
          onChange={(e) => updateNested("emergencyContact", "name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Relación"
          value={medical.emergencyContact?.relation || ""}
          onChange={(e) => updateNested("emergencyContact", "relation", e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={medical.emergencyContact?.phone || ""}
          onChange={(e) => updateNested("emergencyContact", "phone", e.target.value)}
        />

        <h4>Seguro médico</h4>
        <input
          type="text"
          placeholder="Compañía aseguradora"
          value={medical.insurance?.company || ""}
          onChange={(e) => updateNested("insurance", "company", e.target.value)}
        />
        <input
          type="text"
          placeholder="Número de póliza"
          value={medical.insurance?.policyNumber || ""}
          onChange={(e) => updateNested("insurance", "policyNumber", e.target.value)}
        />
        <input
          type="text"
          placeholder="Cobertura"
          value={medical.insurance?.coverage || ""}
          onChange={(e) => updateNested("insurance", "coverage", e.target.value)}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "0.3rem",
            marginBottom: "0.8rem",
          }}
        >
          <input
            type="checkbox"
            checked={medical.organDonor || false}
            onChange={(e) => updateField("organDonor", e.target.checked)}
            style={{
              width: "18px",
              height: "18px",
              margin: 0,
            }}
        />
        <label style={{ margin: 0 }}>Donador de órganos</label>
    </div>
        <input
          type="date"
          placeholder="Último chequeo médico"
          value={medical.lastCheckup || ""}
          onChange={(e) => updateField("lastCheckup", e.target.value)}
        />

        <textarea
          placeholder="Notas adicionales"
          value={medical.notes || ""}
          onChange={(e) => updateField("notes", e.target.value)}
        />

        <div className="button-group">
          <button
            className="back-to-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Volver arriba
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalSection;
