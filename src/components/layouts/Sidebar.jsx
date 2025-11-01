import React from 'react';
import { LayoutDashboard, FileText, Settings, Users, CreditCard } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Invoices' },
  { icon: CreditCard, label: 'Payments' },
  { icon: Users, label: 'Clients' },
  { icon: Settings, label: 'Settings' },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex justify-start">
          <img 
            src="/Logo.png" 
            alt="Maglo Logo" 
            className="align-left"
          />
        </div>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center px-6 py-3 text-left ${
                item.active 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span className="ml-3 font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};