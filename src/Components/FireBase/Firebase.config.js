// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEWdlxPFLY07xlQyNnbya2TVFz1PcsKtQ",
  authDomain: "private-routes-auth-integr.firebaseapp.com",
  projectId: "private-routes-auth-integr",
  storageBucket: "private-routes-auth-integr.appspot.com",
  messagingSenderId: "207931402609",
  appId: "1:207931402609:web:7a621941ce52dc75d22ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;