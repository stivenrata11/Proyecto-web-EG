import React, { useEffect, useState } from "react";
import "./Notificaciones.css";

const Notificaciones = ({ onBack, history, onClearHistory }) => {
  const [search, setSearch] = useState("");
  const [filteredHistory, setFilteredHistory] = useState(history);

  useEffect(() => {
    setFilteredHistory(
      history.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, history]);

  return (
    <div className="notificaciones-container">
      <h1 className="panel-title">Historial de Acciones</h1>
      
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar en el historial"
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Lista de historial */}
      <ul className="historial-list">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((action, index) => (
            <li key={index} className="historial-item">
              {action}
            </li>
          ))
        ) : (
          <li className="historial-item">No hay acciones registradas.</li>
        )}
      </ul>

      {/* Botones */}
      <div className="buttons-container">
        <button className="clear-button" onClick={onClearHistory}>
          Borrar Historial
        </button>
        <button className="back-button" onClick={onBack}>
          Atrás
        </button>
      </div>
    </div>
  );
};

export default Notificaciones;
