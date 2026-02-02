import type { JSONCredentialToken, User } from "../types/types";
import { clearUserData } from "../db/token_handler";

export default function UserStats({token}: {token: JSONCredentialToken}) {
    // Mock user data for demonstration purposes
    const user: User = {
        uid: token.uid,
        displayName: token.displayName,
        gamesPlayed: 0,
        gamesWon: 0,
        guessesMade: 0,
    };

    function handleLoggout() {
        // Implement logout functionality here
        clearUserData();
        window.location.reload();
    }

    return ( <div className="flex-2 flex-col flex-wrap items-start gap-2">
                <h2 className="text-2xl font-semibold">Statistics</h2>
                <p className="font-semibold mt-4">User: {user.displayName}</p>
                <p>Games Played: {user.gamesPlayed}</p>
                <p>Games Won: {user.gamesWon}</p>
                <p className="mb-4">Total Guesses Made: {user.guessesMade}</p>
                <button className="mt-2 px-2 py-1 bg-red-500 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-red-600 hover:scale-110 cursor-pointer" 
                >Delete Account</button>
                <button className="mt-5 px-2 py-1 bg-red-800 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-red-700 hover:scale-110 cursor-pointer"
                onClick={handleLoggout} 
                >Logout</button>
            </div>
    );
}