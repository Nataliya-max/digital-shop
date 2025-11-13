import React from "react";
import "./Contact.css";
import people from "/people.jpg";
import instagram from "/instagram.png";
import facebook from "/facebook.png";
import twitter from "/logotipo-de-twitter.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Bloque Formulario */}
        <div className="contact-form">
          <h2>Contáctanos</h2>
          <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" placeholder="Tu correo" required />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje..." required />

            <button type="submit" className="submit-btn">Enviar</button>
          </form>

          {/* Redes sociales */}
          <div className="social-icons">
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>

        {/* Bloque Imagen */}
        <div className="contact-image">
          <img src={people} alt="Personas trabajando" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
