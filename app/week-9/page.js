"use client";

import { useUserAuth } from "./_utils/auth-context"
import Link from "next/link";


export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <main>
            { user ? (
                <section>
                    <div>
                        <p>Welcome, {user.displayName}</p>
                    </div>
                    <div>
                        <button 
                        type="button" 
                        onClick={handleSignOut} 
                        className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer">
                            Sign Out
                        </button>
                    </div>
                    <div>
                        <Link href='./week-9/shopping-list'>Shopping List</Link>
                    </div>
                </section>
            ) : (
                <section>
                    <button 
                    type="button" 
                    onClick={handleSignIn} 
                    className="text-lg bg-blue-500 text-white rounded px-2 py-1 mt-4 hover:bg-blue-600 cursor-pointer">
                        Sign In with GitHub
                    </button>
                </section>
            ) }
        </main>
    );
}