import React from "react";
import {useAuth} from "../contexts/AuthContext";
import {auth} from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Signup(){



    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    function handleSubmit(e){
        e.preventDefault();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

        // createUserWithEmailAndPassword(auth,'ghiasali17@gmail1.com','123456').then(usercredential=>{
        //     const  user = usercredential.user;
        // }).catch(err => {
        //     const  error = err.code;
        //     const message = err.message;
        //     console.log(message);
        // })
    }
    return(
        <div>
            Sign up component <br />
            <button onClick={handleSubmit}>Click Me!</button>

        </div>
    )
}