import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  FaSignOutAlt
} from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import '../styles/sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="sidebar">
      <h2>VitaNova</h2>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('personal-profile')}><FaIdBadge /> Perfil Personal</li>
          <li onClick={() => scrollToSection('profile')}><FaUser /> Perfil Profesional</li>
          <li onClick={() => scrollToSection('experience')}><FaBriefcase /> Experiencia</li>
          <li onClick={() => scrollToSection('skills')}><FaStar /> Habilidades</li>
          <li onClick={() => scrollToSection('education')}><FaGraduationCap /> Educación</li>
          <li onClick={() => scrollToSection('languages')}><FaGlobe /> Idiomas</li>
          <li onClick={() => scrollToSection('certifications')}><FaCertificate /> Certificaciones</li>
          <li onClick={() => scrollToSection('projects')}><FaProjectDiagram /> Proyectos</li>
          <li onClick={() => scrollToSection('references')}><FaAddressBook /> Referencias</li>
          <li onClick={() => scrollToSection('additional-info')}><FaInfoCircle /> Adicional</li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>
        <FaSignOutAlt /> Cerrar sesión
      </button>
    </aside>
  );
}

export default Sidebar;
