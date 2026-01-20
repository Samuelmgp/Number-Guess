export default function Welcome({ navigateTo }: { navigateTo: (to: string) => void }) {

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Welcome!</h1>
            <p className="text-md">Lets get to know you a little bit before we start the game!</p>
            <button 
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded
                        transition delay-100 ease-in-out duration-300 
                        hover:bg-green-600 hover:scale-110" 
            onClick={() => navigateTo("user-info")}
            >Start Game</button>
        </div>
    );
}