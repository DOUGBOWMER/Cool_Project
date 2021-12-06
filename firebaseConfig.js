// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from '@firebase/firestore';
import { getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDo1ohiXMp5RzoxU43ptyEXkBLdA5MZSNk",
  authDomain: "dev-folio-2d03a.firebaseapp.com",
  projectId: "dev-folio-2d03a",
  storageBucket: "dev-folio-2d03a.appspot.com",
  messagingSenderId: "526001926002",
  appId: "1:526001926002:web:23819f254df315f79277eb",
  measurementId: "G-3J9QXP268F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const db= getFirestore();
const storageRef = ref(storage);
const auth = getAuth()
export {app, storage, db, storageRef, auth}