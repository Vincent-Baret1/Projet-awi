// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "@firebase/app-compat";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from '@firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB6OPSVE2B86PDuvo5niklt_j4JbOgPANU",

  authDomain: "projet-awi-d0535.firebaseapp.com",

  projectId: "projet-awi-d0535",

  storageBucket: "projet-awi-d0535.appspot.com",

  messagingSenderId: "260340423956",

  appId: "1:260340423956:web:2b7575dc24cd64bdc0f601"

};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;



export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth (), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}