import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import '../styles/welcome.css';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          navigate('/dashboard');
        } else {
          navigate('/login');
        }
      });
    }, 3500); // 3.5 segundos de bienvenida

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
     <img src="/Logo (2).png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        <h1>Bienvenid@ a <span>VitaNova</span></h1>
        <p>Tu herramienta definitiva para generar currículums profesionales.</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;