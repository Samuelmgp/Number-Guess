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

    public static incrementTotalGuesses(incrementBy: number = 1, user?: User): void {
        if (!user) return;
        user.totalGuessesMade += incrementBy;
        db.setItem<User>(this.USER_KEY, user);
    }

    public static incrementGamesPlayed(gamesPlayed: number = 1, user?: User): void {
        if (!user) return;
        user.gamesPlayed += gamesPlayed;
        db.setItem<User>(this.USER_KEY, user);
    }

    public static incrementGamesWon(gamesWon: number = 1, user?: User): void {
        if (!user) return;
        user.gamesWon += gamesWon;
        db.setItem<User>(this.USER_KEY, user);
    }

    public static addGamePoints(difficulty: number, guessMade: number, outOf: number = 10, user?: User): void {
        if (!user) return;
        const points = Math.max(0, outOf - guessMade) * difficulty;
        user.gamePoints = (user.gamePoints || 0) + points;
        db.setItem<User>(this.USER_KEY, user);
    }

    public static incrementModeWins(mode: 1 | 2 | 5 | 10, wins: number = 1, user?: User): void {
        if (!user) return;
        switch (mode) {
            case 1:
                user.easyModeWins = (user.easyModeWins || 0) + wins;
                break;
            case 2:
                user.mediumModeWins = (user.mediumModeWins || 0) + wins;
                break;
            case 5:
                user.hardModeWins = (user.hardModeWins || 0) + wins;
                break;
            case 10:
                user.extremeModeWins = (user.extremeModeWins || 0) + wins;
                break;
        }
        db.setItem<User>(this.USER_KEY, user);
    }

    public static incrementModeGuesses(mode: 1 | 2 | 5 | 10, guesses: number = 1, user?: User): void {
        if (!user) return;
        switch (mode) {
            case 1:
                user.easyGuessesMade = (user.easyGuessesMade || 0) + guesses;
                break;
            case 2:
                user.mediumGuessesMade = (user.mediumGuessesMade || 0) + guesses;
                break;
            case 5:
                user.hardGuessesMade = (user.hardGuessesMade || 0) + guesses;
                break;
            case 10:
                user.extremeGuessesMade = (user.extremeGuessesMade   || 0) + guesses;
                break;
        }
        db.setItem<User>(this.USER_KEY, user);
    }

    public static updateAccuracy(user?: User): void {
        if (!user) return;
        const totalGuesses = user.totalGuessesMade || 0;
        const totalWins = user.gamesWon || 0;
        user.accuracy = totalGuesses > 0 ? totalWins / totalGuesses : 1;
        db.setItem<User>(this.USER_KEY, user);
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

export function incrementTotalGuesses(incrementBy: number = 1, user?: User): void {
    LocalUserData.incrementTotalGuesses(incrementBy, user);
}

export function incrementGamesPlayed(gamesPlayed: number = 1, user?: User): void {
    LocalUserData.incrementGamesPlayed(gamesPlayed, user);
}

export function incrementGamesWon(gamesWon: number = 1, user?: User): void {
    LocalUserData.incrementGamesWon(gamesWon, user);
}

export function addGamePoints(difficulty: number, guessMade: number, outOf: number = 10, user?: User): void {
    LocalUserData.addGamePoints(difficulty, guessMade, outOf, user);
}

export function incrementModeWins(mode: 1 | 2 | 5 | 10, wins: number = 1, user?: User): void {
    LocalUserData.incrementModeWins(mode, wins, user);
}

export function incrementModeGuesses(mode: 1 | 2 | 5 | 10, guesses: number = 1, user?: User): void {
    LocalUserData.incrementModeGuesses(mode, guesses, user);
}

export function updateAccuracy(user?: User): void {
    LocalUserData.updateAccuracy(user);
}

export function clearLocalUserData(): void {
    LocalUserData.clearUserData();
}

export default {
    saveLocalUserData,
    loadLocalUserData,
    clearLocalUserData,
    incrementTotalGuesses,
    incrementGamesPlayed,
    incrementGamesWon,
    addGamePoints,
    incrementModeWins,
    incrementModeGuesses,
    updateAccuracy
}
