// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcY_0pPCePi9my6Tzeh-Sq76s-quE_iz0",
    authDomain: "internarea-a9017.firebaseapp.com",
    projectId: "internarea-a9017",
    storageBucket: "internarea-a9017.appspot.com",
    messagingSenderId: "508690532214",
    appId: "1:508690532214:web:3dfec41edc016c01029c57",
    measurementId: "G-PR8BXJ3HDB"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}