import React from 'react';
import Card from './Card';

const StatCard = ({ title, amount, subtitle, className = '' }) => {
  return (
    <Card className={className}>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-600 mb-1">{title}</span>
        <span className="text-2xl font-bold text-gray-800 mb-1">{amount}</span>
        {subtitle && (
          <span className="text-sm text-gray-500">{subtitle}</span>
        )}
      </div>
    </Card>
  );
};

export default StatCard;