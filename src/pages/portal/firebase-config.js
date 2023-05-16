import {useState, useEffect} from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import '@firebase/firestore-compat'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VuUk4VHX5KekR_2BgYYeaNiCs2BF3sM",
  authDomain: "flight-speed-d21f3.firebaseapp.com",
  projectId: "flight-speed-d21f3",
  storageBucket: "flight-speed-d21f3.appspot.com",
  messagingSenderId: "920307192082",
  appId: "1:920307192082:web:a71b4e7a87f9b45c3da3cb",
  measurementId: "G-E9NGXC91VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

 export function logout(){
    	return signOut(auth);
    }

// Custom Hook

export function useAuth(){
	const [currentUser, setCurrentUser] = useState();
    


    useEffect(()=>{
    	const unsub = onAuthStateChanged(auth, user=>setCurrentUser(user));
    	return unsub;
    
    },[])

	return currentUser;
}
