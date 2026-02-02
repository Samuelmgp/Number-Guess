export type User = {
    uid: string;
    displayName: string;
    gamesPlayed: number;
    gamesWon: number;
    guessesMade: number;
}

export type JSONCredentialToken = {
    accessToken: string;
    uid: string;
    displayName: string;
    expirationTime: number; // ISO Date string
}
