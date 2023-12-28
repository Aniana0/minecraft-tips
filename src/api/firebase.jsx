import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

// 로그인 정보 유지
export function onUserState(callback){
  onAuthStateChanged(auth, async(user)=>{
    try{
      if(user){
        sessionStorage.setItem("user", user)
        callback(user);
      }else{
        sessionStorage.removeItem("user")
        callback(null);
      }
    }catch(err){
      console.log(err);
    }
  })
};

// Sign in
export async function signupWithEmail(email, password){
  try{
    const userCredit = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredit.user;
    return user;
  }catch(err){
    console.error(err);
  }
};

// Log in
export async function loginWithEmail(email, password){
  try{
    const userCredit = await signInWithEmailAndPassword(auth, email, password);
    return userCredit.user;
  }catch(err){
    console.error(err);
  }
};

// Log out
export async function logout(){
  try{
    await signOut(auth);
  }catch(err){
    console.error(err);
  }
};

// Update profile
export async function updateUserProfile(setting_values){
  try{
    await updateProfile(auth.currentUser, setting_values);
  }catch(err){
    console.error(err);
  }
}