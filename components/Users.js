import React, { useState } from 'react';
import { onAuthStateChanged  } from 'firebase/auth';
import {auth} from '../firebaseConfig';

function Users({displayName, selected}) {
const [UserState, setUserState] = useState(false)
const [Selected, setSelected]= useState("")

const SelectItem = () => setSelected(displayName)
 
    const UserLoginCheck =() =>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserState(true)
        } else {
           console.log({displayName}, "offline") 
        }
    })
}
UserLoginCheck();



    return (


        <div className="flex w-3/4 m-4 rounded-full bg-white shadow-lg p-2 cursor-pointer">
                <div className="text-center text-black text text-md font-semibold" onClick={selected}>{displayName}</div>
                {UserState ? <div className=" rounded-full ml-8 shadow-md text-sm  h-5 w-5 bg-gradient-to-tr from-green-600 to-green-400"></div>
                : <div className="round-full shadow-lg text-sm  h-10 w-10 bg-gradient-to-tr from-red-600 to-red-400">Offline</div>}
        </div>
    
    
    
    )
}

export default Users
