import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,} from 'firebase/auth';
import{getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC78ed4w-3nmQG4OdZYzabMG6p4LdURmCk",
    authDomain: "crwn-clothing-db-reactcourse.firebaseapp.com",
    projectId: "crwn-clothing-db-reactcourse",
    storageBucket: "crwn-clothing-db-reactcourse.appspot.com",
    messagingSenderId: "438621870277",
    appId: "1:438621870277:web:2903d74128e2227fe9f8ac"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){ 
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
            
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }
    return userDocRef;
}