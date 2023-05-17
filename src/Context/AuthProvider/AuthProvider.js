import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'


export const AuthContext = createContext();
const Auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
// Create User
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(Auth,email,password)
    }

    const authInfo = {
        user,
        loading,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;