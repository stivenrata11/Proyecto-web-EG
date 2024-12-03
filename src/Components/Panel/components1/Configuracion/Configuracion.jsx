import React, { useState } from "react";
import "./Configuracion.css";

const Configuracion = ({ onBack }) => {
  const [theme, setTheme] = useState("light");
  const [textSize, setTextSize] = useState(16);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // Cambiar tema
  };

  const handleTextSizeChange = (event) => {
    const newSize = event.target.value;
    setTextSize(newSize);
    document.documentElement.style.setProperty("--text-size", `${newSize}px`);
  };

  return (
    <div className="configuracion-container">
      <h1 className="panel-title">Configuración</h1>

      {/* Sección de tema */}
      <div className="config-option">
        <h2>Tema</h2>
        <button
          className={`theme-button ${theme === "light" ? "active" : ""}`}
          onClick={() => handleThemeChange("light")}
        >
          Claro
        </button>
        <button
          className={`theme-button ${theme === "dark" ? "active" : ""}`}
          onClick={() => handleThemeChange("dark")}
        >
          Oscuro
        </button>
      </div>

      {/* Sección de tamaño de texto */}
      <div className="config-option">
        <h2>Tamaño de Texto</h2>
        <input
          type="range"
          min="12"
          max="24"
          value={textSize}
          onChange={handleTextSizeChange}
        />
        <span>{textSize}px</span>
      </div>

      {/* Botón de regreso */}
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default Configuracion;
