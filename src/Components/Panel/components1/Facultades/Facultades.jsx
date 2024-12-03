import React, { useState } from "react";
import "./Facultades.css";

const Facultades = ({ onBack }) => {
  const data = [
    {
      facultad: "Facultad de Ingeniería",
      escuelas: ["Ingeniería Civil", "Ingeniería de Sistemas", "Ingeniería Electrónica"],
    },
    {
      facultad: "Facultad de Ciencias Sociales",
      escuelas: ["Sociología", "Antropología", "Historia"],
    },
    {
      facultad: "Facultad de Ciencias",
      escuelas: ["Matemáticas", "Física", "Química"],
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedFacultad, setSelectedFacultad] = useState(null);

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredFacultades = data.filter((item) =>
    item.facultad.toLowerCase().includes(search.toLowerCase())
  );

  const filteredEscuelas = selectedFacultad
    ? selectedFacultad.escuelas.filter((escuela) =>
        escuela.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="facultades-container">
      <h1 className="panel-title">Facultades y Escuelas Profesionales</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar facultad o escuela profesional"
        className="search-bar"
        value={search}
        onChange={handleSearchChange}
      />

      {/* Lista de Facultades */}
      {!selectedFacultad && (
        <div className="facultades-list">
          {filteredFacultades.map((item, index) => (
            <div key={index} className="facultad-card">
              <h2>{item.facultad}</h2>
              <button
                className="filter-button"
                onClick={() => setSelectedFacultad(item)}
              >
                Ver Escuelas
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Lista de Escuelas Profesionales */}
      {selectedFacultad && (
        <div className="escuelas-list">
          <h2>{selectedFacultad.facultad}</h2>
          <ul>
            {filteredEscuelas.map((escuela, index) => (
              <li key={index}>{escuela}</li>
            ))}
          </ul>
          <button className="back-button" onClick={() => setSelectedFacultad(null)}>
            Volver a Facultades
          </button>
        </div>
      )}

      {/* Botón Atrás */}
      {!selectedFacultad && (
        <button className="back-button" onClick={onBack}>
          Atrás
        </button>
      )}
    </div>
  );
};

export default Facultades;
