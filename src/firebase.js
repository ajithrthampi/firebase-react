
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCcQ_jHX21Krc7oEJETydbsSIDNzmkdc_0",
  authDomain: "react-authentication-5b432.firebaseapp.com",
  projectId: "react-authentication-5b432",
  storageBucket: "react-authentication-5b432.appspot.com",
  messagingSenderId: "409009885967",
  appId: "1:409009885967:web:a3d965147ee4b15b76a47a",
  measurementId: "G-VTRW705LYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app;