import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB89nw9fKMZcvT5DxRZ0WcCij6bOxKKJhc",
  authDomain: "pr-13--authentication.firebaseapp.com",
  projectId: "pr-13--authentication",
  storageBucket: "pr-13--authentication.appspot.com",
  messagingSenderId: "1026974853251",
  appId: "1:1026974853251:web:ee7860e9252710ec5e93b6",
  measurementId: "G-N8MDTMY1VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const googleAuth = new GoogleAuthProvider();