import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';

const invoiceData = [
  {
    id: 1,
    client: 'Gadget Gallery LTD',
    invoiceNumber: 'MGLS24874',
    date: '14 Apr 2022',
    time: 'at 8:00 PM',
    orders: 20,
    amount: 420.84,
    status: 'pending'
  },
  {
    id: 2,
    client: 'Gadget Gallery LTD',
    invoiceNumber: 'MGLS24875',
    date: '14 Apr 2022',
    time: 'at 8:00 PM',
    orders: 20,
    amount: 420.84,
    status: 'pending'
  },
  {
    id: 3,
    client: 'Gadget Gallery LTD',
    invoiceNumber: 'MGLS24876',
    date: '14 Apr 2022',
    time: 'at 8:00 PM',
    orders: 20,
    amount: 420.84,
    status: 'pending'
  },
];

export const InvoiceTable = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Table Header with "View All" */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Recent Invoice</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-6 font-medium text-gray-500">NAME/CLIENT</th>
              <th className="text-left py-3 px-6 font-medium text-gray-500">DATE</th>
              <th className="text-left py-3 px-6 font-medium text-gray-500">ORDER/STYPE</th>
              <th className="text-left py-3 px-6 font-medium text-gray-500">AMOUNT</th>
              <th className="text-left py-3 px-6 font-medium text-gray-500">STATUS</th>
              <th className="text-left py-3 px-6 font-medium text-gray-500">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                <td className="py-4 px-6">
                  <div>
                    <div className="font-semibold">{invoice.client}</div>
                    <div className="text-sm text-gray-500">Inv: {invoice.invoiceNumber}</div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div>
                    <div className="font-semibold">{invoice.date}</div>
                    <div className="text-sm text-gray-500">{invoice.time}</div>
                  </div>
                </td>
                <td className="py-4 px-6">{invoice.orders}</td>
                <td className="py-4 px-6 font-semibold">${invoice.amount.toFixed(2)}</td>
                <td className="py-4 px-6">
                  <Badge variant="pending">Pending</Badge>
                </td>
                <td className="py-4 px-6">
                  <div className="flex justify-center">
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};