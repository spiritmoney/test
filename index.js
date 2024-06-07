// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj3T2GPLNm7FCI0q7xjAwS_OsazMFS7Rw",
  authDomain: "test-37d4d.firebaseapp.com",
  projectId: "test-37d4d",
  storageBucket: "test-37d4d.appspot.com",
  messagingSenderId: "779125290751",
  appId: "1:779125290751:web:c55d9bc6db1d4383083eca",
  measurementId: "G-495RVGR2PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
