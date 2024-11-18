// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1m32nzO-4UdvCW9wLIet5Eloggv9gOeg",
  authDomain: "front-end-c6faa.firebaseapp.com",
  projectId: "front-end-c6faa",
  storageBucket: "front-end-c6faa.firebasestorage.app",
  messagingSenderId: "805910518279",
  appId: "1:805910518279:web:53b4ccea079265a6e828a2",
  measurementId: "G-07Y0LJMJ19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};