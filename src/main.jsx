import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVcH2DdscRYhTkEHl1J5EO14suZ65IVs4",
  authDomain: "moonshop-98d2d.firebaseapp.com",
  projectId: "moonshop-98d2d",
  storageBucket: "moonshop-98d2d.appspot.com",
  messagingSenderId: "352829753465",
  appId: "1:352829753465:web:6dc26960b1b7e717c96ca8",
  measurementId: "G-7Q221J7NK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
