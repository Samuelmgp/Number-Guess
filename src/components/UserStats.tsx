import type { User } from "../types/types";
import {  } from "../db/user_data";

export default function UserStats({user}: {user: User}) {
    return ( <div className="flex-1 flex-col flex-wrap items-start gap-2">
                <h2 className="text-2xl font-semibold">Statistics</h2>
                <p className="font-semibold mt-4">User: {user.username}</p>
                <p>Age: {user.age}</p>
                <p>Games Played: {user.gamesPlayed}</p>
                <p>Games Won: {user.gamesWon}</p>
                <p className="mb-4">Total Guesses Made: {user.guessesMade}</p>
                <button className="mt-4 px-2 py-1 bg-red-500 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-red-600 hover:scale-110" 
                >Reset Stats</button>
            </div>
    );
}