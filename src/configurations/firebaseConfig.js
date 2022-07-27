// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAkbXUwkIG4TBSnJW2xkHNKwtbN-cc6EWw",
  authDomain: "tienda-aldo.firebaseapp.com",
  projectId: "tienda-aldo",
  storageBucket: "tienda-aldo.appspot.com",
  messagingSenderId: "13840066019",
  appId: "1:13840066019:web:ef1bd7490036316d19ecd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);