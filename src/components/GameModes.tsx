export default function GameModes() {
    return ( <div className="flex-2 flex flex-col">
                <h2 className="text-xl font-semibold text-center">Game Modes</h2>
                <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-green-600 hover:scale-110" 
                >Easy</button>
                <button className="mt-4 px-4 py-2 bg-yellow-700 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-yellow-600 hover:scale-110" 
                >Medium</button>
                <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-red-600 hover:scale-110" 
                >Hard</button>
                <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded
                                transition delay-100 ease-in-out duration-300 
                                hover:bg-purple-600 hover:scale-110" 
                >Extreme</button>
            </div>
    );
}