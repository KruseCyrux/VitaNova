import React from 'react';

function ProfileSection() {
  return (
    <section className="card-section">
      <h3>Perfil</h3>
      <textarea
        className="form-control"
        rows="4"
        placeholder="Escribe un breve resumen sobre ti, tu experiencia y objetivos..."
      />
    </section>
  );
}

export default ProfileSection;
