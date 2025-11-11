import React from "react";
import "../../styles/photoUpload.css";
import { useCV } from "../../contexts/CVContext";

function PhotoUploadSection() {
  const { cvData, updateSection } = useCV();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateSection("photo", reader.result); // ✅ guardamos la foto en el contexto
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="photo-upload-section">
      <h3>Foto de Perfil</h3>
      <div className="photo-upload-container">
        {cvData.photo ? (
          <img src={cvData.photo} alt="Perfil" className="uploaded-photo" />
        ) : (
          <div className="photo-placeholder">Sin foto</div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="photo-input"
        />
      </div>
    </section>
  );
}

export default PhotoUploadSection;
