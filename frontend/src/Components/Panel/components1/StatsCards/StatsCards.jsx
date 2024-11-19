import React from 'react';
import './StatsCards.css';

const statsData = [
  {
    title: "Active Sessions",
    value: "43,225",
    previousPeriod: "75%",
    icon: "📦",
    color: "var(--panel-primary)"
  },
  {
    title: "Total Revenue",
    value: "$73,265",
    previousPeriod: "88%",
    icon: "💰",
    color: "var(--panel-secondary)"
  },
  {
    title: "Average Price",
    value: "447",
    previousPeriod: "68%",
    icon: "💎",
    color: "var(--panel-tertiary)"
  },
  {
    title: "Add to Card",
    value: "86%",
    previousPeriod: "82%",
    icon: "🛒",
    color: "var(--panel-danger)"
  }
];

const StatsCards = () => {
  return (
    <div className="panel-stats-grid">
      {statsData.map((stat, index) => (
        <div key={index} className="panel-stat-card">
          <div className="panel-stat-icon" style={{ backgroundColor: stat.color }}>
            {stat.icon}
          </div>
          <div className="panel-stat-info">
            <h3>{stat.title}</h3>
            <div className="panel-stat-value">{stat.value}</div>
            <div className="panel-stat-period">
              Previous period
              <span className="panel-stat-percentage">{stat.previousPeriod}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;