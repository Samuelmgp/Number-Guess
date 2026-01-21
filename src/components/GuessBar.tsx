interface Props {
    items?: number;
    onGuess: (event: any, index: number) => void;
}

export default function GuessBar({items = 10, onGuess}: Props){

    return (
        <div className="px-10 h-1/3 grid grid-cols-10 gap-12 
                        flex-wrap justify-self-center items-center
                        max-sm:gap-6  max-sm:grid-cols-5           
                        max-md:gap-8
                        max-lg:gap-10
                        mb-15">
            {Array.from({length: items}, (_, i) => (
                <div className="flex flex-col items-center gap-2" key={i}>
                    <button className="w-7 h-7 bg-gray-400 rounded-full cursor-pointer"
                    onClick={(event) => onGuess(event, i)}
                    id={`guess-${i}`}/>
                    <p>{i+1}</p>
                </div>
            ))}
        </div>
    )
}