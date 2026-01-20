import type { User } from "../types/types";
import random from "../utils/random";
import { getUserData } from "../db/user_data";
import GuessBar from "../components/GuessBar";
import type { BaseSyntheticEvent } from "react";

const user: User | null = getUserData();

function handleOnGuess(index: number, number: number){
    return index === number;
}

function handleSelection(event: BaseSyntheticEvent, index: number, number: number){
    const hit = handleOnGuess(index + 1, number)
    const btn = event.currentTarget as HTMLButtonElement;
    
    btn.disabled = true;

    if (hit){
        btn.classList.remove("bg-gray-400")
        btn.classList.add("bg-green-400")
    }else {
        btn.classList.remove("bg-gray-400")
        btn.classList.add("bg-red-400")
    }
}

export function EasyMode() {
    const number = random(1, 10)

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-green-500 text-shadow-green-800 text-shadow-lg rounded">Easy Mode</h1>
            <h2 className="text-lg text-white">This is the Easy Mode of the game. Enjoy a relaxed gaming experience!</h2>
            <p>Guessing a number between 1-10 has never been easier!</p>
            <div>
                <GuessBar onGuess={(e, index) => handleSelection(e, index, number)}/>
            </div>
        </div>
    );
}

export function MediumMode() {
    const number = random(1, 20)

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-yellow-500 text-shadow-yellow-800 text-shadow-lg rounded">Medium Mode</h1>
            <h2 className="text-lg text-white">This is the Medium Mode of the game. Test your skills with a moderate challenge!</h2>
            <p>Guessing a number between 1 and 20 might be tricky!</p>
            <div>
                <GuessBar items={20} onGuess={(e, index) => handleSelection(e, index, number)}/>
            </div>
        </div>
    );
}

export function HardMode() {
    const number = random(1, 50)

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-red-500 text-shadow-red-800 text-shadow-lg rounded">Hard Mode</h1>
            <h2 className="text-lg text-white">This is the Hard Mode of the game. Prepare for a challenging experience!</h2>
            <p>Guessing a number between 1 and 50 must be a lottery guess!</p>
            <div>
                <GuessBar items={50} onGuess={(e, index) => handleSelection(e, index, number)}/>
            </div>
        </div>
    );
}

export function ExtremeMode() {
    const number = random(1, 100)

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <h1 className="text-4xl p-5 font-bold text-purple-500 text-shadow-purple-800 text-shadow-lg rounded">Extreme Mode</h1>
            <h2 className="text-lg text-white">This is the Extreme Mode of the game. Get ready for the ultimate challenge!</h2>
            <p>Guessing a number between 1 and 100 is a nightmare!</p>
            <div>
                <GuessBar items={100} onGuess={(e, index) => handleSelection(e, index, number)}/>
            </div>
        </div>
    );
}

export default {
    EasyMode,
    MediumMode,
    HardMode,
    ExtremeMode
}