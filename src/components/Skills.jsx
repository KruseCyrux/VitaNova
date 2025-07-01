import { useEffect, useState } from 'react';
import styles from '../styles/Skills.module.css';
import habilidadesGeneralesDefecto from '../data/skillsGeneral';
import habilidadesPorProfesion from '../data/skillsByProfession';
import { loadData, saveData } from '../utils/storage';

export default function Skills() {
  const [generales, setGenerales] = useState([]);
  const [profesion, setProfesion] = useState('');
  const [especializadas, setEspecializadas] = useState([]);

  useEffect(() => {
    const generalesGuardadas = loadData('skillsGenerales', habilidadesGeneralesDefecto);
    const profesionGuardada = loadData('profesion', '');
    const especializadasGuardadas = loadData('skillsEspecializadas', []);

    setGenerales(generalesGuardadas);
    setProfesion(profesionGuardada);
    setEspecializadas(especializadasGuardadas);
  }, []);

  const handleProfesionChange = (e) => {
    const nuevaProfesion = e.target.value;
    setProfesion(nuevaProfesion);
    saveData('profesion', nuevaProfesion);

    const nuevasHabilidades = habilidadesPorProfesion[nuevaProfesion] || [];
    setEspecializadas(nuevasHabilidades);
    saveData('skillsEspecializadas', nuevasHabilidades);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>Habilidades Generales</h3>
        {generales.map((skill, index) => (
          <div key={index} className={styles.skillItem}>{skill}</div>
        ))}
      </div>

      <div className={styles.section}>
        <h3>Selecciona tu profesión</h3>
        <select
          className={styles.select}
          value={profesion}
          onChange={handleProfesionChange}
        >
          <option value="">-- Selecciona una opción --</option>
          {Object.keys(habilidadesPorProfesion).map((prof, i) => (
            <option key={i} value={prof}>{prof}</option>
          ))}
        </select>
      </div>

      {profesion && (
        <div className={styles.section}>
          <h3>Habilidades en {profesion}</h3>
          {especializadas.length > 0 ? (
            especializadas.map((skill, index) => (
              <div key={index} className={styles.skillItem}>{skill}</div>
            ))
          ) : (
            <p>No hay habilidades cargadas aún.</p>
          )}
        </div>
      )}
    </div>
  );
}
