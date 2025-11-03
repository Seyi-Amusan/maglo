import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useAuthStore } from '@/store/authStore';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
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
  const { checkAuth, isAuthenticated } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <Toaster position="top-right" />
      <div className="flex min-h-screen">
        {isAuthenticated && <Sidebar />}
        <main className={`flex-1 bg-gray-50 ${isAuthenticated ? 'ml-0 lg:ml-64' : ''}`}>
          <Routes>
            {/* Public routes */}
            <Route 
              path="/auth/login" 
              element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} 
            />
            <Route 
              path="/auth/signup" 
              element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" replace />} 
            />
            
            {/* Protected routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/invoices" element={
              <ProtectedRoute>
                <Invoices />
              </ProtectedRoute>
            } />
            <Route path="/transactions" element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            } />
            <Route path="/wallets" element={
              <ProtectedRoute>
                <Wallets />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="/invoices/:id" element={
              <ProtectedRoute>
                <InvoiceDetails />
              </ProtectedRoute>
            } />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;