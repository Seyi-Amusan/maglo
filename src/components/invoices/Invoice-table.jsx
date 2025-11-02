import React from 'react';
import Card from '@/components/ui/Card';

const InvoiceTable = ({ invoices = [] }) => { // Add default empty array
  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Unpaid':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Fallback avatar component for missing images
  const Avatar = ({ src, alt, className = "" }) => {
    if (src) {
      return (
        <img 
          src={src} 
          alt={alt} 
          className={`w-8 h-8 rounded-full object-cover ${className}`}
        />
      );
    }
    
    // Fallback with initials
    const initials = alt?.split(' ').map(n => n[0]).join('').toUpperCase() || 'NA';
    return (
      <div className={`w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium ${className}`}>
        {initials.slice(0, 2)}
      </div>
    );
  };

  // Check if invoices is empty
  if (!invoices || invoices.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center text-gray-500 py-8">
          <p>No invoices found</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">NAME/CLIENT</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">DATE</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">ORDERSTYPE</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">AMOUNT</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">STATUS</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <React.Fragment key={invoice.id}>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar src={invoice.avatar} alt={invoice.clientName} />
                      <div>
                        <div className="font-medium text-gray-800">{invoice.clientName}</div>
                        <div className="text-sm text-gray-500">{invoice.invoiceNumber}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-gray-800">{invoice.date}</div>
                    <div className="text-sm text-gray-500">{invoice.time}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{invoice.ordersType}</td>
                  <td className="py-4 px-6 font-medium text-gray-800">{invoice.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600 font-bold text-lg">
                      ...
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default InvoiceTable;