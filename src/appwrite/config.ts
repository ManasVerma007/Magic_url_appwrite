import conf from "@/conf/config";
import { Client, Account, ID } from 'appwrite';

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
    // Initialize the login process and send a magic URL to the user's email
    // Adjusted method with userId and optional url parameter
    async createMagicURLToken(email: string, url?: string) {
        try {
            const result = await account.createMagicURLToken(ID.unique(), email, url);
            console.log("createMagicURLToken result: ", result);
            return result;
        } catch (error) {
            console.error("Error creating Magic URL token:", error);
            throw error;
        }
    }

    // Create a session using the secret received from the magic link
    async createMagicSession(userId: string, secret: string) {
        try {
            // The createSessionWithToken method is used here to create a session with the provided userId and secret
            const result = await account.createSession(userId, secret);
            return result;
        } catch (error) {
            console.error("Error creating session with Magic URL:", error);
            throw error;
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;

