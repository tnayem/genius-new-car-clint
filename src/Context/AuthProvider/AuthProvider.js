import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'


export const AuthContext = createContext();
const Auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
// Create User
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password)
    }
// Log In
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(Auth,email,password)
    }
    // Auth State Change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(Auth,(currentUser)=>{
         console.log(currentUser);
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>{
             unsubscribe()
         }
     },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        logIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;