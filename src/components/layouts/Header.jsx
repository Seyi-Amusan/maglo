import React from 'react';

const Header = ({ title, children }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center space-x-4">
        {children}
      </div>
    </header>
  );
};

export default Header;