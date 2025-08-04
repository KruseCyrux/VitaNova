import React, { useState } from 'react';

function SkillsSection() {
  const [skills, setSkills] = useState(['']);

  const handleChange = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  const addSkill = () => setSkills([...skills, '']);

  return (
    <section className="card-section">
      <h3>Habilidades</h3>
      {skills.map((skill, idx) => (
        <input
          key={idx}
          type="text"
          value={skill}
          placeholder="Ej: React, Node.js"
          onChange={e => handleChange(idx, e.target.value)}
          className="form-control"
        />
      ))}
      <button className="btn-add" onClick={addSkill}>+ Añadir habilidad</button>
    </section>
  );
}

export default SkillsSection;
