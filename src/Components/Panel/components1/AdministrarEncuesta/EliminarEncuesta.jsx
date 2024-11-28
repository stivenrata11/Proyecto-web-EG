import React, { useState } from 'react';
import './EliminarEncuesta.css';

const EliminarEncuesta = ({ onBack }) => {
  const [surveyId, setSurveyId] = useState("");

  const handleDelete = () => {
    // Lógica para eliminar la encuesta según el ID
    alert("Encuesta eliminada con éxito!");
    onBack(); // Redirigir a la lista de encuestas
  };

  return (
    <div className="eliminar-encuesta-container">
      <h1 className="panel-title">Eliminar Encuesta</h1>
      <div className="form-group">
        <label>ID de la Encuesta</label>
        <input
          type="number"
          value={surveyId}
          onChange={(e) => setSurveyId(e.target.value)}
          placeholder="ID de la encuesta"
          required
        />
      </div>
      <button className="submit-button" type="button" onClick={handleDelete}>
        Eliminar
      </button>
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default EliminarEncuesta;
