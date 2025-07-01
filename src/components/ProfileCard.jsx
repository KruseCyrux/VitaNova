import { useState, useEffect } from 'react';
import personalDataDefault from '../data/personalData';
import styles from '../styles/ProfileCard.module.css';
import { loadData, saveData } from '../utils/storage';

export default function ProfileCard() {
  const [editing, setEditing] = useState(false);
  const [personalData, setPersonalData] = useState(personalDataDefault);

  useEffect(() => {
    const saved = loadData('personalData', personalDataDefault);
    setPersonalData(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    saveData('personalData', personalData);
    setEditing(false);
  };

  return (
    <div className={styles.card}>
      <img
        src={personalData.imagen}
        alt="Foto de perfil"
        className={styles.foto}
      />

      {editing ? (
        <>
          <input
            type="text"
            name="nombre"
            value={personalData.nombre}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="titulo"
            value={personalData.titulo}
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="resumen"
            value={personalData.resumen}
            onChange={handleChange}
            className={styles.textarea}
          />
          <input
            type="email"
            name="correo"
            value={personalData.correo}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="telefono"
            value={personalData.telefono}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="ubicacion"
            value={personalData.ubicacion}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="date"
            name="nacimiento"
            value={personalData.nacimiento}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="url"
            name="linkedin"
            value={personalData.linkedin}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="url"
            name="github"
            value={personalData.github}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="url"
            name="imagen"
            value={personalData.imagen}
            onChange={handleChange}
            className={styles.input}
          />
          <button onClick={handleSave} className={styles.botonGuardar}>
            Guardar cambios
          </button>
        </>
      ) : (
        <>
          <h2>{personalData.nombre}</h2>
          <h4>{personalData.titulo}</h4>
          <p>{personalData.resumen}</p>
          <ul>
            <li><strong>Correo:</strong> {personalData.correo}</li>
            <li><strong>Teléfono:</strong> {personalData.telefono}</li>
            <li><strong>Ubicación:</strong> {personalData.ubicacion}</li>
            <li><strong>Nacimiento:</strong> {personalData.nacimiento}</li>
            <li><strong>LinkedIn:</strong> <a href={personalData.linkedin} target="_blank">{personalData.linkedin}</a></li>
            <li><strong>GitHub:</strong> <a href={personalData.github} target="_blank">{personalData.github}</a></li>
          </ul>
          <button onClick={() => setEditing(true)} className={styles.botonEditar}>
            Editar
          </button>
        </>
      )}
    </div>
  );
}