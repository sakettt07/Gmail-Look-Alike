// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCsrvJuoczj9fQRukbzn-q_za5gBzFALd8",
  authDomain: "clone-616b3.firebaseapp.com",
  projectId: "clone-616b3",
  storageBucket: "clone-616b3.appspot.com",
  messagingSenderId: "462055182541",
  appId: "1:462055182541:web:fe2df293fa89e6a66a5984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googelprovider=new GoogleAuthProvider(app);