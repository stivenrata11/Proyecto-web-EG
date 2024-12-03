import React, { useState } from 'react';
import Sidebar from './components1/Sidebar/Sidebar';
import Header from './components1/Header/Header';
import Usuario from './components1/AdministrarUsuario/Usuario';
import VerUsuarios from './components1/AdministrarUsuario/VerUsuarios';
import CrearNuevoUsuario from './components1/AdministrarUsuario/CrearNuevoUsuario';
import VerEncuestas from './components1/AdministrarEncuesta/VerEncuestas';
import CrearEncuesta from './components1/AdministrarEncuesta/CrearEncuesta';
import SubirEncuesta from './components1/AdministrarEncuesta/SubirEncuesta';
import EliminarEncuesta from './components1/AdministrarEncuesta/EliminarEncuesta';
import Administrar from './components1/AdministrarEncuesta/AdministrarEncuesta'; 
import Estadisticas from './components1/Estadisticas/Estadisticas';
import Prediccion from './components1/Prediccion/Prediccion';
import Facultades from './components1/Facultades/Facultades';
import Notificaciones from './components1/Notificacion/Notificaciones';
import Configuracion from './components1/Configuracion/Configuracion';
import Ayuda from './components1/Ayuda/Ayuda';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [history, setHistory] = useState([]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setHistory((prevHistory) => [...prevHistory, `Seleccionó: ${option}`]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const renderContent = () => {
    switch (selectedOption) {
      
      // Opciones de Administrar Usuarios
      case "Administrar Usuarios":
        return (
          <Usuario
            onOptionSelect={(option) => setSelectedOption(option)}
          />
        );
      case "Ver Usuarios":
        return <VerUsuarios onBack={() => setSelectedOption("Administrar Usuarios")} />;
      case "Crear Nuevo Usuario":
        return <CrearNuevoUsuario onBack={() => setSelectedOption("Ver Usuarios")} />;

      // Opciones de Administrar Encuestas
      case "Administrar Encuestas":
        return (
          <Administrar
            onOptionSelect={(option) => setSelectedOption(option)}
          />
        );
      case "Ver Encuestas":
        return <VerEncuestas onBack={() => setSelectedOption("Administrar Encuestas")} />;
      case "Crear Nueva Encuesta":
        return <CrearEncuesta onBack={() => setSelectedOption("Ver Encuestas")} />;
      case "Subir Encuesta":
        return <SubirEncuesta onBack={() => setSelectedOption("Ver Encuestas")} />;
      case "Eliminar Encuesta":
        return <EliminarEncuesta onBack={() => setSelectedOption("Ver Encuestas")} />;
      

      // Opción de Estadísticas
      case "Estadísticas":
        return <Estadisticas onBack={() => setSelectedOption("Dashboard")} />;


      // Opción de Predicción
      case "Predicción":
        return <Prediccion onBack={() => setSelectedOption("Dashboard")} />;

      // Opcion de Facultades
      case "Facultades":
        return <Facultades onBack={() => setSelectedOption("Dashboard")} />;

      // Opcion de Notificacion
      case "Notificaciones":
        return (
          <Notificaciones
            history={history}
            onBack={() => setSelectedOption("Dashboard")}
            onClearHistory={clearHistory}
          />
        );

      
      // Opcion de Configuracion
      case "Configuración":
        return <Configuracion onBack={() => setSelectedOption("Dashboard")} />;


      // Opcion de Ayuda
      case "Ayuda":
        return <Ayuda onBack={() => setSelectedOption("Dashboard")} />;


      
      default:
        return <h1 className="panel-title">Select an Option</h1>;
    }
  };

  return (
    <div className="panel">
      <Sidebar onMenuClick={handleOptionSelect} />
      <main className="panel-main">
        <Header />
        <div className="panel-dashboard">{renderContent()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
