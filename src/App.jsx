import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1>Bienvenido a VitaNova</h1>
        <p>Tu generador profesional de CVs.</p>
      </main>
    </div>
  );
}

export default App;
