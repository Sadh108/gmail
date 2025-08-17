
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCnBjXgEfDMbL5ErRB-E0Emhh2Qgd5rXxc",
  authDomain: "clone-yt-46070.firebaseapp.com",
  projectId: "clone-yt-46070",
  storageBucket: "clone-yt-46070.appspot.com",
  messagingSenderId: "81360867061",
  appId: "1:81360867061:web:fa683ae0327f07e54d7fbc",
  measurementId: "G-LYTGS2WKBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
