import { useEffect, useState } from 'react';
import styles from '../styles/Skills.module.css';
import habilidadesGeneralesDefecto from '../data/skillsGeneral';
import habilidadesPorProfesion from '../data/skillsByProfession';
import { loadData, saveData } from '../utils/storage';

export default function Skills() {
  const [generales, setGenerales] = useState([]);
  const [profesion, setProfesion] = useState('');
  const [especializadas, setEspecializadas] = useState([]);
  const [nuevaGeneral, setNuevaGeneral] = useState('');
  const [nuevaEspecial, setNuevaEspecial] = useState('');

  useEffect(() => {
    setGenerales(loadData('skillsGenerales', habilidadesGeneralesDefecto));
    const prof = loadData('profesion', '');
    setProfesion(prof);
    setEspecializadas(loadData('skillsEspecializadas', habilidadesPorProfesion[prof] || []));
  }, []);

  const agregarHabilidadGeneral = () => {
    if (nuevaGeneral.trim() && !generales.includes(nuevaGeneral.trim())) {
      const nuevas = [...generales, nuevaGeneral.trim()];
      setGenerales(nuevas);
      saveData('skillsGenerales', nuevas);
      setNuevaGeneral('');
    }
  };

  const eliminarHabilidadGeneral = (index) => {
    const nuevas = generales.filter((_, i) => i !== index);
    setGenerales(nuevas);
    saveData('skillsGenerales', nuevas);
  };

  const agregarHabilidadEspecial = () => {
    if (nuevaEspecial.trim() && !especializadas.includes(nuevaEspecial.trim())) {
      const nuevas = [...especializadas, nuevaEspecial.trim()];
      setEspecializadas(nuevas);
      saveData('skillsEspecializadas', nuevas);
      setNuevaEspecial('');
    }
  };

  const eliminarHabilidadEspecial = (index) => {
    const nuevas = especializadas.filter((_, i) => i !== index);
    setEspecializadas(nuevas);
    saveData('skillsEspecializadas', nuevas);
  };

  const handleProfesionChange = (e) => {
    const nuevaProf = e.target.value;
    setProfesion(nuevaProf);
    saveData('profesion', nuevaProf);
    const base = habilidadesPorProfesion[nuevaProf] || [];
    setEspecializadas(base);
    saveData('skillsEspecializadas', base);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>Habilidades Generales</h3>
        <ul>
          {generales.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
              <button onClick={() => eliminarHabilidadGeneral(index)} className={styles.btnEliminar}>✖</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Nueva habilidad general"
          value={nuevaGeneral}
          onChange={(e) => setNuevaGeneral(e.target.value)}
          className={styles.input}
        />
        <button onClick={agregarHabilidadGeneral} className={styles.btnAgregar}>
          Agregar
        </button>
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
          <ul>
            {especializadas.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                {skill}
                <button onClick={() => eliminarHabilidadEspecial(index)} className={styles.btnEliminar}>✖</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder={`Nueva habilidad en ${profesion}`}
            value={nuevaEspecial}
            onChange={(e) => setNuevaEspecial(e.target.value)}
            className={styles.input}
          />
          <button onClick={agregarHabilidadEspecial} className={styles.btnAgregar}>
            Agregar
          </button>
        </div>
      )}
    </div>
  );
}
