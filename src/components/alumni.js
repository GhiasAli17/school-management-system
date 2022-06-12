import React from 'react'
import app from '../firebase'
import { getDatabase, ref, set, onValue } from "firebase/database";

const db = getDatabase(app);

export  default function realtimedatabase() {

    function writeClick(){

        set(ref(db, 'users/alumni' ), {
            username: 'anees',
            email: 'anees@gmail.com',
            profile_picture : 'abc.com'
        }).then(()=>{
            console.log('data saved successfully')
        }).catch(err=>{
            console.log(err)
        });
    }

    function readClick(){

        const starCountRef = ref(db, 'users/alumni');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log('data', data);
        });

    }
    return(
        <>
            <h1>Alumni Pannel</h1>
            <button onClick={writeClick}>Write</button> <br />
            <button onClick={readClick}>Read</button>
        </>
    )
}