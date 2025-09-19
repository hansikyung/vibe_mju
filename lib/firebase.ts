// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp7TXGoyHhASh5F2xeaokstuJG0ySFOLQ",
  authDomain: "mju-home.firebaseapp.com",
  projectId: "mju-home",
  storageBucket: "mju-home.firebasestorage.app",
  messagingSenderId: "640476577754",
  appId: "1:640476577754:web:302375035a8fd59d1d8ae3",
  measurementId: "G-LW1ENC5TD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics는 클라이언트 사이드에서만 초기화
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
