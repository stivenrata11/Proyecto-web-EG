import React, { useState } from 'react';
import './CrearNuevoUsuario.css';

const CrearNuevoUsuario = ({ onBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Aquí puedes añadir la lógica para guardar el nuevo usuario
    alert("Usuario creado con éxito!");
    onBack(); // Redirigir a la lista de usuarios
  };

  return (
    <div className="crear-usuario-container">
      <h1 className="panel-title">Crear Nuevo Usuario</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del usuario"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email del usuario"
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

export default CrearNuevoUsuario;
