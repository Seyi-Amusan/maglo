import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "@/assets/Logo.png";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/invoices', label: 'Invoices' },
    { path: '/transactions', label: 'Transactions' },
    { path: '/wallets', label: 'My Wallets' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm h-screen p-4 fixed">
      <div className="mb-8">
        <img 
          src={logo} 
          alt="Magic Logo" 
          className="h-8 w-auto"
        />
      </div>
      
      <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  currentPath === item.path
                    ? 'text-blue-600 bg-blue-50 border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;