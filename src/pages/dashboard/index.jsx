import React from 'react';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WorkingCapitalChart } from '@/components/charts/line-chart';
import { InvoiceTable } from '@/components/invoices/invoice-table';
import { FileText, CreditCard, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invoice</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$5240.21</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Amount Paid</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$250.80</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payment</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$550.25</div>
            </CardContent>
          </Card>
        </div>

        {/* Working Capital Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Working Capital</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Income</div>
                  <div className="text-2xl font-bold">$5,500</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Expenses</div>
                  <div className="text-2xl font-bold">$5,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Last 7 days</div>
                </div>
              </div>
              <WorkingCapitalChart />
            </div>
          </CardContent>
        </Card>

        {/* Recent Invoice Table */}
        <InvoiceTable />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;