// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbWRRbIFvS8bmF1Wez5pYFRPvTeJj61OE",
  authDomain: "netflixgpt-db438.firebaseapp.com",
  projectId: "netflixgpt-db438",
  storageBucket: "netflixgpt-db438.appspot.com",
  messagingSenderId: "832051675376",
  appId: "1:832051675376:web:7b32ddc758791cae670235",
  measurementId: "G-GJE03FZ51R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);