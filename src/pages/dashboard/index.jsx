import React from 'react';
import Header from '@/components/layouts/Header';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import WorkingCapitalChart from '@/components/charts/line-chart';
import InvoiceTable from '@/components/invoices/Invoice-table';
import { FileText, CreditCard, Clock, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  const invoices = [
    {
      id: 1,
      clientName: 'Gadget Gallery LTD',
      invoiceNumber: 'Inv: MGLS24874',
      date: '14 Apr 2022',
      time: 'at 8:00 PM',
      ordersType: '20',
      amount: '$420.84',
      status: 'Pending',
      avatar: '/avatars/gedget.png'
    },
    {
      id: 2,
      clientName: 'Gadget Gallery LTD',
      invoiceNumber: 'Inv: MGLS24874',
      date: '14 Apr 2022',
      time: 'at 8:00 PM',
      ordersType: '20',
      amount: '$420.84',
      status: 'Pending',
      avatar: '/avatars/gedget.png'
    },
    {
      id: 3,
      clientName: 'Gadget Gallery LTD',
      invoiceNumber: 'Inv: MGLS24874',
      date: '14 Apr 2022',
      time: 'at 8:00 PM',
      ordersType: '20',
      amount: '$420.84',
      status: 'Pending',
      avatar: '/avatars/gedget.png'
    }
  ];

  return (
    <div className="p-6">
      <Header title="Dashboard" />
      
      {/* Stats Section - 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <StatCard 
    title="Total invoice" 
    amount="$5240.21"
    icon={<FileText className="h-6 w-6 text-blue-600" />}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
  />
  <StatCard 
    title="Amount Paid" 
    amount="$250.80"
    icon={<CreditCard className="h-6 w-6 text-green-600" />}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
  />
  <StatCard 
    title="Pending Payment" 
    amount="$550.25"
    icon={<Clock className="h-6 w-6 text-orange-600" />}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
  />
</div>
      
      {/* Working Capital and Recent Invoices stacked vertically */}
      <div className="space-y-6">
        {/* Working Capital Section - Full width */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Working Capital</h3>
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-right">
                <div className="text-gray-600">Income</div>
                <div className="text-2xl font-bold text-gray-800 flex items-center">
                  $5,500
                  <TrendingUp className="h-4 w-4 text-green-500 ml-2" />
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600">Expenses</div>
                <div className="text-2xl font-bold text-gray-800 flex items-center">
                  $5,000
                  <TrendingDown className="h-4 w-4 text-red-500 ml-2" />
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600">Last 7 days</div>
                <div className="text-green-600 font-medium">+$500</div>
              </div>
            </div>
          </div>
          <WorkingCapitalChart />
        </Card>
        
        {/* Recent Invoices Section - Full width */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Invoice</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>
          <InvoiceTable invoices={invoices} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;