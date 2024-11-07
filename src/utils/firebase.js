// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6H541EWgKbm2sSjxoizG33OD23O6nvQY",
  authDomain: "netflixgpt-e90a7.firebaseapp.com",
  projectId: "netflixgpt-e90a7",
  storageBucket: "netflixgpt-e90a7.firebasestorage.app",
  messagingSenderId: "1007371075187",
  appId: "1:1007371075187:web:6b41d63708360890927406",
  measurementId: "G-17JEPZB8W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();