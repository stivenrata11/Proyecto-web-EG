import React, { useState } from 'react';
import './CrearEncuesta.css';

const CrearEncuesta = ({ onBack }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // Aquí puedes añadir la lógica para guardar la nueva encuesta
    alert("Encuesta creada con éxito!");
    onBack(); // Redirigir a la lista de encuestas
  };

  return (
    <div className="crear-encuesta-container">
      <h1 className="panel-title">Crear Nueva Encuesta</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título de la encuesta"
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción de la encuesta"
            required
          />
        </div>
        <button className="submit-button" type="button" onClick={handleSubmit}>
          Aceptar
        </button>
      </form>
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default CrearEncuesta;
