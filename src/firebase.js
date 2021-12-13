// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "@firebase/app-compat";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNVAe9zs98vvfcxxXkf2nbO4pAMWOx7mg",
  authDomain: "projet-awi.firebaseapp.com",
  projectId: "projet-awi",
  storageBucket: "projet-awi.appspot.com",
  messagingSenderId: "511690745437",
  appId: "1:511690745437:web:a9f9c181a95875e4010fb4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();