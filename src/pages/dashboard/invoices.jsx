import React from 'react';
import Header from '../../components/layouts/Header';
import InvoiceTable from '../../components/invoices/InvoiceTable';

const Invoices = () => {
  // This would fetch all invoices from your store
  const allInvoices = [
    // ... more invoice data
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header title="Invoices" />
      <InvoiceTable invoices={allInvoices} />
    </div>
  );
};

export default Invoices;