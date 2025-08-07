import React, { useState } from "react";
import "../../styles/card.css";

const PersonalInfoSection = () => {
  const [persons, setPersons] = useState([
    {
      fullName: "",
      birthDate: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      nationality: "",
      maritalStatus: ""
    }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...persons];
    updated[index][field] = value;
    setPersons(updated);
  };

  const handleAdd = () => {
    setPersons([
      ...persons,
      {
        fullName: "",
        birthDate: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        nationality: "",
        maritalStatus: ""
      }
    ]);
  };

  const handleRemove = (indexToRemove) => {
    const updated = persons.filter((_, idx) => idx !== indexToRemove);
    setPersons(updated);
  };

  return (
    <section id="personal-info" className="cv-section">
      <h2>Información Personal</h2>
      {persons.map((entry, i) => (
        <div className="card" key={i} style={{ marginBottom: "1.5rem" }}>
          <label>Nombre completo:</label>
          <input
            type="text"
            placeholder="Nombre completo"
            value={entry.fullName}
            onChange={(e) => handleChange(i, "fullName", e.target.value)}
          />

          <label>Fecha de nacimiento:</label>
          <input
            type="date"
            value={entry.birthDate}
            onChange={(e) => handleChange(i, "birthDate", e.target.value)}
          />

          <label>Dirección:</label>
          <input
            type="text"
            placeholder="Dirección"
            value={entry.address}
            onChange={(e) => handleChange(i, "address", e.target.value)}
          />

          <label>Teléfono:</label>
          <input
            type="tel"
            placeholder="Teléfono"
            value={entry.phone}
            onChange={(e) => handleChange(i, "phone", e.target.value)}
          />

          <label>Correo electrónico:</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={entry.email}
            onChange={(e) => handleChange(i, "email", e.target.value)}
          />

          <label>Sitio web / LinkedIn / GitHub:</label>
          <input
            type="text"
            placeholder="Sitio web o perfil profesional"
            value={entry.website}
            onChange={(e) => handleChange(i, "website", e.target.value)}
          />

          <label>Nacionalidad:</label>
          <input
            type="text"
            placeholder="Nacionalidad"
            value={entry.nationality}
            onChange={(e) => handleChange(i, "nationality", e.target.value)}
          />

          <label>Estado civil:</label>
          <input
            type="text"
            placeholder="Estado civil"
            value={entry.maritalStatus}
            onChange={(e) => handleChange(i, "maritalStatus", e.target.value)}
          />

          <button
            className="delete-button"
            onClick={() => handleRemove(i)}
            style={{ marginTop: "1rem" }}
          >
            Eliminar
          </button>

          {i === persons.length - 1 && (
            <button className="add-button" onClick={handleAdd} style={{ marginTop: "1rem" }}>
              Añadir otra información personal
            </button>
          )}
          <button
              className="back-to-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Volver arriba
            </button>
        </div>
      ))}
    </section>
  );
};

export default PersonalInfoSection;
