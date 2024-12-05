// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl5RhU8rNuX-MsuLOPQg97qtWmuq7CXe0",
  authDomain: "equisports-d7611.firebaseapp.com",
  projectId: "equisports-d7611",
  storageBucket: "equisports-d7611.firebasestorage.app",
  messagingSenderId: "1006032060107",
  appId: "1:1006032060107:web:904c8b2e5fee7180c2a54e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;