// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ5wTyGSjQz9FlAXGh1SrhNuG73idU4vo",
  authDomain: "curso-b65dc.firebaseapp.com",
  projectId: "curso-b65dc",
  storageBucket: "curso-b65dc.appspot.com",
  messagingSenderId: "1057885356578",
  appId: "1:1057885356578:web:2e0c089e2e5a1e8e08407b",
  measurementId: "G-H4P37SX3X6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { db, auth };
