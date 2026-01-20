interface Props {
    items?: number;
    onGuess: (event: any, index: number) => void;
}

export default function GuessBar({items = 10, onGuess}: Props){

    return (
        <div className="flex flex-row gap-5 flex-wrap justify-center items-center ml-22 mr-22">
            {Array.from({length: items}, (_, i) => (
                <div className="flex flex-col items-center gap-2" key={i}>
                <button className="h-5 w-5 bg-gray-400 rounded-full"
                onClick={(event) => onGuess(event, i)}
                id={`guess-${i}`}/>
                <p>{i+1}</p>
                </div>
            ))}
        </div>
    )
}