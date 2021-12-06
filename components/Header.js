import React, { Fragment } from 'react'
import {BellIcon, ChatAlt2Icon, GlobeAltIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/outline'
import { Fade } from "react-awesome-reveal"
import Link from 'next/link'
import {  } from '../lib/getUser'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function googleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }






    export default function Header() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
          // The user object has basic properties such as display name, email, etc.
          const displayName = user.displayName;
          const email = user.email;
          const photoURL = user.photoURL;
          const emailVerified = user.emailVerified;
        
          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          const uid = user.uid;
        }
    
    return (
<Fragment>
    <Fade triggerOnce>
            
            <div className="bg-opacity-70 fixed top-0 z-300 bg-gradient-to-t from-gray-700 to-gray-900 flex items-center p-2 w-full lg:px-5 shadow-md">
                <Link href="/">
                   <a className="font-bold text-white text-medium lg:text-lg">[Dev-/-folio]</a>
                </Link>
            <div className="hidden md:inline-flex ml-20 items-center rounded-full  bg-gray-100  pr-6 flex-shrink">
                    <SearchIcon className="text-blue-400 pl-1 h-6"/>
                <input className=" inline-flex bg-transparent rounded-full focus-within:text-blue-600 outline-none placeholder-gray-400  pb-1 pl-4 m-2 pr-4"/>
            </div>
                <div className="justify-end flex flex-grow" >
                <p className="text-white flex items-center ml-10">Notifications</p>    
                <BellIcon className="h-10 w-10 items-center text-white"/>
                <p className="text-white flex items-center ml-10">Take Flight</p>    
                <GlobeAltIcon className="h-10 w-10 items-center text-white"/>
                <p className="text-white flex items-center ml-10">Chat-App</p>    
                <ChatAlt2Icon className="h-10 w-10 items-center text-white"/>
                 { user ? <p className="text-white flex items-center ml-10">Log out</p> : <p className="text-white flex items-center ml-10">Login</p>}
                { user ? <UserCircleIcon className="text-green-500 items-center  h-10 w-10 " onClick={googleLogin}/>:
                 <UserCircleIcon className="text-red-500 items-center  h-10 w-10 " onClick={googleLogin}/> }
                </div>
                
        </div>
        </Fade>
      
    </Fragment>
    )
}


