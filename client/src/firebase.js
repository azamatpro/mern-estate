// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-45dc4.firebaseapp.com",
  projectId: "mern-estate-45dc4",
  storageBucket: "mern-estate-45dc4.appspot.com",
  messagingSenderId: "875071571845",
  appId: "1:875071571845:web:6044e97857c01be4c166ec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
