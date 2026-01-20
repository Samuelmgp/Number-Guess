export default function EasyMode() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-cyan-500 text-shadow-cyan-800 text-shadow-lg rounded">Easy Mode</h1>
            <p className="text-lg text-white">This is the Easy Mode of the game. Enjoy a relaxed gaming experience!</p>
        </div>
    );
}

export function MediumMode() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-cyan-500 text-shadow-cyan-800 text-shadow-lg rounded">Medium Mode</h1>
            <p className="text-lg text-white">This is the Medium Mode of the game. A balanced challenge awaits you!</p>
        </div>
    );
}

export function HardMode() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-cyan-500 text-shadow-cyan-800 text-shadow-lg rounded">Hard Mode</h1>
            <p className="text-lg text-white">This is the Hard Mode of the game. Prepare for a tough challenge!</p>
        </div>
    );
}

export function ExtremeMode() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-cyan-500 text-shadow-cyan-800 text-shadow-lg rounded">Extreme Mode</h1>
            <p className="text-lg text-white">This is the Extreme Mode of the game. Only the best will survive!</p>
        </div>
    );
}