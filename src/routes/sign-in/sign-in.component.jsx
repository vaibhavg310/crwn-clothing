import {useEffect} from 'react';
import { getRedirectResult } from 'firebase/auth';

import {  
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth 
  } from "../../utils/firebase/firebase.utils";


import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

  useEffect(() => {
    const logGoogleUser = async () => {
      const response = await getRedirectResult(auth);
    
    if(response){
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    }
    logGoogleUser();
  }, []);

   const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);    
   };

    return (
        <div className='sign-in'>
           <h1>Sign In Page</h1>
              <button onClick = {logGoogleUser}>
                sign in with google Popup
              </button>
              <button onClick = {signInWithGoogleRedirect}>
                sign in with google Redirect
              </button>
              <SignUpForm />
        </div>         
    )
};

export default SignIn;