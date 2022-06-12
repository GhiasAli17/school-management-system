import React from 'react'
import app from '../firebase'
import { getDatabase, ref, set, onValue,push } from "firebase/database";

const db = getDatabase(app);

export  default function School() {

    function writeClick(){

        push(ref(db, 'School' ), {
            name: 'school1',
            message: 'two table required',
        }).then(()=>{
            console.log('school data saved successfully')
        }).catch(err=>{
            console.log('school', err)
        });
    }

    function readClick(){

        const starCountRef = ref(db, 'school');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log('school data', data);
        });

    }
    return(
        <>
            <h1>School panel</h1>
            <button onClick={writeClick}>Write</button> <br />
            <button onClick={readClick}>Read</button>
        </>
    )
}