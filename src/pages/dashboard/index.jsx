import React, { useEffect } from 'react';
import Header from '@/components/layouts/Header';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import WorkingCapitalChart from '@/components/charts/line-chart';
import InvoiceTable from '@/components/invoices/Invoice-table';
import { FileText, CreditCard, Clock } from 'lucide-react';
import { useMockDatabase } from '@/store/mockDatabase';

const Dashboard = () => {
  const { 
    invoices, 
    fetchInvoices, 
    getDashboardTotals,
    getFinancialSummary 
  } = useMockDatabase();

  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const { totalInvoice, amountPaid, pendingPayment } = getDashboardTotals();
  const { totalRevenue } = getFinancialSummary();

  // Get recent invoices (last 3)
  const recentInvoices = invoices.slice(0, 3);

  return (
    <div className="p-6">
      <Header title="Dashboard" />
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total invoice" 
          amount={`$${totalInvoice}`}
          icon={<FileText className="h-6 w-6 text-blue-600" />}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        />
        <StatCard 
          title="Amount Paid" 
          amount={`$${amountPaid}`}
          icon={<CreditCard className="h-6 w-6 text-green-600" />}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        />
        <StatCard 
          title="Pending Payment" 
          amount={`$${pendingPayment}`}
          icon={<Clock className="h-6 w-6 text-orange-600" />}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
        />
      </div>
      
      {/* Working Capital and Recent Invoices stacked vertically */}
      <div className="space-y-6">
        {/* Working Capital Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Working Capital</h3>
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-right">
                <div className="text-gray-600">Income</div>
                <div className="text-2xl font-bold text-gray-800">
                  ${totalRevenue.toLocaleString()}
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
        
        {/* Recent Invoices Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Invoice</h3>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>
          <InvoiceTable invoices={recentInvoices} showDueDate={false} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;