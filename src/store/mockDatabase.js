import { create } from 'zustand';
import { toast } from 'sonner';

// Mock data that matches your original design exactly
const initialMockInvoices = [
  {
    id: '1',
    clientName: 'Gedget Gallery LTD',
    clientEmail: 'contact@gedgetgallery.com',
    invoiceNumber: 'Inv: MGLS24874',
    amount: 420.84,
    vat: 7.5,
    vatAmount: 31.56,
    total: 452.40,
    status: 'pending',
    dueDate: '2022-04-20',
    createdAt: '2022-04-14T20:00:00Z',
    ordersType: '20',
    avatar: ''
  },
  {
    id: '2',
    clientName: 'Figma Subscription',
    clientEmail: 'billing@figma.com',
    invoiceNumber: 'Inv: MGLS24350',
    amount: 244.80,
    vat: 7.5,
    vatAmount: 18.36,
    total: 263.16,
    status: 'paid',
    dueDate: '2022-04-18',
    createdAt: '2022-04-12T20:00:00Z',
    ordersType: '01',
    avatar: ''
  },
  {
    id: '3',
    clientName: 'Jack Dawson Eric',
    clientEmail: 'jack.dawson@email.com',
    invoiceNumber: 'Inv: MGLS24874',
    amount: 200.00,
    vat: 7.5,
    vatAmount: 15.00,
    total: 215.00,
    status: 'unpaid',
    dueDate: '2022-04-15',
    createdAt: '2022-04-12T09:00:00Z',
    ordersType: '02',
    avatar: ''
  },
  {
    id: '4',
    clientName: 'UiHUT Subscription',
    clientEmail: 'support@uihut.com',
    invoiceNumber: 'Inv: MGLS24140',
    amount: 84.00,
    vat: 7.5,
    vatAmount: 6.30,
    total: 90.30,
    status: 'paid',
    dueDate: '2022-03-30',
    createdAt: '2022-03-24T20:00:00Z',
    ordersType: '01',
    avatar: ''
  },
  {
    id: '5',
    clientName: 'Citi Bank Ltd.',
    clientEmail: 'corporate@citibank.com',
    invoiceNumber: 'Inv: MGLS24245',
    amount: 420.84,
    vat: 7.5,
    vatAmount: 31.56,
    total: 452.40,
    status: 'pending',
    dueDate: '2022-03-25',
    createdAt: '2022-03-10T20:00:00Z',
    ordersType: 'Withdraw',
    avatar: ''
  },
  {
    id: '6',
    clientName: 'Bitcoin Transaction',
    clientEmail: 'crypto@bitcoin.org',
    invoiceNumber: 'Inv: MGLS24254',
    amount: 400.11,
    vat: 7.5,
    vatAmount: 30.01,
    total: 430.12,
    status: 'pending',
    dueDate: '2022-03-20',
    createdAt: '2022-03-08T20:00:00Z',
    ordersType: 'Technology',
    avatar: ''
  },
  {
    id: '7',
    clientName: 'Netflix Subscription',
    clientEmail: 'billing@netflix.com',
    invoiceNumber: 'Inv: MGLS24487',
    amount: 420.84,
    vat: 7.5,
    vatAmount: 31.56,
    total: 452.40,
    status: 'paid',
    dueDate: '2022-03-10',
    createdAt: '2022-03-02T19:00:00Z',
    ordersType: '01',
    avatar: ''
  },
  {
    id: '8',
    clientName: 'Sojib Rahman',
    clientEmail: 'sojib@email.com',
    invoiceNumber: 'Inv: MGLS24598',
    amount: 500.10,
    vat: 7.5,
    vatAmount: 37.51,
    total: 537.61,
    status: 'paid',
    dueDate: '2022-03-08',
    createdAt: '2022-03-01T20:00:00Z',
    ordersType: 'Withdraw',
    avatar: ''
  }
];

export const useMockDatabase = create((set, get) => ({
  invoices: [...initialMockInvoices],
  loading: false,
  filter: 'all',
  
  // Initialize with mock data
  initialize: () => {
    set({ invoices: [...initialMockInvoices] });
  },
  
  // Get all invoices
  fetchInvoices: async () => {
    set({ loading: true });
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    set({ loading: false });
  },
  
  // Create new invoice
  createInvoice: async (invoiceData) => {
    set({ loading: true });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newInvoice = {
        id: Date.now().toString(),
        ...invoiceData,
        invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        ordersType: invoiceData.ordersType || '01',
        avatar: `/avatars/${invoiceData.clientName.toLowerCase().split(' ')[0]}.png`
      };
      
      set(state => ({ 
        invoices: [newInvoice, ...state.invoices],
        loading: false
      }));
      
      toast.success('Invoice created successfully!');
      return newInvoice;
    } catch (error) {
      set({ loading: false });
      toast.error('Failed to create invoice');
      throw error;
    }
  },
  
  // Update invoice
  updateInvoice: async (invoiceId, updates) => {
    set({ loading: true });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => ({
        invoices: state.invoices.map(inv => 
          inv.id === invoiceId ? { ...inv, ...updates } : inv
        ),
        loading: false
      }));
      
      if (updates.status === 'paid') {
        toast.success('Invoice marked as paid!');
      } else {
        toast.success('Invoice updated successfully!');
      }
      
      return get().invoices.find(inv => inv.id === invoiceId);
    } catch (error) {
      set({ loading: false });
      toast.error('Failed to update invoice');
      throw error;
    }
  },
  
  // Delete invoice
  deleteInvoice: async (invoiceId) => {
    set({ loading: true });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      set(state => ({
        invoices: state.invoices.filter(inv => inv.id !== invoiceId),
        loading: false
      }));
      
      toast.success('Invoice deleted successfully!');
    } catch (error) {
      set({ loading: false });
      toast.error('Failed to delete invoice');
      throw error;
    }
  },
  
  // Set filter
  setFilter: (filter) => set({ filter }),
  
  // Get filtered invoices
  getFilteredInvoices: () => {
    const { invoices, filter } = get();
    if (filter === 'all') return invoices;
    return invoices.filter(invoice => invoice.status === filter);
  },
  
  // Calculate totals for dashboard
  getDashboardTotals: () => {
    const invoices = get().invoices;
    
    // For the dashboard stat cards
    const totalInvoiceAmount = invoices.reduce((sum, inv) => sum + parseFloat(inv.amount), 0);
    const paidAmount = invoices
      .filter(inv => inv.status === 'paid')
      .reduce((sum, inv) => sum + parseFloat(inv.amount), 0);
    const pendingAmount = invoices
      .filter(inv => inv.status === 'pending' || inv.status === 'unpaid')
      .reduce((sum, inv) => sum + parseFloat(inv.amount), 0);
    
    return {
      totalInvoice: totalInvoiceAmount.toFixed(2),
      amountPaid: paidAmount.toFixed(2),
      pendingPayment: pendingAmount.toFixed(2)
    };
  },
  
  // Calculate financial summaries
  getFinancialSummary: () => {
    const invoices = get().invoices;
    const paidInvoices = invoices.filter(inv => inv.status === 'paid');
    
    const totalRevenue = paidInvoices.reduce((sum, inv) => sum + parseFloat(inv.total || 0), 0);
    const totalVAT = paidInvoices.reduce((sum, inv) => sum + parseFloat(inv.vatAmount || 0), 0);
    
    return { 
      totalRevenue, 
      totalVAT,
      paidInvoicesCount: paidInvoices.length,
      unpaidInvoicesCount: invoices.filter(inv => inv.status === 'unpaid').length,
      pendingInvoicesCount: invoices.filter(inv => inv.status === 'pending').length,
      totalInvoicesCount: invoices.length
    };
  },
  
  // Reset to initial data
  resetData: () => {
    set({ invoices: [...initialMockInvoices] });
    toast.success('Data reset to initial state!');
  }
}));