import { addDoc, collection, doc, getDoc, getDocs, query } from "firebase/firestore";
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

//for retrieving info
export async function dbGetAllPosts(userId, updatePostList){
    try {
        const collectionReference = collection(db, "users", userId, "blog-posts");
        const blogPostQuery = query(collectionReference);
        const querySnapshot = await getDocs(blogPostQuery);
        let blogPostList = [];
        querySnapshot.forEach( (doc) => {
            let thisPost = {
                id: doc.id,
                ...doc.data()
            }
            blogPostList.push(thisPost);
        } );
        //return blogPostList
        updatePostList(blogPostList);
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetPost(userId, postId, updateBlogPost) {
    try {
        const docRef = doc(db, "users", userId, "blog-posts", postId);
        const documentSnapshot = await getDoc(docRef);
        if (documentSnapshot.exists) {
            updateBlogPost( documentSnapshot.data() );
        } else {
            console.log("This post does not exist!");
        }
    } catch (error) {
        console.log(error);
    }
}