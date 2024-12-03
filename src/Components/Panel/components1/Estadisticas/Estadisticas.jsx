import React from 'react';
import './Estadisticas.css';

const Estadisticas = ({ onBack }) => {
  // Datos de ejemplo
  const totalSurveys = 10;
  const completedSurveys = 7;
  const pendingSurveys = 3;

  return (
    <div className="estadisticas-container">
      <h1 className="panel-title">Estadísticas de Encuestas</h1>
      <div className="stats-overview">
        <div className="stat-card">
          <h2>Total de Encuestas</h2>
          <p>{totalSurveys}</p>
        </div>
        <div className="stat-card">
          <h2>Encuestas Completadas</h2>
          <p>{completedSurveys}</p>
        </div>
        <div className="stat-card">
          <h2>Encuestas Pendientes</h2>
          <p>{pendingSurveys}</p>
        </div>
      </div>
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default Estadisticas;
