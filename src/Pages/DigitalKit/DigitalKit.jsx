import React, { useState } from "react";
import "./DigitalKit.css";
import { digitaldata } from "./digitaldata";

const DigitalItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  if (!title || !content) return null;

  //  Corta el texto sin cortar palabras
  const getShortText = (text, maxLength = 80) => {
    if (text.length <= maxLength) return text;
    const trimmed = text.slice(0, maxLength);
    const lastSpace = trimmed.lastIndexOf(" ");
    return trimmed.slice(0, lastSpace) + "...";
  };

  const shortText = getShortText(content, 80);

  return (
    <div className="digital-item" onClick={() => setExpanded(!expanded)}>
      <h3 className="digital-title">{title}</h3>
      <p className={`digital-content ${expanded ? "expanded" : ""}`}>
        {expanded ? content : shortText}
      </p>
      <button className="toggle-btn">
        {expanded ? "Ver menos ▲" : "Ver más ▼"}
      </button>
    </div>
  );
};

const DigitalKit = () => {
  console.log("Datos cargados:", digitaldata);

  return (
    <div className="digital-kit-page">
      <div className="digital-header">
  <h1 className="digital-title-main">Ofertas del Kit Digital</h1>
  <h2 className="digital-subtitle">Consulta nuestro equipo</h2>
</div>
      <div className="digital-container">
        {digitaldata && digitaldata.length > 0 ? (
          digitaldata.map((item) => (
            <DigitalItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))
        ) : (
          <p style={{ color: "white" }}>No hay ofertas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default DigitalKit;


