import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="panel-header">
      <div className="panel-search">
        <input type="text" placeholder="Search.." />
      </div>
      <div className="panel-header-right">
        <select className="panel-language">
          <option value="en">English</option>
        </select>
        <div className="panel-notification">
          <span className="panel-badge">3</span>
        </div>
        <div className="panel-profile">
          <img src="/api/placeholder/32/32" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;