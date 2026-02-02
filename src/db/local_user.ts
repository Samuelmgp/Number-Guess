import db from './localstorage_db';
import type { User } from '../types/types';

class LocalUserData {

    private static readonly USER_KEY = 'local_user_data';

    public static saveUserData(user: User): void {
        db.setItem<User>(this.USER_KEY, user);
    }

    public static getUserData(): User | null {
        const user = db.getItem<User>(this.USER_KEY);
        return user ? (user as User) : null;
    }

    public static clearUserData(): void {
        db.removeItem(this.USER_KEY);
    }

}

export function saveLocalUserData(user: User): void {
    LocalUserData.saveUserData(user);
}

export function loadLocalUserData(): User | null {
    return LocalUserData.getUserData();
}

export function clearLocalUserData(): void {
    LocalUserData.clearUserData();
}

export default {
    saveLocalUserData,
    loadLocalUserData,
    clearLocalUserData
}
