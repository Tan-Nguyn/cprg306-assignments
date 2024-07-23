"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
    //null sets it so that user is not signed in when they come on
  const [user, setUser] = useState(null);
 
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
 
  //properties of "AuthContext.Provider value" are utilized in page.js
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
 //custom hook that we're using (to use in page.js):
export const useUserAuth = () => {
  return useContext(AuthContext);
};