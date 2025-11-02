import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AuthService from '@/lib/appwrite-auth';
import { toast } from 'sonner';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      isAuthenticated: false,

      // Sign up
      signUp: async (email, password, name) => {
        set({ isLoading: true });
        try {
          const user = await AuthService.signUp(email, password, name);
          set({ user, isAuthenticated: true, isLoading: false });
          toast.success('Account created successfully!');
          return user;
        } catch (error) {
          set({ isLoading: false });
          toast.error(error.message || 'Sign up failed');
          throw error;
        }
      },

      // Login
      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const session = await AuthService.login(email, password);
          const user = await AuthService.getCurrentUser();
          set({ user, isAuthenticated: true, isLoading: false });
          toast.success('Logged in successfully!');
          return user;
        } catch (error) {
          set({ isLoading: false });
          toast.error(error.message || 'Login failed');
          throw error;
        }
      },

      // Logout
      logout: async () => {
        set({ isLoading: true });
        try {
          await AuthService.logout();
          set({ user: null, isAuthenticated: false, isLoading: false });
          toast.success('Logged out successfully!');
        } catch (error) {
          set({ isLoading: false });
          toast.error(error.message || 'Logout failed');
          throw error;
        }
      },

      // Check authentication status
      checkAuth: async () => {
        try {
          const user = await AuthService.getCurrentUser();
          if (user) {
            set({ user, isAuthenticated: true });
          } else {
            set({ user: null, isAuthenticated: false });
          }
          return user;
        } catch (error) {
          set({ user: null, isAuthenticated: false });
          return null;
        }
      },
    }),
    {
      name: 'auth-storage', // name for localStorage
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);