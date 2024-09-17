// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHQMZTh7RrBd8JIVugWMmIwKwZyyRQUkA",
  authDomain: "greensup2-df443.firebaseapp.com",
  projectId: "greensup2-df443",
  storageBucket: "greensup2-df443.appspot.com",
  messagingSenderId: "681699678251",
  appId: "1:681699678251:web:9b1fde85c78d5684f8726e"
};

// Initialize Fireba

const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app)