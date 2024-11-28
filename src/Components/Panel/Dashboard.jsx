import React, { useState } from 'react';
import Sidebar from './components1/Sidebar/Sidebar';
import StatsCards from './components1/StatsCards/StatsCards';
import { AreaChart, DonutChart } from './components1/Charts/Charts';
import Header from './components1/Header/Header';
import Usuario from './components1/AdministrarUsuario/Usuario';
import VerUsuarios from './components1/AdministrarUsuario/VerUsuarios';
import CrearNuevoUsuario from './components1/AdministrarUsuario/CrearNuevoUsuario';
import VerEncuestas from './components1/AdministrarEncuesta/VerEncuestas';
import CrearEncuesta from './components1/AdministrarEncuesta/CrearEncuesta';
import SubirEncuesta from './components1/AdministrarEncuesta/SubirEncuesta';
import EliminarEncuesta from './components1/AdministrarEncuesta/EliminarEncuesta';
import Administrar from './components1/AdministrarEncuesta/AdministrarEncuesta';  // Agregado
import './Dashboard.css';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return (
          <>
            <h1 className="panel-title">Dashboard</h1>
            <StatsCards />
            <div className="panel-charts">
              <div className="panel-area-chart">
                <h2>AREA CHART</h2>
                <AreaChart />
              </div>
              <div className="panel-donut-chart">
                <h2>DONUT CHART</h2>
                <DonutChart />
              </div>
            </div>
          </>
        );
      
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
      
      // Resto de opciones...
      default:
        return <h1 className="panel-title">Select an Option</h1>;
    }
  };

  return (
    <div className="panel">
      <Sidebar onMenuClick={setSelectedOption} />
      <main className="panel-main">
        <Header />
        <div className="panel-dashboard">{renderContent()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
