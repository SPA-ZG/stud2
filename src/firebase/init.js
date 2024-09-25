// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB21BA9AWYfvfG63eQYJK105KA__xMHd-E",
  authDomain: "nrppzw-project06-best-quotes.firebaseapp.com",
  projectId: "nrppzw-project06-best-quotes",
  storageBucket: "nrppzw-project06-best-quotes.appspot.com",
  messagingSenderId: "644990810742",
  appId: "1:644990810742:web:8e7f8ccc9ef19215c7fd57",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize firestore service
export const db = getFirestore();

// Generate and export auth object
export const auth = getAuth();
