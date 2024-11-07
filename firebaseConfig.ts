// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyBf1IilEKPAM9_ddu3mNaeGFN6VCvQv9tY",
  authDomain: "dry-fire-timer.firebaseapp.com",
  projectId: "dry-fire-timer",
  storageBucket: "dry-fire-timer.appspot.com",
  messagingSenderId: "817930545529",
  appId: "1:817930545529:web:0de4fd430fe740051627a8",
  measurementId: "G-E1LLVC7PBE"
};

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and the Google Auth provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);    

export { auth, googleProvider, db };