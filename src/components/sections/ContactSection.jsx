import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "../../styles/contact.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",    // <-- reemplaza con tu Service ID
        "YOUR_TEMPLATE_ID",   // <-- reemplaza con tu Template ID
        formData,
        "YOUR_PUBLIC_KEY"     // <-- reemplaza con tu Public Key
      )
      .then(
        () => {
          setStatus("✅ Mensaje enviado correctamente");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("Error al enviar mensaje:", error);
          setStatus("❌ Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contacto</h2>
      <div className="contact-container">
        {/* 🗺️ Mapa */}
        <div className="map-container">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5472263683516!2d-99.18436792571612!3d19.386543844895795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff2f3bbd4b2b%3A0x9d06fdf31f98e52b!2sCiudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1693332100000!5m2!1ses-419!2smx"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* 📩 Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo"
            value={formData.user_email}
            onChange={handleChange}
            required
          />

          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-button">
            Enviar mensaje
          </button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </div>

      {/* 🌐 Redes sociales */}
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </motion.section>
  );
}

export default ContactSection;
