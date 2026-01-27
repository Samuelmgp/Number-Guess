import { createUser } from '../db/user_data.ts';

export default function UserInfo({ navigateTo }: { navigateTo: (to?: string) => void}) {
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const age = formData.get("age") as unknown as number;

        createUser(name, age);
        
        console.log("User created:", name, age);

        navigateTo();
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">User Information</h1>
            <form className="flex flex-col items-center mt-4 gap-2" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Username" className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                    <input type="number" name="age" placeholder="Age" className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <div className="flex flex-row gap-10">
                    <button 
                    className="w-20 mt-4 px-4 py-2 bg-orange-500 text-white rounded
                                transition delay-100 ease-in-out duration-300
                                hover:bg-orange-600 hover:scale-120" 
                    onClick={() => navigateTo("previous")}>Back</button>
                    <button type="submit"
                    className="w-20 mt-4 px-4 py-2 bg-green-500 text-white rounded
                                transition delay-100 ease-in-out duration-300
                                hover:bg-green-600 hover:scale-120" 
                    onClick={() => navigateTo()}>Play</button>
                </div>
            </form>
        </div>
    );
}