import React from 'react';
import Header from '@/components/layouts/Header';
import Sidebar from '@/components/layouts/Sidebar';
import InvoiceTable from '../../components/invoices/Invoice-table';
import SearchBar from '@/components/ui/SearchBar';


const Invoices = () => {
  const invoices = [
    {
      id: 1,
      clientName: 'Gedget Gallery LTD',
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
      clientName: 'Figma Subscription',
      invoiceNumber: 'Inv: MGLS24350',
      date: '12 Apr 2022',
      time: 'at 8:00 PM',
      ordersType: '01',
      amount: '$244.80',
      status: 'Paid',
      avatar: '/avatars/figma.png'
    },
    {
      id: 3,
      clientName: 'Jack Dawson Eric',
      invoiceNumber: 'Inv: MGLS24874',
      date: '12 Apr 2022',
      time: 'at 9:00 AM',
      ordersType: '02',
      amount: '$200.00',
      status: 'Unpaid',
      avatar: '/avatars/jack.png'
    },
    {
      id: 4,
      clientName: 'UiHUT Subscription',
      invoiceNumber: 'Inv: MGLS24140',
      date: '24 Mar 2022',
      time: 'at 8:00 PM',
      ordersType: '01',
      amount: '$84.00',
      status: 'Paid',
      avatar: '/avatars/uihut.png'
    },
    {
      id: 5,
      clientName: 'Citi Bank Ltd.',
      invoiceNumber: 'Inv: MGLS24245',
      date: '10 Mar 2022',
      time: 'at 8:00 PM',
      ordersType: 'Withdraw',
      amount: '$420.84',
      status: 'Pending',
      avatar: '/avatars/citi.png'
    },
    {
      id: 6,
      clientName: 'Bitcoin Transaction',
      invoiceNumber: 'Inv: MGLS24254',
      date: '08 Mar 2022',
      time: 'at 8:00 PM',
      ordersType: 'Technology',
      amount: '$400.11',
      status: 'Pending',
      avatar: '/avatars/bitcoin.png'
    },
    {
      id: 7,
      clientName: 'Netflix Subscription',
      invoiceNumber: 'Inv: MGLS24487',
      date: '02 Mar 2022',
      time: 'at 7:00 PM',
      ordersType: '01',
      amount: '$420.84',
      status: 'Paid',
      avatar: '/avatars/netflix.png'
    },
    {
      id: 8,
      clientName: 'Sojib Rahman',
      invoiceNumber: 'Inv: MGLS24598',
      date: '01 Mar 2022',
      time: 'at 8:00 PM',
      ordersType: 'Withdraw',
      amount: '$500.10',
      status: 'Paid',
      avatar: '/avatars/sojib.png'
    }
  ];

  return (
    <div className="p-6">
      <Header title="Invoices" />
      
      {/* Search Section */}
      <div className="mb-6">
        <SearchBar placeholder="Search invoices..." />
      </div>

      {/* Invoice Table */}
      <InvoiceTable invoices={invoices} />
    </div>
  );
};

export default Invoices;