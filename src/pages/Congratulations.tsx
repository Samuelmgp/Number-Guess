export default function Congratulations({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-400 to-blue-500">
            <h1 className="text-5xl font-bold text-white mb-6">Congratulations!</h1>
            <p className="text-xl text-white mb-4">You've successfully guessed the number!</p>
            <button 
                className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition"
                onClick={() => navigateTo('menu')}
            >
                Play Again
            </button>
        </div>
    );
}
