import React from "react";
import "./Ayuda.css";

const Ayuda = ({ onBack }) => {
  return (
    <div className="ayuda-container">
      <h1 className="panel-title">Ayuda</h1>
      <div className="ayuda-content">
        <section>
          <h2>¿Cómo usar el Dashboard?</h2>
          <p>
            El Dashboard está diseñado para facilitar la administración de encuestas, usuarios y visualización de datos. Puedes navegar por las opciones en el menú lateral para acceder a diferentes funcionalidades.
          </p>
        </section>

        <section>
          <h2>¿Qué puedes hacer en el Dashboard?</h2>
          <ul>
            <li><strong>Administrar Usuarios:</strong> Agregar, ver y eliminar usuarios.</li>
            <li><strong>Administrar Encuestas:</strong> Subir, crear, eliminar y visualizar encuestas.</li>
            <li><strong>Estadísticas:</strong> Generar gráficos y estadísticas basadas en los datos cargados.</li>
            <li><strong>Configuración:</strong> Personalizar la visualización del Dashboard.</li>
            <li><strong>Notificaciones:</strong> Ver el historial de actividades realizadas.</li>
          </ul>
        </section>

        <section>
          <h2>¿Qué tipo de archivos se pueden subir?</h2>
          <p>
            Actualmente, solo se permiten archivos en formato <strong>.csv</strong> o <strong>.xlsx</strong>. Asegúrate de que el archivo cumpla con el formato esperado para garantizar una correcta carga de datos.
          </p>
        </section>

        <section>
          <h2>¿Cómo contactar soporte?</h2>
          <p>
            Si necesitas ayuda adicional, puedes contactar al administrador del sistema o escribir un correo a <a href="mailto:soporte@tuapp.com">soporte@tuapp.com</a>.
          </p>
        </section>
      </div>

      <button className="back-button" onClick={onBack}>
        Atrás
      </button>
    </div>
  );
};

export default Ayuda;
