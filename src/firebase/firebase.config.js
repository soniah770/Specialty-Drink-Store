// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdzv7wTsutLW1FirhuYCoAidcl1e8iKUA",
  authDomain: "ecommerce-7d40f.firebaseapp.com",
  projectId: "ecommerce-7d40f",
  storageBucket: "ecommerce-7d40f.appspot.com",
  messagingSenderId: "961690832504",
  appId: "1:961690832504:web:5afa0be2690238b231a78d",
  measurementId: "G-VJGNB7YCFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;