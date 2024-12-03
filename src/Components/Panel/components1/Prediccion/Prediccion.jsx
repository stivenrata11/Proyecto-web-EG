import React from 'react';
import './Prediccion.css';

const Prediccion = ({ onBack }) => {
  const handlePrediction = () => {
    // Aquí puedes agregar la lógica para generar la predicción
    alert("Predicción generada con éxito!");
  };

  return (
    <div className="prediccion-container">
      <h1 className="panel-title">Generar Predicción</h1>
      <button className="generate-button" onClick={handlePrediction}>
        Generar Predicción
      </button>
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default Prediccion;
