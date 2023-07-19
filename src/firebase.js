// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgDx4z1Jxiu1aM3VeVhYKMoweeqGqJ5dc",
  authDomain: "real-estate-react-84113.firebaseapp.com",
  projectId: "real-estate-react-84113",
  storageBucket: "real-estate-react-84113.appspot.com",
  messagingSenderId: "906361610805",
  appId: "1:906361610805:web:0d7116aabe517da045077c"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()