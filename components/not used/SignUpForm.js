import React, { useState } from "react";
import Link from 'next/link'
import { getFirestore, collection, addDoc, setDoc, doc  } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, updateProfile, getIdToken } from "@firebase/auth";
import app from '../../firebaseConfig'


const db = getFirestore(app)

function SignUpForm() {
 
    const colRef = collection(db, 'userAccount')
    const [DisplayName, setDisplayName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Confirm, setConfirm] =useState('');


    

    const createNewUser = async (e) => { e.preventDefault()
       if (Password = Confirm); 
       const auth = getAuth();
        await createUserWithEmailAndPassword(auth, Email, Password)
        .then((UserCredentials) => {
            const NewUser = UserCredentials
            const User = NewUser.user
            if (User){
            addDoc(colRef, {
                displayName: DisplayName,
                email: Email,
                uuid: User.uid,
            })
            
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
        updateProfile(auth.currentUser, {
            displayName: DisplayName,
        }).catch((error) => {
            console.log('TROUBLE Updating USER')
        }
    )
        
    }   else {
        console.log("Trouble in Paradise, Please Try again")
    }; 
    
})
}



  
  return (
      <div className="justify-center flex h-screen items-center bg-gradient-to-br from-white to-gray-800">
      <form className="w-screen  md:w-2/3 bg-gradient-to-t from-gray-800 via-gray-600 to-gray-500 a box-border m-4 p-4 shadow-lg rounded-2xl">
        <div className="tshadow text-xl md:text-2xl text-black rounded-lg text-center mb-4  p-4 font-bold bg-yellow-300 shadow-lg ">Create A New Account</div>
        <div className=" flex justify-items-start">
          <input
            className=" w-full p-2 pl-4 bg-gradient-to-tr from-gray-100 to-gray-300 rounded-3xl hover:scale-105 "
            placeholder="Display Name"
            name="DisplayName"
            type="text"
            required={true}
            onChange={e => setDisplayName(e.target.value)}
          />
        </div>
       
       
        <div className=" flex justify-center mt-6">
          <input
            className=" w-full p-2 pl-4 bg-gradient-to-tr from-gray-100 to-gray-300 rounded-3xl hover:scale-105 "
            placeholder="Email"
            name="Email"
            type="email"
            required={true}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className=" flex justify-center mt-6">
          <input
            className=" w-full p-2 pl-4 bg-gradient-to-tr from-gray-100 to-gray-300 rounded-3xl hover:scale-105 "
            placeholder="Password"
            name="Password"
            type="password"
            required={true}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-center mt-6">
          <input
            className=" w-full p-2 pl-4 bg-gradient-to-tr from-gray-100 to-gray-300 rounded-3xl hover:scale-105 "
            placeholder="Confirm Password"
            name="Confirm"
            type="password"
            required={true}
            onChange={e => setConfirm(e.target.value)}
          />
        </div>
        <Link href='/' passHref>
        <div className="flex justify-center">
            <button className="mt-5  p-3 rounded-2xl bg-gradient-to-b from-yellow-400 shadow-lg to-yellow-600 mx-auto text-black font-semibold hover:scale-105 " 
            type="submit" onClick={createNewUser} >Creat Account</button>
        </div>
        </Link>
            <Link href="/login" passHref>
            <p className="text-white mt-2 text-xl cursor-pointer text-center hover:scale-110">Login</p>
            </Link>
      </form>
    </div>
  );
}

export default SignUpForm;
