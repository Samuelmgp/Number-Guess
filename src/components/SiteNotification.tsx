export function ErrorMessage({ msg }: {msg: string}){
    return (
        <div className="container flex flex-col justify-center
                        bg-zinc-800 
                        items-center p-8 rounded-lg 
                        shadow-2xl border border-red-700">
            <h1 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-2">
            <span className="text-4xl">⛔️</span>
            Content Error
            <span className="text-4xl">⛔️</span>
            </h1>
            <span className="flex flex-row gap-3 items-start overflow-hidden bg-zinc-900 p-4 rounded-md border-l-4 border-red-500 w-full">
            <h2 className="text-lg font-semibold shrink-0 text-red-300">Details:</h2>
            <p className="text-base text-zinc-200 break-words">{msg}</p>
            </span>
        </div>
    )
}

export function WarningMessage({msg}: {msg: string}){
    return (
        <div className="container flex flex-col justify-center 
                        bg-zinc-800 items-center p-8 rounded-lg 
                        shadow-2xl border border-yellow-700">
            <h1 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center gap-2">
            <span className="text-4xl">⚠️</span>
            Warning
            <span className="text-4xl">⚠️</span>
            </h1>
            <span className="flex flex-row gap-3 items-start overflow-hidden bg-zinc-900 p-4 rounded-md border-l-4 border-yellow-500 w-full">
            <h2 className="text-lg font-semibold shrink-0 text-yellow-300">Details:</h2>
            <p className="text-base text-zinc-200 break-words">{msg}</p>
            </span>
        </div>
    )
}

export default {
    ErrorMessage,
    WarningMessage
}