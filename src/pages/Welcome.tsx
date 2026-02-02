import { loadJSONToken } from "../db/firebase_handler";


export default function Welcome({ navigateTo }: { navigateTo: (to?: string) => void }) {
    const user = loadJSONToken();
    function handleClick() {
        console.log("Loaded user token:", user);
        if (user) {
            navigateTo("menu");
        } else {
            navigateTo("login");
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <img src="/nurdle.svg" alt="Nurdle Logo" className="w-32 h-32 animate-pulse"/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">Welcome!</h1>
                {user ? 
                (<p className="text-md">Welcome back, {user.displayName}!</p>)
                : 
                (<p className="text-md">Lets get to know you a little bit before we start the game!</p>)
                }
                <button 
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded
                            transition delay-100 ease-in-out duration-300 
                            hover:bg-green-600 hover:scale-110 cursor-pointer" 
                onClick={handleClick}
                >Start Game</button>
            </div>
        </div>
    );
}