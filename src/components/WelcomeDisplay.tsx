export default function WelcomeDisplay({ launchGame }: { launchGame?: () => void }) {
    
    
    function handlePlay() {
        const mainDiv = document.getElementById('mainDiv');

        mainDiv?.classList.remove('opacity-0');
        console.log("Play button clicked");
        launchGame?.();
    }

    return (
        <div id="mainDiv" className='flex flex-col items-center justify-center h-screen gap-4 transition-opacity duration-500 opacity-0 hover:opacity-100'>
            <h1 className="text-5xl font-bold">Welcome to Number Guess!</h1>
            <button id="playButton" className='px-6 py-2 text-2xl bg-green-500 rounded-lg hover:bg-green-600' onClick={handlePlay}>Play</button>
        </div>
    )   
}