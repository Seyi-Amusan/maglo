import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Apr 14', income: 5500, expenses: 5000 },
  { name: 'Apr 15', income: 4000, expenses: 3200 },
  { name: 'Apr 16', income: 6000, expenses: 4100 },
  { name: 'Apr 17', income: 5200, expenses: 3800 },
  { name: 'Apr 18', income: 4800, expenses: 4200 },
  { name: 'Apr 19', income: 5100, expenses: 3600 },
  { name: 'Apr 20', income: 4700, expenses: 3900 },
];

export const WorkingCapitalChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        <Bar dataKey="income" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="#EF4444" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};