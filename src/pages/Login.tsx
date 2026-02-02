import { useState } from "react";
import { attemptLogin } from "../db/firebase_handler";

export default function Login({ navigateTo }: { navigateTo: (to?: string) => void}) {
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // VALIDATE INPUTS
        if (!email || !password) {
            alert("Please fill in all fields!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }
        try {
            // ATTEMPT LOGIN
            const loginResponse = await attemptLogin(email, password);
            if (loginResponse) {
                navigateTo("menu");
            }       
        } catch (err) {
            // HANDLE LOGIN ERROR
            setError(true);
            setErrorMessage("Login failed. Please check your credentials and try again.");
            if (error) {
                alert(errorMessage);
            }
        }
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Login</h1>
            <form className="flex flex-col items-center mt-4 gap-2" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <input type="password" name="password" placeholder="Password" minLength={6} className="ml-2 border border-gray-300 rounded px-2 py-1" required/>
                <div className="flex flex-row gap-10">
                    <button 
                        type="button"
                        className="w-20 mt-4 px-4 py-2 bg-blue-500 text-white rounded
                                   transition delay-100 ease-in-out duration-300 
                                   hover:bg-blue-600 hover:scale-110 cursor-pointer" 
                        onClick={() => navigateTo("signup")}>Signup</button>
                    <button 
                        type="button"
                        className="w-20 mt-4 px-4 py-2 bg-orange-500 text-white rounded
                                    transition delay-100 ease-in-out duration-300 
                                    hover:bg-orange-600 hover:scale-110 cursor-pointer" 
                        onClick={() => navigateTo("menu")}>Guest</button>
                    <button 
                        type="submit"
                        className="w-20 mt-4 px-4 py-2 bg-green-500 text-white rounded
                                   transition delay-100 ease-in-out duration-300 
                                   hover:bg-green-600 hover:scale-110 cursor-pointer">Login</button>
                </div>
            </form>
        </div>
    );  
}