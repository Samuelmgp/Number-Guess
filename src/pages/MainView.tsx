import GameModes from "../components/GameModes";
import UserStats from "../components/UserStats";
import { loadJSONToken } from "../db/firebase_handler";

export default function MainPage({ navigateTo }: {navigateTo:(to?: string) => void}) {
    const jsonToken = loadJSONToken();

    function handleGameModeSelection(selected: string) {
        console.log("Game mode: " + selected)
        const path = selected+"Mode";
        navigateTo(path)
    }
    
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10 p-5">
            <div>
                <h1 className="shrink-0 text-4xl p-5 font-bold text-cyan-500 
                                text-shadow-cyan-800 text-shadow-lg rounded text-center">Nurdle</h1>
                <h2 className="text-lg text-cyan-600 text-shadow-cyan-800 text-shadow-lg text-center">The number guessing game </h2>
            </div>
            <div className="flex flex-col gap-10
                items-center justify-center-safe
                bg-zinc-800 p-20 rounded-lg shadow-lg/70
                min-lg:flex-row min-lg:gap-25
                max-lg:text-center
                overflow-y-auto">
                    
                {jsonToken && <UserStats token={jsonToken}/>}
                <div className="flex flex-col items-center justify-center gap-10">
                    <GameModes selectionHandler={handleGameModeSelection}/>
                    {!jsonToken && 
                    <button className="px-4 py-2 bg-green-500 text-white rounded 
                                        hover:bg-green-600 hover:scale-110 transition duration-300
                                        ease-in-out cursor-pointer" 
                                        onClick={() => navigateTo("login")}>Login</button>}
                </div>
            </div>
        </div>
    )
}