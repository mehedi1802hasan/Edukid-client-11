// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGBHWqp8sEy9oufTSPWNt2n5_BaGvXSLY",
  authDomain: "learn-toys.firebaseapp.com",
  projectId: "learn-toys",
  storageBucket: "learn-toys.appspot.com",
  messagingSenderId: "786217640767",
  appId: "1:786217640767:web:e853a8b2eb85ef904c298a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;