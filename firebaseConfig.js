// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore';



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
const analytics = getAnalytics(app);
const storage = getStorage();
const db= getFirestore();
const storage = getStorage();
const storageRef = ref(storage);
export {app, analytics, storage, db, storageRef}