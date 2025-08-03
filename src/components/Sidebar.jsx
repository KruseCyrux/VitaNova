import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiFileText, FiSettings, FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h1 className="logo">VitaNova</h1>
      <nav>
        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <FiUser /> Datos Personales
          </li>
          <li onClick={() => navigate("/editor")}>
            <FiFileText /> Generar CV
          </li>
          <li onClick={() => navigate("/ajustes")}>
            <FiSettings /> Ajustes
          </li>
        </ul>
      </nav>
      <button className="logout-btn" onClick={handleLogout}>
        <FiLogOut /> Cerrar sesión
      </button>
    </div>
  );
};

export default Sidebar;
