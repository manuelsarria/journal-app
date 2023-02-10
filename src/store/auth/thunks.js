import { async } from "@firebase/util";
import { registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout} from "./";
import { login } from "./authSlice";


export const checkingAuthentication = ( email, Password ) => {
  return async( dispatch ) => {

    dispatch( checkingCredentials() );

  }
}

export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const result = await signInWithGoogle();
    if ( !result.ok ) return  dispatch( logout( result.errorMessage ) );
    delete result.ok;
    dispatch( login( result ));

  }
}

export  const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

  return async( dispatch ) => {

    dispatch( checkingCredentials );

    const resp = await registerUserWithEmailAndPassword({ email, password, displayName });

  }
}
