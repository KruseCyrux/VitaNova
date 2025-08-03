import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-body">
          <h2>Bienvenido a VitaNova</h2>
          <p>Selecciona una sección del menú para comenzar a crear tu CV.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;