import React from 'react';
import '../styles/preview.css';

const PreviewPopup = ({ onClose }) => {
  return (
    <div className="preview-overlay">
      <div className="preview-container">
        <button className="close-preview" onClick={onClose}>
          ✖
        </button>
        <h2>Vista Previa del CV</h2>
        <div className="preview-content">
          {/* Aquí se renderizará la vista previa en tiempo real */}
          <p>Contenido del CV en vivo aquí...</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPopup;