import React from 'react';
import Header from '@/components/layouts/Header';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const InvoiceDetails = () => {
  const invoiceItems = [
    {
      id: 1,
      item: 'Iphone 13 Pro Max',
      orderType: '01',
      rate: '$244',
      amount: '$244.00'
    },
    {
      id: 2,
      item: 'Netflix Subscription',
      orderType: '01',
      rate: '$420',
      amount: '$420.00'
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Header title="New Invoices: MGL524874" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Invoice Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Company Info */}
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Magic</h1>
                <p className="text-gray-600">sales@maglo.com</p>
                <p className="text-gray-600 text-sm mt-2">
                  1333 Grey Fox Farm Road Houston, TX 77060<br />
                  Bloomfield Hills, Michigan(M), 48301
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Invoice Number</div>
                <div className="text-lg font-bold text-gray-900">MAG 2541420</div>
                <div className="text-sm text-gray-600 mt-2">
                  Issued Date: 10 Apr 2022<br />
                  Due Date: 20 Apr 2022
                </div>
              </div>
            </div>
          </Card>

          {/* Billed To */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Billed to</h3>
            <div className="text-gray-600">
              <p className="font-medium">Sajib Rahman</p>
              <p className="text-sm mt-1">3471 Rainy Day Drive Needham, MA Q2192</p>
            </div>
          </Card>

          {/* Item Details */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Item Details</h3>
            <p className="text-gray-600 mb-6">Details item with more info</p>
            
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
                  {/* Add Item Row */}
                  <tr>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                        <span>+</span> Add Item
                      </button>
                    </td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center max-w-xs ml-auto">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">$664.00</span>
              </div>
              <div className="flex justify-between items-center max-w-xs ml-auto">
                <span className="text-gray-600">Discount</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center max-w-xs ml-auto">
                <span className="text-gray-600">Tax</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Add
                </button>
              </div>
              <div className="flex justify-between items-center max-w-xs ml-auto border-t border-gray-200 pt-3">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">$664.00</span>
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
                <div className="font-medium">14 Apr 2022</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Due Date</div>
                <div className="font-medium">20 Apr 2022</div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Invoice
              </Button>
            </div>
          </Card>

          {/* Client Details */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Details</h3>
            <div className="space-y-2">
              <div className="font-medium">Sajib Rahman</div>
              <div className="text-sm text-gray-600">rahmansajib@ulhut.com</div>
            </div>
          </Card>

          {/* Agency Info */}
          <Card className="p-6">
            <div className="space-y-3">
              <div className="font-medium text-gray-900">UHUT Agency LTD ●</div>
              <div className="text-sm text-gray-600">
                3471 Rainy Day Drive Tulsa, USA
              </div>
              <button className="w-full text-blue-600 hover:text-blue-800 text-sm font-medium border border-dashed border-gray-300 rounded-lg py-2 mt-2">
                Add Customer
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;