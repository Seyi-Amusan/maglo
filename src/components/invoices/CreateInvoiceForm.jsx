import React, { useState } from 'react';
import { useInvoiceStore } from '@/store/invoiceStore';
import { toast } from 'sonner';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const CreateInvoiceForm = ({ onSuccess }) => {
  const { createInvoice } = useInvoiceStore();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    amount: '',
    vat: '7.5', // Default VAT rate
    dueDate: '',
    status: 'unpaid'
  });

  // Calculate derived values
  const vatAmount = formData.amount ? (parseFloat(formData.amount) * parseFloat(formData.vat) / 100) : 0;
  const total = formData.amount ? (parseFloat(formData.amount) + vatAmount) : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const invoiceData = {
        ...formData,
        amount: parseFloat(formData.amount),
        vat: parseFloat(formData.vat),
        vatAmount,
        total,
        createdAt: new Date().toISOString(),
        invoiceNumber: `INV-${Date.now()}`
      };

      await createInvoice(invoiceData);
      toast.success('Invoice created successfully!');
      
      // Reset form
      setFormData({
        clientName: '',
        clientEmail: '',
        amount: '',
        vat: '7.5',
        dueDate: '',
        status: 'unpaid'
      });
      
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error('Failed to create invoice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Create New Invoice</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Name *
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Email *
            </label>
            <input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="client@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (₦) *
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              VAT (%) *
            </label>
            <input
              type="number"
              name="vat"
              value={formData.vat}
              onChange={handleChange}
              required
              min="0"
              max="100"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date *
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
        </div>

        {/* Calculation Preview */}
        {formData.amount && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Calculation Preview</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Amount:</span>
                <div className="font-medium">₦{parseFloat(formData.amount).toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600">VAT ({formData.vat}%):</span>
                <div className="font-medium">₦{vatAmount.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600">Total:</span>
                <div className="font-medium text-green-600">₦{total.toLocaleString()}</div>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          {loading ? 'Creating Invoice...' : 'Create Invoice'}
        </Button>
      </form>
    </Card>
  );
};

export default CreateInvoiceForm;