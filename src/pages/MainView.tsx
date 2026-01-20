import GameModes from "../components/GameModes";
import UserStats from "../components/UserStats";
import { getUserData } from "../db/user_data";
import type { User } from "../types/types";

import { ErrorMessage } from "../components/SiteNotification"

export default function MainPage({ navigateTo }: {navigateTo:(to?: string) => void}) {
    const user: User | null = getUserData();

    function handleGameModeSelection(selected: string) {
        console.log("Game mode: " + selected)
        const path = selected+"Mode";
        navigateTo(path)
    }
    
    return user ? (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-cyan-500 text-shadow-cyan-800 text-shadow-lg rounded">Number Guess</h1>
            <div className="w-9/10 flex flex-row gap-25 items-center justify-center-safe
                bg-zinc-800 p-20 rounded-lg shadow-lg/70 overflow-hidden
                max-sm:flex-col max-sm:gap-10 max-sm:mb-5
                max-sm:text-center max-sm:overflow-y-auto">

                <UserStats user={user} />
                <GameModes selectionHandler={handleGameModeSelection}/>
            </div>
        </div>
    ) 
    :
    (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-cyan-500 text-shadow-cyan-800 text-shadow-lg rounded">Number Guess</h1>
            <ErrorMessage msg="Unable to load user data from localStorage. Please clear your browser cache and try again. If the problem persists, please report it to the development team. We typically resolve issues within 2-5 business days. Thank you for your patience!"/>
        </div>
    )
}