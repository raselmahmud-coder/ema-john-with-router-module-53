// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC640_xmvPiE3xASLMfnkJVy4_r915HKaM",
  authDomain: "ema-john-simple-9575e.firebaseapp.com",
  projectId: "ema-john-simple-9575e",
  storageBucket: "ema-john-simple-9575e.appspot.com",
  messagingSenderId: "372660482376",
  appId: "1:372660482376:web:1ee819940fe703cb25037d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };