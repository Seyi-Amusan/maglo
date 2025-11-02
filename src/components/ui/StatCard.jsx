import React from 'react';

const StatCard = ({ title, amount, subtitle, icon, className = '' }) => {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {icon && (
        <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-600 mb-2">{title}</span>
        <span className="text-2xl font-bold text-gray-800">{amount}</span>
        {subtitle && (
          <span className="text-sm text-gray-500 mt-1">{subtitle}</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;