  import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
   const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    
   }

    return (
        <div className='sign-in'>
           <h1>Sign In Page</h1>
              <button onClick = {logGoogleUser}>
                sign in with google Popup
              </button>
        </div>         
    )
};

export default SignIn;