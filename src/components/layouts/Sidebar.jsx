import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "@/assets/Logo.png";
import { Menu, X, LogOut, Power } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';


const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, user } = useAuthStore();

  const currentPath = location.pathname;

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/invoices', label: 'Invoices' },
    { path: '/transactions', label: 'Transactions' },
    { path: '/wallets', label: 'My Wallets' },
    { path: '/settings', label: 'Settings' },
  ];

  const handleLogout = async () => {
    try {
      setIsMobileMenuOpen(false);
      
      await logout();
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-gray-200/50 hover:bg-white/90 transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      {/* Sidebar */}
<aside className={`
  fixed lg:static inset-0 z-40
  w-64 bg-white shadow-sm h-screen p-4 flex flex-col
  transform transition-transform duration-300 ease-in-out
  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
`}>
          {/* Logo Section */}
          <div className="mb-8 mt-4 lg:mt-0">
            <img 
              src={logo} 
              alt="Magic Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Navigation - This will take up remaining space */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      currentPath === item.path
                          ? ' bg-lime-300 border border-blue-100'
                          : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        {/* Mobile Logout Section - Close to last link */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            {/* User Info */}
            <div className="px-3 py-2 mb-3">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.name || user?.email || 'User'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.email}
              </p>
            </div>

            {/* Logout Button with Red Accent */}
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-red-400 hover:text-black rounded-lg transition-all duration-200 group"
            >
              <Power className="h-4 w-4 mr-3" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-100/50 backdrop-blur-sm z-3"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;