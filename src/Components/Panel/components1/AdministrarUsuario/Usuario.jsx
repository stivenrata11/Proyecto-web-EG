import React from 'react';
import './Usuario.css';

const Usuario = ({ onOptionSelect }) => {
  return (
    <div className="Usuario-container">
      <h1 className="panel-title">Administrar Usuarios</h1>
      <div className="Usuario-buttons">
        <button
          className="Usuario-button"
          onClick={() => onOptionSelect("Ver Usuarios")}
        >
          Ver Usuarios
        </button>
        <button
          className="Usuario-button"
          onClick={() => onOptionSelect("Crear Nuevo Usuario")}
        >
          Crear Nuevo Usuario
        </button>
      </div>
    </div>
  );
};

export default Usuario;
