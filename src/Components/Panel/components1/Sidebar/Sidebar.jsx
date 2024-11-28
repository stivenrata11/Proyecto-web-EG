import React from 'react';
import './Sidebar.css';

const menuItems = [
  { icon: "👤", label: "Administrar Usuarios" },
  { icon: "📝", label: "Administrar Encuestas" },
  { icon: "📈", label: "Estadísticas" },
  { icon: "🔮", label: "Predicción" },
  { icon: "🏫", label: "Facultades" },
  { icon: "🔔", label: "Notificaciones" },
  { icon: "⚙️", label: "Configuración" },
  { icon: "❓", label: "Ayuda" }
];

const Sidebar = ({ onMenuClick }) => {
  return (
    <aside className="panel-sidebar">
      <div className="panel-logo">
        <span>Panel de Control</span>
      </div>
      <nav className="panel-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="panel-menu-item"
            onClick={() => onMenuClick(item.label)}
          >
            <span className="panel-menu-icon">{item.icon}</span>
            <span className="panel-menu-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;