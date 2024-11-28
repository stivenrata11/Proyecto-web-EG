import React from 'react';
import './AdministrarEncuesta.css';

const Administrar = ({ onOptionSelect }) => {
  return (
    <div className="Administrar-container">
      <h1 className="panel-title">Administrar Encuestas</h1>
      <div className="Administrar-buttons">
        <button
          className="Administrar-button"
          onClick={() => onOptionSelect("Ver Encuesta")}
        >
          Ver Encuesta
        </button>
        <button
          className="Administrar-button"
          onClick={() => onOptionSelect("Crear Encuesta")}
        >
          Crear Encuesta
        </button>
        <button
          className="Administrar-button"
          onClick={() => onOptionSelect("Subir Encuesta")}
        >
          Subir Encuesta
        </button>
        <button
          className="Administrar-button"
          onClick={() => onOptionSelect("Eliminar Encuesta")}
        >
          Eliminar Encuesta
        </button>
      </div>
    </div>
  );
};

export default Administrar;
