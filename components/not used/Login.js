import React, {useState} from 'react'
import Link from 'next/link'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebaseConfig'
function Login() {
    
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
const signinUser = () =>{  
    const auth = getAuth();
signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}
    return (
    <div className="justify-center flex h-screen items-center bg-gradient-to-br from-white to-gray-600">
        <div className="h-auto justify-center rounded-2xl w-screen shadow-lg md:w-2/3 bg-gradient-to-t from-gray-800 via-gray-600 to-gray-500">
            <div className="text-3xl text-black text-center font-bold shadow-md h-15 bg-yellow-400 p-2 rounded-t-2xl mt-0">Please Login To Use All Features</div>
            <div className=" mx-auto">
                <input 
                className=" mx-auto w-3/4 m-5 p-2 flex bg-green-100 rounded-3xl placeholder-yellow-400 "
                placeholder="Email"
                type="text" 
                onChange={e => setEmail(e.target.value)} 
                />
            </div>
            <div>
            <input 
                className="mx-auto w-3/4 m-5 p-2 flex bg-green-100 rounded-3xl placeholder-yellow-400  "
                placeholder="Password"
                type="password" 
                onChange={e => setPassword(e.target.value)} 
                />
            </div>
           <Link href="/" passHref>
           <div className="flex justify-center">
                <button 
            className="rounded-xl flex text-black text-2xl font-bold justify-center py-3 w-3/4 px-5 bg-gradient-to-t from-yellow-500 to-yellow-400 shadow-lg"
            type="submit"
            onClick={signinUser}
            >Login</button>
            </div>
            </Link>
            <Link href="/signup" passHref>
                <div className="text-white text-center font-bold m-2 cursor-pointer text-xl">Create Account</div>
            </Link>

        </div>
    </div>
    )
}

export default Login
