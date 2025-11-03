import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useMockDatabase } from '@/store/mockDatabase';

const InvoiceDetails = () => {
  const { id } = useParams(); // Get invoice ID from URL
  const navigate = useNavigate();
  const { invoices } = useMockDatabase();

  // Find the specific invoice by ID
  const invoice = invoices.find(inv => inv.id === id);

  // If invoice not found, show error and redirect
  if (!invoice) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <Header title="Invoice Not Found" />
        <Card className="p-6 text-center">
          <p className="text-gray-600 mb-4">The requested invoice could not be found.</p>
          <Button onClick={() => navigate('/invoices')} className="bg-blue-600 hover:bg-blue-700 text-white">
            Back to Invoices
          </Button>
        </Card>
      </div>
    );
  }

  // Format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Calculate due date (7 days from creation for demo)
  const dueDate = new Date(invoice.createdAt);
  dueDate.setDate(dueDate.getDate() + 7);

  // Mock invoice items based on the actual invoice data
  const invoiceItems = [
    {
      id: 1,
      item: `${invoice.clientName} Service`,
      orderType: invoice.ordersType || '01',
      rate: `$${parseFloat(invoice.amount).toFixed(2)}`,
      amount: `$${parseFloat(invoice.amount).toFixed(2)}`
    },
    {
      id: 2,
      item: 'VAT Charges',
      orderType: 'Tax',
      rate: `${invoice.vat}%`,
      amount: `$${parseFloat(invoice.vatAmount).toFixed(2)}`
    }
  ];

  const subtotal = parseFloat(invoice.amount);
  const total = parseFloat(invoice.total);

  return (
    <div className="p-4 lg:p-6 max-w-6xl mx-auto">
      <Header title={`Invoice: ${invoice.invoiceNumber}`} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Invoice Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Company Info */}
          <Card className="p-6 bg-linear-to-b from-gray-800 to-gray-700 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-neutral-100">Maglo</h1>
                <p className="text-neutral-100">sales@maglo.com</p>
                <p className="text-neutral-100 text-sm mt-2">
                  1333 Grey Fox Farm Road Houston, TX 77060<br />
                  Bloomfield Hills, Michigan(M), 48301
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-neutral-100">Invoice Number</div>
                <div className="text-lg font-bold text-neutral-100">{invoice.invoiceNumber}</div>
                <div className="text-sm text-neutral-100 mt-2">
                  Issued Date: {formatDate(invoice.createdAt)}<br />
                  Due Date: {formatDate(dueDate)}
                </div>
              </div>
            </div>
          </Card>

          {/* Billed To */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Billed to</h3>
            <div className="text-gray-600">
              <p className="font-medium">{invoice.clientName}</p>
              <p className="text-sm mt-1">{invoice.clientEmail}</p>
              <p className="text-sm mt-1">3471 Rainy Day Drive Needham, MA Q2192</p>
            </div>
          </Card>

          {/* Item Details */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Item Details</h3>
            <p className="text-gray-600 mb-6">Invoice details for {invoice.clientName}</p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">ITEM</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">ORDER/TYPE</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">RATE</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-800">{item.item}</td>
                      <td className="py-3 px-4 text-gray-600">{item.orderType}</td>
                      <td className="py-3 px-4 text-gray-600">{item.rate}</td>
                      <td className="py-3 px-4 text-gray-800 font-medium">{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center max-w-xs ml-auto">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center max-w-xs ml-auto">
                <span className="text-gray-600">VAT ({invoice.vat}%)</span>
                <span className="font-medium">${parseFloat(invoice.vatAmount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center max-w-xs ml-auto border-t border-gray-200 pt-3">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Sidebar Info */}
        <div className="space-y-6">
          {/* Basic Info */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Info</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600">Invoice Date</div>
                <div className="font-medium">{formatDate(invoice.createdAt)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Due Date</div>
                <div className="font-medium">{formatDate(dueDate)}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Status</div>
                <div className={`font-medium ${
                  invoice.status === 'paid' ? 'text-green-600' : 
                  invoice.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </div>
              </div>
              <Button className="w-full bg-lime-300 p-3 rounded-lg">
                Send Invoice
              </Button>
            </div>
          </Card>

          {/* Client Details */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Details</h3>
            <div className="space-y-2">
              <div className="font-medium">{invoice.clientName}</div>
              <div className="text-sm text-gray-600">{invoice.clientEmail}</div>
              <div className="text-sm text-gray-500 mt-2">
                Client since {formatDate(invoice.createdAt)}
              </div>
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-lime-300 p-3 rounded-lg">
                Download PDF
              </Button>
              <Button 
                onClick={() => navigate('/invoices')}
                className="w-full bg-lime-300  p-3 rounded-lg"
              >
                Back to Invoices
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;