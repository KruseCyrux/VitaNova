import React, { useState } from "react";
import CVEditor from "./components/CVEditor";
import CVPreview from "./components/CVPreview";
import initialData from "./data/initialData";

function App() {
  const [cvData, setCvData] = useState(initialData);

  return (
    <div className="app-container">
      <header>
        <h1>VitaNova - Generador de CV</h1>
      </header>
      <main>
        <CVEditor cvData={cvData} setCvData={setCvData} />
        <CVPreview cvData={cvData} />
      </main>
      <footer>
        <p>© 2025 VitaNova - Tu CV profesional en línea</p>
      </footer>
    </div>
  );
}

export default App;
