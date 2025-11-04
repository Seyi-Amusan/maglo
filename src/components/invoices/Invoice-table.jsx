import React from 'react';
import { Link } from 'react-router-dom';
import { useMockDatabase } from '@/store/mockDatabase';
import { toast } from 'sonner';
import Card from '@/components/ui/Card';
import { useState } from 'react';

const InvoiceTable = ({ invoices = [], loading = false, onRefresh, showDueDate = false }) => {
  const { updateInvoice, deleteInvoice } = useMockDatabase();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Unpaid':
      case 'unpaid':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fallback avatar component for missing images
  const Avatar = ({ src, alt, className = "" }) => {
    const [error, setError] = useState(false);
  
    const initials =
      alt?.split(" ").map(n => n[0]).join("").toUpperCase() || "NA";
  
    // only render <img> if src is valid and not broken
    if (src && src.trim() !== "" && !error) {
      return (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)} // triggers fallback if image fails to load
          className={`w-8 h-8 rounded-full object-cover ${className}`}
        />
      );
    }
  
    // fallback with initials
    return (
      <div
        className={`w-8 h-8 rounded-full bg-lime-300 flex items-center justify-center text-white text-xs font-medium ${className}`}
      >
        {initials.slice(0, 2)}
      </div>
    );
  };

  const handleMarkAsPaid = async (invoiceId, currentStatus) => {
    if (currentStatus === 'paid') {
      toast.info('Invoice is already paid');
      return;
    }

    try {
      await updateInvoice(invoiceId, { status: 'paid' });
      toast.success('Invoice marked as paid!');
      if (onRefresh) onRefresh();
    } catch (error) {
      toast.error('Failed to update invoice');
    }
  };

  const handleDelete = async (invoiceId, clientName) => {
    if (window.confirm(`Are you sure you want to delete invoice for ${clientName}?`)) {
      try {
        await deleteInvoice(invoiceId);
        toast.success('Invoice deleted successfully!');
        if (onRefresh) onRefresh();
      } catch (error) {
        toast.error('Failed to delete invoice');
      }
    }
  };

  // Check if invoices is empty
  if (!invoices || invoices.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center text-gray-500 py-8">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2">Loading invoices...</span>
            </div>
          ) : (
            <div>
              <p className="text-lg mb-2">No invoices found</p>
              <p className="text-sm">Create your first invoice to get started</p>
            </div>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">NAME/CLIENT</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">DATE</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">ORDER TYPE</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">AMOUNT</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">STATUS</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr 
                key={invoice.id} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Avatar src={invoice.avatar} alt={invoice.clientName} />
                    <div>
                      <div className="font-medium text-gray-800">{invoice.clientName}</div>
                      <div className="text-sm text-gray-500">{invoice.invoiceNumber}</div>
                      <div className="text-xs text-gray-400">{invoice.clientEmail}</div>
                    </div>
                  </div>
                </td>
                
                <td className="py-4 px-6">
                  <div className="font-medium text-gray-800">
                    {new Date(invoice.createdAt || invoice.date).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(invoice.createdAt || invoice.date).toLocaleTimeString()}
                  </div>
                </td>
                
                <td className="py-4 px-6 text-gray-600">
                  {invoice.ordersType || 'Standard'}
                </td>
                
                <td className="py-4 px-6">
                  <div className="font-medium text-gray-800">
                    ${parseFloat(invoice.total || invoice.amount).toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    VAT: ${parseFloat(invoice.vatAmount || 0).toLocaleString()}
                  </div>
                </td>
                
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-2 items-center"> {/* Added items-center */}
                    <span className={`w-fit text-center rounded-lg text-xs font-medium py-2 px-4 ${getStatusColor(invoice.status)}`}>
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                    
                    {invoice.status !== 'paid' && (
                      <button
                        onClick={() => handleMarkAsPaid(invoice.id, invoice.status)}
                        className="text-green-600 hover:text-green-800 text-xs font-medium underline"
                      >
                        Mark as Paid
                      </button>
                    )}
                  </div>
                </td>
                
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    {/* View Details */}
                    <Link 
                      to={`/invoices/${invoice.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      title="View Details"
                    >
                      View
                    </Link>
                    
                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(invoice.id, invoice.clientName)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                      title="Delete Invoice"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-sm text-gray-600">Updating...</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default InvoiceTable;