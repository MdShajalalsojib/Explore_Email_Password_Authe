// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// DANGER: Do not push comfig to public 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkJv_z9A7Me76qGs2IOpmTyU6C6kQ5NuA",
  authDomain: "explore-email-password-authe.firebaseapp.com",
  projectId: "explore-email-password-authe",
  storageBucket: "explore-email-password-authe.firebasestorage.app",
  messagingSenderId: "679853123821",
  appId: "1:679853123821:web:2d209160a24255682a04e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 