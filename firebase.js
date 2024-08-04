// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEBGFMiovmwMsyTbFNuhcIgIHPnnf9qE0",
  authDomain: "inventory-management-dbd85.firebaseapp.com",
  projectId: "inventory-management-dbd85",
  storageBucket: "inventory-management-dbd85.appspot.com",
  messagingSenderId: "624846875518",
  appId: "1:624846875518:web:701fc30708d0488e3ea12f",
  measurementId: "G-4SZ70VYN68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};
