// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgTupdbn3_-eVTyeA07p2EvwQv7CSGrZM",
  authDomain: "emo-book-3c0e6.firebaseapp.com",
  projectId: "emo-book-3c0e6",
  storageBucket: "emo-book-3c0e6.appspot.com",
  messagingSenderId: "952504336817",
  appId: "1:952504336817:web:42186c5f64a49dae883d90",
  measurementId: "G-BYNSCLW2ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);