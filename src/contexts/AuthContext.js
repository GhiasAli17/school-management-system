import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext =  React.createContext();
export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();

    function signup(email,password){
        return createUserWithEmailAndPassword(email,password);
    }

    const value = {
        currentUser,
        signup
    }

    useEffect(()=>{
        const unsubsriber = auth.onAuthStateChanged(user=>{
            setCurrentUser((user))
        })

        return unsubsriber;
    },[])
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}