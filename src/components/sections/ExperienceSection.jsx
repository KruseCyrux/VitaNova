import React, { useState } from 'react';

function ExperienceSection() {
  const [experiences, setExperiences] = useState([
    { id: 1, cargo: '', empresa: '', fecha: '', descripcion: '' },
  ]);

  const handleChange = (id, field, value) => {
    setExperiences(prev =>
      prev.map(exp => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const addExperience = () => {
    const newId = Date.now();
    setExperiences([...experiences, { id: newId, cargo: '', empresa: '', fecha: '', descripcion: '' }]);
  };

  return (
    <section className="card-section">
      <h3>Experiencia</h3>
      {experiences.map(exp => (
        <div key={exp.id} className="card-form">
          <input
            type="text"
            placeholder="Cargo"
            value={exp.cargo}
            onChange={e => handleChange(exp.id, 'cargo', e.target.value)}
          />
          <input
            type="text"
            placeholder="Empresa"
            value={exp.empresa}
            onChange={e => handleChange(exp.id, 'empresa', e.target.value)}
          />
          <input
            type="text"
            placeholder="Fecha"
            value={exp.fecha}
            onChange={e => handleChange(exp.id, 'fecha', e.target.value)}
          />
          <textarea
            rows="2"
            placeholder="Descripción"
            value={exp.descripcion}
            onChange={e => handleChange(exp.id, 'descripcion', e.target.value)}
          />
        </div>
      ))}
      <button className="btn-add" onClick={addExperience}>+ Añadir experiencia</button>
    </section>
  );
}

export default ExperienceSection;
