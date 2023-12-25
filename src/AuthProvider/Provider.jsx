import React from 'react';
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  GithubAuthProvider,
  
} from "firebase/auth";
// import app from '../Firebase/Firebase.config'
import { app } from "../Pages/Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth (app);
const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    
    // user profile update 
  
     
    const signout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    // const signinWithGoogle = () => {
    //   setLoading(true);
    //   const provider = new GoogleAuthProvider();
    //   return signInWithPopup(auth, provider);
    // };
    // const signinWithGithub = () => {
    //   setLoading(true);
    //   const provider = new GithubAuthProvider();
    //   return signInWithPopup(auth, provider);
    // };
    
  
  const signinWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  
  const signinWithGithub = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
  
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      loading,
      createUser,
      signout,
      signin,
      signinWithGoogle,
      setUser,
      signinWithGithub,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };

export default Provider;