import React from 'react';
import './Sidebar.css';

const menuItems = [
  { icon: "📊", label: "Dashboard"},
  { icon: "📧", label: "Email" },
  { icon: "📅", label: "Calendar" },
  { icon: "📄", label: "Pages" },
  { icon: "🎨", label: "UI Elements" },
  { icon: "⚡", label: "Advanced UI" },
  { icon: "📝", label: "Forms"},
  { icon: "📈", label: "Charts" },
  { icon: "📋", label: "Tables" },
  { icon: "🎯", label: "Icons" },
  { icon: "🗺️", label: "Maps" },
  { icon: "📚", label: "Multi Level" }
];

const Sidebar = () => {
  return (
    <aside className="panel-sidebar">
      <div className="panel-logo">
        <span>JASSA</span>
      </div>
      <nav className="panel-menu">
        {menuItems.map((item, index) => (
          <div key={index} className="panel-menu-item">
            <span className="panel-menu-icon">{item.icon}</span>
            <span className="panel-menu-label">{item.label}</span>
            {item.badge && <span className="panel-menu-badge">{item.badge}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;