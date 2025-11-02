import React from 'react';
import Header from '@/components/layouts/Header';
import Sidebar from '@/components/layouts/Sidebar';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* <Sidebar /> */}
      <div className="flex-1 ml-0 lg:ml-64">
        <div className="p-6">
          <Header title="Settings" />
          <p className="text-gray-500">Settings page content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;