import React from 'react'
import app from '../firebase'
import { getDatabase, ref, set, onValue } from "firebase/database";

const db = getDatabase(app);

export  default function realtimedatabase() {

    function writeClick(){

        set(ref(db, 'users/admin' ), {
            username: 'ghias',
            email: 'ghias@gmail.com',
            profile_picture : 'abc.com'
        }).then(()=>{
            console.log('data saved successfully')
        }).catch(err=>{
            console.log(err)
        });

    }

    function readClick(){

        const starCountRef = ref(db, 'users/admin');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log('data', data);
        });

    }
    return(
        <>
            <button onClick={writeClick}>Write</button> <br />
            <button onClick={readClick}>Read</button>
        </>
    )
}