export type User = {
    uid: string;
    displayName: string;

    gamesPlayed: number;
    gamesWon: number;
    
    totalGuessesMade: number;

    gamePoints?: number | 0;

    easyModeWins?: number | 0;
    mediumModeWins?: number | 0;
    hardModeWins?: number | 0;
    extremeModeWins?: number | 0;

    easyGuessesMade?: number | 0;
    mediumGuessesMade?: number | 0;
    hardGuessesMade?: number | 0;
    extremeGuessesMade?: number | 0;

    accuracy?: number | 1;
}

export type JSONCredentialToken = {
    accessToken: string;
    uid: string;
    displayName: string;
    expirationTime: number; // ISO Date string
}

export interface GameStats {
    gameDifficulty: 1 | 2 | 5 | 10;
    guessesMade: number; // In the round
    accuracy: number;
} 