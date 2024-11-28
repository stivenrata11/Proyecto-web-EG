import React, { useState } from 'react';
import './SubirEncuesta.css';

const SubirEncuesta = ({ onBack }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      // Aquí puedes agregar la lógica para subir el archivo
      alert("Encuesta subida con éxito!");
      onBack(); // Redirigir a la lista de encuestas
    } else {
      alert("Por favor, selecciona un archivo.");
    }
  };

  return (
    <div className="subir-encuesta-container">
      <h1 className="panel-title">Subir Encuesta</h1>
      <div className="form-group">
        <label>Seleccionar archivo</label>
        <input
          type="file"
          onChange={handleFileChange}
          required
        />
      </div>
      <button className="submit-button" type="button" onClick={handleSubmit}>
        Subir
      </button>
      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default SubirEncuesta;
