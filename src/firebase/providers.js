import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

  try {

    const result = await signInWithPopup( FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid} =  result.user;

    return {
      ok: true,
      //User info
      displayName,
      email,
      photoURL,
      uid,
    }

    
  } catch (error) {

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    }
    
  }

}

export const registerUserWithEmailAndPassword = async( {email, password, displayName} ) => {

  try {

    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );

    console.log(resp)
    
  } catch (error) {

    return { ok: false, errorMessage: error.message};
    
  }

}