import React from 'react'
import app from '../firebase'
import { getDatabase, ref, set, onValue,push } from "firebase/database";

const db = getDatabase(app);

export  default function alumni() {

    function writeClick(){

        push(ref(db, 'users/alumni' ), {
            username: 'anees',
            email: 'anees@gmail.com',
            profile_picture : 'abc.com',
            approve: false
        }).then(()=>{
            console.log('alumni data saved successfully')
        }).catch(err=>{
            console.log('alumni', err)
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