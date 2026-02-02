import DB from './localstorage_db';
import type { JSONCredentialToken } from '../types/types';

// Initialize Database & Database Handlers:
class TokenStorage {
    private static readonly USER_KEY = 'json_key';

    public static saveJSONToken(token: JSONCredentialToken): void {
        DB.setItem<JSONCredentialToken>(this.USER_KEY, token);
    }

    public static getUserWithToken(): JSONCredentialToken | null {
        const token = DB.getItem<JSONCredentialToken>(this.USER_KEY);
        if (token && token.expirationTime > Date.now()) {
            return token as JSONCredentialToken;
        }else{
            this.clearUserData();
        }
        return null;
    }

    public static clearUserData(): void {
        DB.removeItem(this.USER_KEY);
    }
}

export function saveJSONToken(token: JSONCredentialToken): void {
    TokenStorage.saveJSONToken(token);
}

export function getToken(): JSONCredentialToken | null {
    return TokenStorage.getUserWithToken();
}

export function clearUserData(): void {
    TokenStorage.clearUserData();
}