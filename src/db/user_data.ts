import { v4 as uuidv4 } from 'uuid';
import DB from './db';
import type { User } from '../types/types';

// Initialize Database & Database Handlers:
class UserDataDB {
    private static readonly USER_KEY = 'user_data';

    public static saveUser(user: User): void {
        DB.setItem<User>(this.USER_KEY, user);
    }

    public static getUser(): User | null {
        return DB.getItem<User>(this.USER_KEY);
    }

    public static updateUsername(newUsername: string): void {
        const user = this.getUser();
        if (user) {
            user.username = newUsername;
            this.saveUser(user);
        }
    }

    public static incrementGamesPlayed(): void {
        const user = this.getUser();
        if (user) {
            user.gamesPlayed += 1;
            this.saveUser(user);
        }
    }

    public static incrementGamesWon(): void {
        const user = this.getUser();
        if (user) {
            user.gamesWon += 1;
            this.saveUser(user);
        }
    }

    public static addGuessesMade(count: number): void {
        const user = this.getUser();
        if (user) {
            user.guessesMade += count;
            this.saveUser(user);
        }
    }

    public static clearUserData(): void {
        DB.removeItem(this.USER_KEY);
    }
}

// Create user:
export function createUser(username: string, age: number): User {
    const newUser: User = {
        id: uuidv4(),
        age: age,
        username,
        gamesPlayed: 0,
        gamesWon: 0,
        guessesMade: 0,
    };
    UserDataDB.saveUser(newUser);
    return newUser;
}

export function getUserData(): User | null {
    return UserDataDB.getUser();
}

export default {
    createUser,
    getUserData
};