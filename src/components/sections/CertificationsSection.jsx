import React from "react";
import "../../styles/card.css";
import { useCV } from "../../contexts/CVContext";

const CertificationsSection = () => {
  const { cvData, updateSection } = useCV();

  const addCertification = () => {
    updateSection("certifications", [
      ...cvData.certifications,
      {
        name: "",
        institution: "",
        dateObtained: "",
        dateExpires: "",
        verificationId: "",
        specialty: "",
        certificateLink: "",
      },
    ]);
  };

  const updateCertification = (index, field, value) => {
    const updated = [...cvData.certifications];
    updated[index] = { ...updated[index], [field]: value };
    updateSection("certifications", updated);
  };

  const removeCertification = (indexToRemove) => {
    const updated = cvData.certifications.filter((_, idx) => idx !== indexToRemove);
    updateSection("certifications", updated);
  };

  return (
    <div className="card-section" id="certifications">
      <h3>Certificaciones</h3>
      {cvData.certifications.map((cert, i) => (
        <div className="card" key={i}>
          <input
            type="text"
            placeholder="Nombre de la certificación"
            value={cert.name}
            onChange={(e) => updateCertification(i, "name", e.target.value)}
          />
          <input
            type="text"
            placeholder="Institución que la otorga"
            value={cert.institution}
            onChange={(e) => updateCertification(i, "institution", e.target.value)}
          />
          <input
            type="month"
            placeholder="Fecha de obtención"
            value={cert.dateObtained}
            onChange={(e) => updateCertification(i, "dateObtained", e.target.value)}
          />
          <input
            type="month"
            placeholder="Fecha de vencimiento (si aplica)"
            value={cert.dateExpires}
            onChange={(e) => updateCertification(i, "dateExpires", e.target.value)}
          />
          <input
            type="text"
            placeholder="ID de verificación o URL"
            value={cert.verificationId}
            onChange={(e) => updateCertification(i, "verificationId", e.target.value)}
          />
          <input
            type="text"
            placeholder="Ámbito o especialidad"
            value={cert.specialty}
            onChange={(e) => updateCertification(i, "specialty", e.target.value)}
          />
          <input
            type="url"
            placeholder="Enlace al certificado digital"
            value={cert.certificateLink}
            onChange={(e) => updateCertification(i, "certificateLink", e.target.value)}
          />

          <div className="button-group">
            <button
              className="delete-button"
              onClick={() => removeCertification(i)}
            >
              Eliminar
            </button>
            {i === cvData.certifications.length - 1 && (
              <button className="add-button" onClick={addCertification}>
                Agregar certificación
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

export default CertificationsSection;
