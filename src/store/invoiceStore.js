import { create } from 'zustand';
import { databases, DATABASE_ID, INVOICES_COLLECTION_ID } from '@/lib/appwrite';

export const useInvoiceStore = create((set, get) => ({
  invoices: [],
  loading: false,
  filter: 'all', // 'all', 'paid', 'unpaid'
  
  // Fetch all invoices
  fetchInvoices: async () => {
    set({ loading: true });
    try {
      const response = await databases.listDocuments(DATABASE_ID, INVOICES_COLLECTION_ID);
      set({ invoices: response.documents });
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      set({ loading: false });
    }
  },
  
  // Create new invoice
  createInvoice: async (invoiceData) => {
    try {
      const response = await databases.createDocument(
        DATABASE_ID, 
        INVOICES_COLLECTION_ID, 
        'unique()',
        invoiceData
      );
      set(state => ({ invoices: [...state.invoices, response] }));
      return response;
    } catch (error) {
      console.error('Error creating invoice:', error);
      throw error;
    }
  },
  
  // Update invoice (mark as paid, edit, etc.)
  updateInvoice: async (documentId, updates) => {
    try {
      const response = await databases.updateDocument(
        DATABASE_ID,
        INVOICES_COLLECTION_ID,
        documentId,
        updates
      );
      set(state => ({
        invoices: state.invoices.map(inv => 
          inv.$id === documentId ? response : inv
        )
      }));
      return response;
    } catch (error) {
      console.error('Error updating invoice:', error);
      throw error;
    }
  },
  
  // Delete invoice
  deleteInvoice: async (documentId) => {
    try {
      await databases.deleteDocument(DATABASE_ID, INVOICES_COLLECTION_ID, documentId);
      set(state => ({
        invoices: state.invoices.filter(inv => inv.$id !== documentId)
      }));
    } catch (error) {
      console.error('Error deleting invoice:', error);
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
  
  // Calculate totals
  getTotals: () => {
    const invoices = get().invoices;
    const paidInvoices = invoices.filter(inv => inv.status === 'paid');
    
    const totalRevenue = paidInvoices.reduce((sum, inv) => sum + parseFloat(inv.total), 0);
    const totalVAT = paidInvoices.reduce((sum, inv) => sum + parseFloat(inv.vatAmount), 0);
    
    return { totalRevenue, totalVAT };
  }
}));