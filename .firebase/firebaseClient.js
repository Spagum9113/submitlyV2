// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXHPxZNfdtWrW7u6JpcHI1VOj31P1X_70",
    authDomain: "submitly-356b6.firebaseapp.com",
    projectId: "submitly-356b6",
    storageBucket: "submitly-356b6.firebasestorage.app",
    messagingSenderId: "737025015480",
    appId: "1:737025015480:web:81d9d2c5c3f321a7c2fe4d",
    measurementId: "G-91P8MC99VL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);