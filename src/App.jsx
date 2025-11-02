import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/dashboard';
import Invoices from '@/pages/dashboard/invoices';
import Transactions from '@/pages/dashboard/transactions';
import Wallets from '@/pages/dashboard/wallets';
import Settings from '@/pages/dashboard/settings';
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import Sidebar from '@/components/layouts/Sidebar';
import InvoiceDetails from '@/pages/dashboard/invoice-details';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <main className="flex-1 ml-0 lg:ml-64 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/invoices/:id" element={<InvoiceDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;