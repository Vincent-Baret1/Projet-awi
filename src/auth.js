import firebase from 'firebase/compat/app';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { useNavigate } from "react-router-dom";
    
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error){
        var errorCode = error.code;
        var errorMsg = error.message;
        console.log({errorMsg});
        console.log({error});
        throw "Error login"
      });
}

export const logout = () => {
  auth.signOut();
};