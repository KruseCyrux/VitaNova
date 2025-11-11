import React from "react";
import { useCV } from "../contexts/CVContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Minimalista from "./templates/Minimalista";
import Moderna from "./templates/Moderna";
import Elegante from "./templates/Elegante";
import "../styles/preview.css";

function PreviewPopup({ onClose }) {
  const { cvData, styleConfig } = useCV();

  // 📄 Función para generar PDF
  const handleDownloadPDF = async () => {
    const content = document.getElementById("cv-preview-content");
    const canvas = await html2canvas(content, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    pdf.save(`${cvData.personalInfo?.[0]?.fullName || "Mi_CV"}.pdf`);
  };

  // 🔹 Determina qué plantilla usar
  const renderTemplate = () => {
    switch (styleConfig.template) {
      case "Moderna":
        return <Moderna cvData={cvData} styleConfig={styleConfig} />;
      case "Elegante":
        return <Elegante cvData={cvData} styleConfig={styleConfig} />;
      default:
        return <Minimalista cvData={cvData} styleConfig={styleConfig} />;
    }
  };

  return (
    <div
      className="preview-overlay"
      style={{
        backgroundColor: "#f7f9"
        fontFamily: styleConfig.font || "Roboto, sans-serif",
        color: styleConfig.color || "#2e3a59",
      }}
    >
      <div className="preview-container">
        {/* 🔹 ENCABEZADO: Botones visibles */}
        <div
          className="preview-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: styleConfig.color || "#2e3a59",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cerrar
          </button>

          <button
            onClick={handleDownloadPDF}
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Descargar PDF
          </button>
        </div>

        {/* 🔹 Aquí se renderiza la plantilla seleccionada */}
        <div id="cv-preview-content" className="preview-content">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}

export default PreviewPopup;
