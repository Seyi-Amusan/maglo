import React, { useEffect, useState } from 'react';
import Header from '@/components/layouts/Header';
import InvoiceTable from '@/components/invoices/Invoice-table';
import CreateInvoiceForm from '@/components/invoices/CreateInvoiceForm';
import PaymentsSummary from '@/components/invoices/PaymentsSummary';
import SearchBar from '@/components/ui/SearchBar';
import Button from '@/components/ui/Button';
import { useMockDatabase } from '@/store/mockDatabase';

const Invoices = () => {
  const { 
    invoices, 
    loading, 
    filter, 
    fetchInvoices, 
    setFilter, 
    getFilteredInvoices,
    getFinancialSummary,
    resetData 
  } = useMockDatabase();
  
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const handleCreateSuccess = () => {
    setShowCreateForm(false);
  };

  const filteredInvoices = getFilteredInvoices();
  const financialSummary = getFinancialSummary();

  // Search functionality
  const searchedInvoices = filteredInvoices.filter(invoice =>
    invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.clientEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <Header title="Invoices">
        <div className="flex gap-2">
          <Button 
            onClick={() => setShowCreateForm(!showCreateForm)}
            className= "bg-lime-300 p-3 rounded-lg"
          >
            {showCreateForm ? 'Cancel' : 'New Invoice'}
          </Button>
          {/* <Button 
            onClick={resetData}
            className="bg-lime-300 p-3 rounded-lg"
            title="Reset to initial mock data"
          >
            Reset Data
          </Button> */}
        </div>
      </Header>

      {/* Payments Summary */}
      {/* <PaymentsSummary financialSummary={financialSummary} /> */}

      {/* Create Invoice Form */}
      {showCreateForm && (
        <CreateInvoiceForm onSuccess={handleCreateSuccess} />
      )}

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={` px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-lime-300' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All ({financialSummary.totalInvoicesCount})
          </button>
          <button
            onClick={() => setFilter('paid')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'paid' 
                ? 'bg-lime-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Paid ({financialSummary.paidInvoicesCount})
          </button>
          <button
            onClick={() => setFilter('unpaid')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'unpaid' 
                ? 'bg-lime-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Unpaid ({financialSummary.unpaidInvoicesCount})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'pending' 
                ? 'bg-lime-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Pending ({financialSummary.pendingInvoicesCount})
          </button>
        </div>
        
        <div className="w-full sm:w-auto">
          <SearchBar 
            placeholder="Search invoices..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Invoice Table */}
      <InvoiceTable 
        invoices={searchedInvoices} 
        loading={loading}
        onRefresh={fetchInvoices}
      />
    </div>
  );
};

export default Invoices;