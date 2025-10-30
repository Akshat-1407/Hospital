// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-_jTw1c8fPbWCQm3HrxRHB1blF5jTCM",
  authDomain: "maa-tulya-hospital.firebaseapp.com",
  projectId: "maa-tulya-hospital",
  storageBucket: "maa-tulya-hospital.firebasestorage.app",
  messagingSenderId: "452323864459",
  appId: "1:452323864459:web:a0335b6491b71a3824c98e",
  measurementId: "G-YQWHG9FSBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);