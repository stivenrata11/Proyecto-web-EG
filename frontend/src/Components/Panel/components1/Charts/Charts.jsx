import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import './Charts.css';

export const AreaChart = () => {
  const data = [
    { year: '2013', a: 50, b: 80, c: 20 },
    { year: '2014', a: 120, b: 100, c: 60 },
    { year: '2015', a: 180, b: 160, c: 120 },
    { year: '2016', a: 100, b: 200, c: 150 },
    { year: '2017', a: 250, b: 280, c: 200 },
    { year: '2018', a: 180, b: 220, c: 180 },
    { year: '2019', a: 140, b: 170, c: 150 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsAreaChart data={data}>
        <XAxis dataKey="year" stroke="var(--panel-text-secondary)" />
        <YAxis stroke="var(--panel-text-secondary)" />
        <Area type="monotone" dataKey="a" stackId="1" stroke="var(--panel-primary)" fill="var(--panel-primary)" fillOpacity={0.5} />
        <Area type="monotone" dataKey="b" stackId="1" stroke="var(--panel-secondary)" fill="var(--panel-secondary)" fillOpacity={0.5} />
        <Area type="monotone" dataKey="c" stackId="1" stroke="var(--panel-tertiary)" fill="var(--panel-tertiary)" fillOpacity={0.5} />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export const DonutChart = () => {
  const data = [
    { name: 'Store A', value: 45 },
    { name: 'Store B', value: 30 },
    { name: 'Store C', value: 25 }
  ];

  const COLORS = ['var(--panel-primary)', 'var(--panel-secondary)', 'var(--panel-tertiary)'];

  return (
    <div className="panel-donut-container">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="panel-donut-label">
        <h3>In-Store Sales</h3>
        <div className="panel-donut-value">30</div>
      </div>
    </div>
  );
};