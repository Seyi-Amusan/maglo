import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Apr 14', income: 5500, expenses: 5000 },
  { name: 'Apr 15', income: 4000, expenses: 3200 },
  { name: 'Apr 16', income: 6000, expenses: 4100 },
  { name: 'Apr 17', income: 5200, expenses: 3800 },
  { name: 'Apr 18', income: 4800, expenses: 4200 },
  { name: 'Apr 19', income: 5100, expenses: 3600 },
  { name: 'Apr 20', income: 4700, expenses: 3900 },
];

const WorkingCapitalChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="income" 
          stroke="#BEF264" 
          strokeWidth={2}
          dot={{ fill: '#3B82F6', strokeWidth: 1, r: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey="expenses" 
          stroke="#16A34A" 
          strokeWidth={2}
          dot={{ fill: '#EF4444', strokeWidth: 1, r: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WorkingCapitalChart; // Change to default export