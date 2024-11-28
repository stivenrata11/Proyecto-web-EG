import React from 'react';
import './VerUsuarios.css';

const VerUsuarios = ({ onBack }) => {
  // Datos de ejemplo de usuarios
  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com" },
    { id: 2, name: "Ana García", email: "ana@example.com" },
    { id: 3, name: "Carlos Martínez", email: "carlos@example.com" },
  ];

  return (
    <div className="ver-usuarios-container">
      <h1 className="panel-title">Lista de Usuarios</h1>
      <table className="ver-usuarios-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
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

export default VerUsuarios;
