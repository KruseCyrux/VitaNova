import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img
          src="/vite.svg"
          alt="VitaNova Logo"
          style={{ width: "40px", height: "40px" }}
        />
        <span>VitaNova</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Crear CV</a></li>
          <li><a href="#">Mis CVs</a></li>
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
