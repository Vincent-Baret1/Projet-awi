import firebase from 'firebase/compat/app';
import { auth } from './firebase';

    
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