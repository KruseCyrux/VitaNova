import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaIdBadge,
  FaBriefcase,
  FaStar,
  FaGraduationCap,
  FaGlobe,
  FaCertificate,
  FaProjectDiagram,
  FaAddressBook,
  FaInfoCircle,
  FaSignOutAlt,
  FaRegEye,
  FaPhoneAlt,
  FaPalette,
  FaChevronDown,
} from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import PreviewPopup from "./PreviewPopup";
import "../styles/sidebar.css";
import { useCV } from "../contexts/CVContext";
// 👇 justo después de tus imports
import { Clasica, Moderna, Minimalista } from "./templates";


function Sidebar({ setActiveSection }) {
  const navigate = useNavigate();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const { cvData, styleConfig, setStyleConfig } = useCV();

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/login"));
  };

  // 🔹 Cambiar de plantilla y aplicar estilo
  const handleTemplateSelect = (template) => {
    let newConfig = { ...styleConfig };

    switch (template) {
      case "Clásica":
        newConfig = {
          template: "Clásica",
          color: "#2e3a59",
          font: "Times New Roman",
        };
        break;
      case "Moderna":
        newConfig = {
          template: "Moderna",
          color: "#1e90ff",
          font: "Poppins",
        };
        break;
      case "Minimalista":
        newConfig = {
          template: "Minimalista",
          color: "#333333",
          font: "Inter",
        };
        break;
      default:
        return;
    }

    setStyleConfig(newConfig);
    setShowTemplates(false);
    alert(`✅ Plantilla "${template}" aplicada con éxito.`);
  };

  // 🔹 Función para mostrar la plantilla actual
const renderSelectedTemplate = () => {
  switch (styleConfig.template) {
    case "Clásica":
      return <Clasica cvData={cvData} styleConfig={styleConfig} />;
    case "Moderna":
      return <Moderna cvData={cvData} styleConfig={styleConfig} />;
    case "Minimalista":
      return <Minimalista cvData={cvData} styleConfig={styleConfig} />;
    default:
      return null;
  }
};

  return (
    <>
      <aside className="sidebar">
        <h2>VitaNova</h2>

        <nav>
          <ul>
            <li onClick={() => setActiveSection("personal-info")}>
              <FaIdBadge /> Perfil Personal
            </li>
            <li onClick={() => setActiveSection("profile")}>
              <FaUser /> Perfil Profesional
            </li>
            <li onClick={() => setActiveSection("experience")}>
              <FaBriefcase /> Experiencia
            </li>
            <li onClick={() => setActiveSection("education")}>
              <FaGraduationCap /> Educación
            </li>
            <li onClick={() => setActiveSection("skills")}>
              <FaStar /> Habilidades
            </li>
            <li onClick={() => setActiveSection("certifications")}>
              <FaCertificate /> Certificaciones
            </li>
            <li onClick={() => setActiveSection("languages")}>
              <FaGlobe /> Idiomas
            </li>
            <li onClick={() => setActiveSection("projects")}>
              <FaProjectDiagram /> Proyectos
            </li>
            <li onClick={() => setActiveSection("references")}>
              <FaAddressBook /> Referencias
            </li>
            <li onClick={() => setActiveSection("additional-info")}>
              <FaInfoCircle /> Adicional
            </li>
          </ul>
        </nav>

        {/* 🎨 Sección de plantillas */}
        <div className="template-section">
          <button
            className="template-button"
            onClick={() => setShowTemplates(!showTemplates)}
          >
            <FaPalette /> Plantillas{" "}
            <FaChevronDown
              className={`arrow ${showTemplates ? "open" : ""}`}
            />
          </button>

          {showTemplates && (
            <ul className="template-dropdown">
              <li onClick={() => handleTemplateSelect("Clásica")}>📄 Clásica</li>
              <li onClick={() => handleTemplateSelect("Moderna")}>💼 Moderna</li>
              <li onClick={() => handleTemplateSelect("Minimalista")}>
                🧩 Minimalista
              </li>
            </ul>
          )}
        </div>

        <button
          className="contact-button"
          onClick={() => navigate("/contacto")}
        >
          <FaPhoneAlt /> Contacto
        </button>

        <button
          className="preview-button"
          onClick={() => setIsPreviewOpen(true)}
        >
          <FaRegEye /> Vista Previa
        </button>

        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Cerrar sesión
        </button>
      </aside>

      {/* 🔹 Vista previa emergente */}
      {isPreviewOpen && (
  <PreviewPopup onClose={() => setIsPreviewOpen(false)}>
    {renderSelectedTemplate()}
  </PreviewPopup>
)}

    </>
  );
}

export default Sidebar;
