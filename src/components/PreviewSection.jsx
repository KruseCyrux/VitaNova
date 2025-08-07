import React from "react";
import "../styles/preview.css";

const PreviewSection = () => {
  return (
    <div id="preview" className="preview-container">
      <h2>Vista Previa del CV</h2>
      <div className="preview-box">
        {/* Aquí se mostrará el CV en tiempo real más adelante */}
        <p>Aquí se mostrará una vista previa en tiempo real del currículum generado.</p>
      </div>
    </div>
  );
};

export default PreviewSection;
