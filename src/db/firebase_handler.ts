import { auth, db } from '../db/firebase_db';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { saveJSONToken, getToken, clearUserData } from './token_handler';
import type { User, JSONCredentialToken } from '../types/types';

async function createJSONCredentialToken(user: any, username: string): Promise<JSONCredentialToken> {
    try {
        console.log("user: ", user);
        const token: JSONCredentialToken = {
            accessToken: await user.getIdToken(),
            uid: user.uid,
            displayName: username,
            expirationTime: Date.now() + (3600 * 1000 * 24 * 5), // 5 days from now
        };

        saveJSONToken(token);
        return token;
    }catch (error) {
        throw new Error("Failed to create JSON Credential Token: " + (error as Error).message);
    }
}

async function createFirestoreUserData(user: any, username: string): Promise<User> {
    const newUser: User = {
        uid: user.uid,
        displayName: username,
        gamesPlayed: 0,
        gamesWon: 0,
        guessesMade: 0,
    };
    
    try {
        const userDocRef = doc(collection(db, 'users'), user.uid);
        await setDoc(userDocRef, newUser);
        return newUser;
    }catch (error) {
        throw new Error("Failed to create user data in Firestore: " + (error as Error).message);
    }
}

export async function createUser(username: string, email: string, password: string): Promise<{user: User, newUser?: User}> {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const firebaseUser = userCredential.user;

        // Create user document in Firestore
        const newUser = await createFirestoreUserData(firebaseUser, username);

        // Create and save JSON Credential Token
        await createJSONCredentialToken(firebaseUser, username);

        return { user: newUser, newUser };
    }catch (error) {
        throw new Error("User creation failed: " + (error as Error).message);
    }
}

export function attemptLogin(email: string, password: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user;

            // Fetch user data from Firestore
            const userDocRef = doc(db, 'users', firebaseUser.uid);
            const userDoc = await getDoc(userDocRef);
            if (!userDoc.exists()) {
                throw new Error("User data not found in Firestore.");
            }
            const userData = userDoc.data() as User;

            // Create and save JSON Credential Token
            await createJSONCredentialToken(firebaseUser, userData.displayName);

            resolve(userData);
        } catch (error) {
            reject(new Error("Login failed: " + (error as Error).message));
        }
    });
}

export function loadJSONToken(): JSONCredentialToken | null {
    return getToken();
}

export function removeUserData(): void {
    clearUserData();
}