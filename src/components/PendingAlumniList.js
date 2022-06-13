import React, {useState,useEffect} from 'react'
import app from '../firebase'
import { getDatabase, ref, set, onValue,push,update } from "firebase/database";

const db = getDatabase(app);

export default function PendingAlumniList(){
    const [check,setCheck] =  useState(false);
      const [list,setList] = useState([]);
     // const list = [];
    const starCountRef = ref(db, 'users/alumni');

    const approveClickHandler = () =>{
        console.log('called on button click')
        update(ref(db,'users/alumni/N4O3HBpdeNuRRTIbMh7'),{
            approve:true
        })

    }
        // Update the document title using the browser API
    useEffect(()=>{
        onValue(starCountRef, (snapshot) => {
            console.log('onValue called')
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                console.log('child data', childData)
                // list.push(childSnapshot.val())
                 setList([...list,childData])
                console.log('loop',list)
                // ...
            });
             setCheck(true)
            console.log('data',snapshot.val())
        }, {
            onlyOnce: false
        });

    },[check])

      //  setList1(list)
    if(!check)
        return <div>Loading...</div>
    else
    return(
        <div>
            Alumni Pending List{console.log('list below', list)}

            <button>List</button>
            <ul>
                {list.map((item,ind)=><li key={ind}>{item.email}<button onClick={()=>{approveClickHandler()}}>Approve</button></li>)}
            </ul>
        </div>
    )
}