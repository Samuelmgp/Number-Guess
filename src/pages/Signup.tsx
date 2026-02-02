import { useState } from 'react';

import { createUser } from '../db/firebase_handler';

export default function UserInfo({ navigateTo }: { navigateTo: (to?: string) => void}) {
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const rpassword = formData.get("rpassword") as string;

        // VALIDATE INPUTS
        if (!username || !email || !password || !rpassword) {
            alert("Please fill in all fields!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        //TODO: CREATE USER IN FIREBASE AUTH & FIRESTORE
        if (password === rpassword) {
            // Proceed with user creation
            await createUser(username, email, password).then((result) => {
                console.log("User created:", result?.user.uid);
                if (!result?.user) {setError(true); setErrorMessage("User creation failed."); return;}
                if (!result?.newUser) {setError(true); setErrorMessage("New user data not found."); return;}
                
                if (!error){navigateTo('menu');}
            }).catch((error) => {
                setError(true);
                setErrorMessage(error.message);
                alert("Error creating user: " + errorMessage);
                return;
            });
        } else {
            alert("Password do not match!");
            navigateTo();
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">User Information</h1>
            <form className="flex flex-col items-center mt-4 gap-2" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Username" className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <input type="email" name="email" placeholder="Email" className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <input type="password" name="password" placeholder="Password" minLength={6} className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <input type="password" name="rpassword" placeholder="Re-enter Password" minLength={6} className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <small className="text-sm text-gray-500">Password must be at least 6 characters</small>
                <div className="flex flex-row gap-10">
                    <button 
                        type="button"
                        className="w-20 mt-4 px-4 py-2 bg-orange-500 text-white rounded
                                    transition delay-100 ease-in-out duration-300
                                    hover:bg-orange-600 hover:scale-120" 
                        onClick={() => navigateTo("previous")}>Back</button>
                    <button type="submit"
                        className="w-20 mt-4 px-4 py-2 bg-green-500 text-white rounded
                                    transition delay-100 ease-in-out duration-300
                                    hover:bg-green-600 hover:scale-120">Play</button>
                </div>
            </form>  </div>
    );
}