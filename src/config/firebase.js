// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8TTSYUOMXYZR1lJmpFVCNEUWky5pT574",
    authDomain: "usmfirebase.firebaseapp.com",
    projectId: "usmfirebase",
    storageBucket: "usmfirebase.firebasestorage.app",
    messagingSenderId: "187478057246",
    appId: "1:187478057246:web:a0b344e8da687beeb9690f",
    measurementId: "G-XBYR9X63HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics }