import React from 'react';
import './VerEncuestas.css';

const VerEncuestas = ({ onBack }) => {
  // Datos de ejemplo de encuestas
  const surveys = [
    { id: 1, title: "Encuesta de Satisfacción" },
    { id: 2, title: "Encuesta de Salud" },
    { id: 3, title: "Encuesta de Opinión Pública" },
  ];

  return (
    <div className="ver-encuestas-container">
      <h1 className="panel-title">Lista de Encuestas</h1>
      <table className="ver-encuestas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map(survey => (
            <tr key={survey.id}>
              <td>{survey.id}</td>
              <td>{survey.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default VerEncuestas;
