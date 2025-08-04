import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaBriefcase,
  FaStar,
  FaSignOutAlt,
} from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import '../styles/sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  return (
    <aside className="sidebar">
      <h2>VitaNova</h2>
      <nav>
        <ul>
          <li><FaUser /> Perfil</li>
          <li><FaBriefcase /> Experiencia</li>
          <li><FaStar /> Habilidades</li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>
        <FaSignOutAlt /> Cerrar sesión
      </button>
    </aside>
  );
}

export default Sidebar;
