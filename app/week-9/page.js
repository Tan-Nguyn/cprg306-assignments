"use client"

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { dbGetAllPosts } from "./_services/blog-service";

export default function SignInPage(){
    //calls custom hook
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    //have to use function to handle the sign in and sign out
    async function handleSignIn(){
        try {
            await gitHubSignIn()
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut()
        } catch (error) {
            console.log(error);
        }
    }

    const [blogPostList, setBlogPostList] = useState([]);
    useEffect( () => {
        if(user){
            dbGetAllPosts(user.uid, setBlogPostList); 
        }
    }, [user]);
    //console.dir(user);

    //"{user ? () : () }" single line if statement essentially (if user exists "user ?"" then "()" if not (:), then the second "()")
    return(
        <main>
            <header>
                <h1 className="text-3xl">Firebase Auth</h1>
                <p>
                        <Link href="/week8/protected/">Protected Page</Link>
                </p>
            </header>
            {user ? (
                //user IS logged in
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p>{user.email}</p>
                    <img className="w-8 h-8" src={user.photoURL} />
                    <p>
                        <Link href="/week9/add-blog-post/">Add a New Blog Post</Link>
                    </p>
                    <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                    <section>
                        <h2>My Blog post</h2>
                        <ul>
                            {
                                blogPostList.map((post) => {
                                    let postUrl = '/week10/${post.id}' ;
                                    return <li key = {post.id}><Link href={postUrl}>{post.title}</Link></li>

                                })
                            }
                        </ul>
                    </section>
                </div>
            ) : (
                //user IS NOT logged in
                <div>
                    <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>
                </div>
            ) }

        </main>

    );
}