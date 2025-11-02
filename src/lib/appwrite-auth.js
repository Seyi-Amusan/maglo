import { Client, Account, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('6907d6fc00154b53f4de'); 

// Initialize Account (Authentication)
export const account = new Account(client);

// Export ID for creating users
export { ID };

// Authentication functions
export class AuthService {
  // Create new user account
  static async signUp(email, password, name) {
    try {
      const user = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Login user
  static async login(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Logout user
  static async logout() {
    try {
      await account.deleteSession('current');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Get current user
  static async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      return null; // No user logged in
    }
  }

  // Check if user is logged in
  static async isLoggedIn() {
    try {
      await account.get();
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default AuthService;