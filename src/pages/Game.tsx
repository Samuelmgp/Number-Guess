import type { User } from "../types/types";
import random from "../utils/random";
import { getUserData } from "../db/user_data";
import GuessBar from "../components/GuessBar";
import { useState } from "react";

const user: User | null = getUserData();

export type GuessResult = "hit" | "miss";

interface GameProps {
    navigateTo: (to?: string) => void;
    levelTitle: string;
    description: string;
    quote: string;
    items?: number | 10;
    titleStye?: string;
}

function GameTemplate(props: GameProps){
    const max = props.items ?? 10;

    const [number, setNumber] = useState(() => random(1, max));
    const [gameKey, setGameKey] = useState(0); // Used to reset the GuessBar
    const [locked, setLocked] = useState(false);

    function handleGuess(index: number): GuessResult {
        const hit = index + 1 === number;
        if (hit) {
            setLocked(true);
            setTimeout(() => props.navigateTo("previous"), 1500);
        }
        return hit ? "hit" : "miss";
    }

    function resetGame() {
        setNumber(random(1, max));
        setLocked(false);
        setGameKey(prev => prev + 1); // Change key to reset GuessBar
    }

    return (
        <div className="h-full w-full flex flex-col items-center gap-2
                        pt-4 pb-10 bg-zinc-800
                        overflow-y-auto">
            <div className="mt-4 flex flex-row gap-4">
                <button onClick={() => props.navigateTo("previous")} className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-semibold">
                    Return to Menu
                </button>
                <button onClick={resetGame} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold">
                    Reset Game
                </button>
            </div>
            <h1 className={`text-4xl p-5 font-bold ${props.titleStye}
                            text-shadow-lg rounded`}>{props.levelTitle}</h1>
            <h2 className="text-lg text-white text-center px-2">{props.description}</h2>
            <p className="mx-10 text-center mb-5">{props.quote}</p>
            <GuessBar items={props.items} key={gameKey} locked={locked} onGuess={handleGuess}/>
        </div>
    );
}

export function EasyMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Easy Mode",
            description: "This is the Easy Mode of the game. Enjoy a relaxed gaming experience!",
            quote: "Guessing a number between 1-10 has never been easier!",
            titleStye:"text-green-500 text-shadow-green-800",
    })
}

export function MediumMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Medium Mode",
            description: "This is the Medium Mode of the game. Test your skills with a moderate challenge!",
            quote: "Guessing a number between 1 and 20 might be tricky!",
            titleStye:"text-yellow-500 text-shadow-yellow-800",
            items: 20
    })
}

export function HardMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Hard Mode",
            description: "This is the Hard Mode of the game. Prepare for a challenging experience!",
            quote: "Guessing a number between 1 and 50 must be a lottery guess!",
            titleStye:"text-red-500 text-shadow-red-800",
            items: 50
    })
}

export function ExtremeMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Extreme Mode",
            description: "This is the Extreme Mode of the game. Get ready for the ultimate challenge!",
            quote: "Guessing a number between 1 and 100 is a nightmare!",
            titleStye:"text-purple-500 text-shadow-purple-800",
            items: 100
    })
}

export default {
    EasyMode,
    MediumMode,
    HardMode,
    ExtremeMode
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
