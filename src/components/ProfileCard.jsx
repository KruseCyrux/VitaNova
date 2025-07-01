import personalData from '../data/personalData';
import styles from '../styles/ProfileCard.module.css';

export default function ProfileCard() {
  const {
    nombre, titulo, resumen, correo, telefono,
    ubicacion, nacimiento, linkedin, github, imagen
  } = personalData;

  return (
    <div className={styles.card}>
      <img src={imagen} alt="Foto de perfil" className={styles.foto} />
      <h2>{nombre}</h2>
      <h4>{titulo}</h4>
      <p>{resumen}</p>
      <ul>
        <li><strong>Correo:</strong> {correo}</li>
        <li><strong>Teléfono:</strong> {telefono}</li>
        <li><strong>Ubicación:</strong> {ubicacion}</li>
        <li><strong>Nacimiento:</strong> {nacimiento}</li>
        <li><strong>LinkedIn:</strong> <a href={linkedin} target="_blank">{linkedin}</a></li>
        <li><strong>GitHub:</strong> <a href={github} target="_blank">{github}</a></li>
      </ul>
    </div>
  );
}
