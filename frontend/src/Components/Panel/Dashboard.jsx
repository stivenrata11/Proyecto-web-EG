import React from 'react';
import Sidebar from './components1/Sidebar/Sidebar';
import StatsCards from './components1/StatsCards/StatsCards';
import { AreaChart, DonutChart } from './components1/Charts/Charts';
import Header from './components1/Header/Header';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="panel">
      <Sidebar />
      <main className="panel-main">
        <Header />
        <div className="panel-dashboard">
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;