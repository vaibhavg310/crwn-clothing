import {initializeApp} from 'firebase/app';


import {getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,  
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged
  } 
   from 'firebase/auth';


import{getFirestore,
   doc,
    getDoc,
    setDoc} from 'firebase/firestore';

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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
  
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
   userAuth,
   additinalInformation = {}
   ) => {

    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){ 
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additinalInformation
            });
            
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
 
export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
 