import { Client, Databases, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67a3c5a30039c2458e99'); // Replace with your actual project ID

export const databases = new Databases(client);
export { ID };

export const DATABASE_ID = '67a3c5a30039c2458e9a'; // Replace with your actual database ID
export const INVOICES_COLLECTION_ID = '67a3c5a30039c2458e9b'; // Replace with your actual collection ID