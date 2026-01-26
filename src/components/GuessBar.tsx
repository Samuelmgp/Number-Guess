import { useState } from "react";

interface Props {
    items?: number;
    locked: boolean;
    onGuess: (index: number) => "hit" | "miss";
}

export default function GuessBar({items = 10, locked, onGuess}: Props){
    const [results, setResults] = useState<Record<number, "hit" | "miss">>({});

    function handleClick(index: number){
        if(locked || results[index]) return;
        const result = onGuess(index);
        setResults(prev => ({...prev, [index]: result}));
    }

    return (
        <div className="px-10 grid grid-cols-10 gap-12 
                        flex-wrap justify-self-center items-center
                        max-sm:gap-6  max-sm:grid-cols-5           
                        max-md:gap-8
                        max-lg:gap-10 mb-20
                        h-3/5 overflow-y-auto">
            {Array.from({length: items}, (_, i) => (
                <div className="flex flex-col items-center gap-2" key={i}>
                    <button 
                    className={`w-7 h-7 rounded-full cursor-pointer
                                ${results[i] === "hit" && "bg-green-400 animate-bounce"}
                                ${results[i] === "miss" &&  "bg-red-400"}
                                ${!results[i] && "bg-gray-400 hover:bg-gray-500 "}
                            `}
                    onClick={() => handleClick(i)}
                    id={`guess-${i}`}/>
                    <p>{i+1}</p>
                </div>
            ))}
        </div>
    )
}