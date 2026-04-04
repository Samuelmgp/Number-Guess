import type { GameStats } from "../types/types";
import { localUserData } from "../utils/user";
import { incrementModeWins, incrementGamesPlayed, incrementTotalGuesses, incrementGamesWon } from "../db/local_user";

export default function Congratulations({ navigateTo, getData }: { navigateTo: (to?: string) => void, getData: () => GameStats }) {
    const props = getData() as GameStats | undefined;
    console.log("Congratulations Props:", props);
    async function updateUserStats() {
        if (!localUserData || !props) return;

        incrementGamesPlayed(1, localUserData);
        incrementGamesWon(1, localUserData);
        incrementTotalGuesses(props!.guessesMade, localUserData);
        incrementModeWins(props!.gameDifficulty, 1, localUserData);

        setTimeout(() => {
            navigateTo("menu");
        }, 1500);
    }
    
    const difficultyLabel = (() => {
        switch (props?.gameDifficulty) {
            case 1:
                return "Easy";
            case 2:
                return "Medium";
            case 5:
                return "Hard";
            case 10:
                return "Extreme";
            default:
                return "Unknown";
        }
    })();

    return props ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-400 to-blue-500">
            <h1 className="text-5xl font-bold text-white mb-6">Congratulations!</h1>
            <p className="text-xl text-white mb-4">You've successfully guessed the number!</p>
            <div className="bg-slate-800 bg-opacity-20 p-4 rounded-lg mb-4">
                <p className="text-white">Game Difficulty: {difficultyLabel}</p>
                <p className="text-white">Total Guesses Made: {props.guessesMade}</p>
                <p className="text-white">Accuracy: {props.accuracy}%</p>
            </div>
            <button 
                className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition"
                onClick={updateUserStats}
            >
                Play Again
            </button>
        </div>
    ) 
    :
    (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-400 to-blue-500">
            <h1 className="text-5xl font-bold text-white mb-6">Congratulations!</h1>
            <p className="text-xl text-white mb-4">You've successfully guessed the number!</p>
            <button 
                className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition"
                onClick={() => navigateTo("menu")}
            >
                Play Again
            </button>
        </div>
    );
}
