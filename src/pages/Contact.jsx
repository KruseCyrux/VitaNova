import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "emailjs-com";
import "leaflet/dist/leaflet.css";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .send(
        "TU_SERVICE_ID",     // 🔹 reemplaza con tu Service ID
        "TU_TEMPLATE_ID",    // 🔹 reemplaza con tu Template ID
        formData,
        "TU_PUBLIC_KEY"      // 🔹 reemplaza con tu Public Key
      )
      .then(
        () => setStatus("✅ Mensaje enviado con éxito"),
        (error) => setStatus("❌ Error al enviar: " + error.text)
      );
  };

  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <p>Conectemos mas alla del codigo. Si tienes dudas, ideas o colaboraciones, escribenos. Tu mensaje puede ser el inicio de algo increible 🌐😎</p>

      {/* 📍 Mapa */}
      <div
        className="map-container"
        style={{ height: "400px", width: "100%", marginTop: "20px" }}
      >
        <MapContainer
          center={[19.4326, -99.1332]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={[19.4326, -99.1332]}>
            <Popup>Ubicación del equipo VitaNova (Ciudad de México)</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* ✉️ Formulario de contacto */}
      <div className="form-container">
        <h2>Envíanos un mensaje</h2>
        <form onSubmit={sendEmail} className="contact-form">
          <label>Nombre</label>
          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            onChange={handleChange}
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            name="reply_to"
            placeholder="Tu correo electrónico"
            onChange={handleChange}
            required
          />

          <label>Asunto</label>
          <input
            type="text"
            name="subject"
            placeholder="Motivo del mensaje"
            onChange={handleChange}
            required
          />

          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            rows="5"
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-button">
            Enviar mensaje
          </button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}

export default Contact;
