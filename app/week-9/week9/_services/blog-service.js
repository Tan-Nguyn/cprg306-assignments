import { addDoc, collection } from "firebase/firestore";
import { db } from "../_utils/firebase";


export async function dbAddBlogPost(userId, blogPostObj) {
    try {
        //defining it as the "users" collection by hardcoding that
        //for this one the structure is: db -> users -> userid -> blog posts -> postid
        const newBlogPostReference = collection(db, "users", userId, "blog-posts");
        //don't need the variable made, for the following, just using for the console log in the following line
        const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
        console.log(newBlogPostPromise.id);
    } catch (error) {
        console.log(error);
    }
}