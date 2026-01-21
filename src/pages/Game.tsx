import type { User } from "../types/types";
import random from "../utils/random";
import { getUserData } from "../db/user_data";
import GuessBar from "../components/GuessBar";
import type { BaseSyntheticEvent } from "react";

const user: User | null = getUserData();

function handleOnGuess(index: number, number: number){
    return index === number;
}

interface GameProps {
    navigateTo: (to?: string) => void;
    levelTitle: string;
    description: string;
    quote: string;
    items?: number | 10;
    titleStye?: string;
}

async function handleSelection(event: BaseSyntheticEvent, index: number, number: number, navigateTo: (to?: string) => void){
    const hit = handleOnGuess(index + 1, number)
    const btn = event.currentTarget as HTMLButtonElement;
    
    btn.disabled = true;

    if (hit){
        btn.classList.remove("bg-gray-400")
        btn.classList.add("bg-green-400")
        btn.classList.add("animate-bounce");
        await delay(5000)
        navigateTo("previous")
    }else {
        btn.classList.remove("bg-gray-400")
        btn.classList.add("bg-red-400")
    }
}

function GameTemplate(props: GameProps){
    const number = random(1, props.items!);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10
                        overflow-y-auto">
            <div className="flex flex-row gap-4">
                <button onClick={() => props.navigateTo("previous")} className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-semibold">
                    Return to Menu
                </button>
                <button onClick={() => props.navigateTo()} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold">
                    Reset Game
                </button>
            </div>
            <h1 className={`text-4xl p-5 font-bold text-${props.titleStye ? props.titleStye : "gray"}-500 
                            text-shadow-${props.titleStye ? props.titleStye : "gray"}-800 
                            text-shadow-lg rounded`}>{props.levelTitle}</h1>
            <h2 className="text-lg text-white text-center px-2">{props.description}</h2>
            <p className="mx-10 text-center">{props.quote}</p>
            <GuessBar items={props.items} onGuess={(e, index) => handleSelection(e, index, number, props.navigateTo)}/>
        </div>
    );
}

export function EasyMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Easy Mode",
            description: "This is the Easy Mode of the game. Enjoy a relaxed gaming experience!",
            quote: "Guessing a number between 1-10 has never been easier!",
            titleStye:"green"
    })
}

export function MediumMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Medium Mode",
            description: "This is the Medium Mode of the game. Test your skills with a moderate challenge!",
            quote: "Guessing a number between 1 and 20 might be tricky!",
            titleStye:"yellow",
            items: 20
    })
}

export function HardMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Hard Mode",
            description: "This is the Hard Mode of the game. Prepare for a challenging experience!",
            quote: "Guessing a number between 1 and 50 must be a lottery guess!",
            titleStye:"red",
            items: 50
    })
}

export function ExtremeMode({ navigateTo }: { navigateTo: (to?: string) => void }) {
    return GameTemplate({
            navigateTo,
            levelTitle: "Extreme Mode",
            description: "This is the Extreme Mode of the game. Get ready for the ultimate challenge!",
            quote: "Guessing a number between 1 and 100 is a nightmare!",
            titleStye:"purple",
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
