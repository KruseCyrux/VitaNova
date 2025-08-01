// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhoR9Cy1npUMaob7DaR1uo_O16-vd0Yvk",
  authDomain: "vitanova-bd.firebaseapp.com",
  projectId: "vitanova-bd",
  storageBucket: "vitanova-bd.firebasestorage.app",
  messagingSenderId: "777307775766",
  appId: "1:777307775766:web:a829a26fa3e67977562637",
  measurementId: "G-RXSEJTP05P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Utils
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };