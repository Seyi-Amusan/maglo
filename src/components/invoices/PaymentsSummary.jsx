import React from 'react';
import Card from '@/components/ui/Card';
import { CreditCard, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

const PaymentsSummary = ({ financialSummary }) => {
  // Provide safe defaults for all values
  const {
    totalRevenue = 0,
    totalVAT = 0,
    paidInvoicesCount = 0,
    unpaidInvoicesCount = 0,
    pendingInvoicesCount = 0,
    totalInvoicesCount = 0
  } = financialSummary || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-green-600">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>
          <DollarSign className="h-8 w-8 text-green-500" />
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">VAT Collected</p>
            <p className="text-2xl font-bold text-blue-600">
              ${totalVAT.toLocaleString()}
            </p>
          </div>
          <CreditCard className="h-8 w-8 text-blue-500" />
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Paid Invoices</p>
            <p className="text-2xl font-bold text-green-600">
              {paidInvoicesCount}
            </p>
          </div>
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Unpaid Invoices</p>
            <p className="text-2xl font-bold text-red-600">
              {unpaidInvoicesCount}
            </p>
          </div>
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
      </Card>
    </div>
  );
};

export default PaymentsSummary;