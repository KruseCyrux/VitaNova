import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>VitaNova</h1>
      <ul className={styles.links}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
      </ul>
    </nav>
  );
}