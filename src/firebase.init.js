// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkOCDFSuLej_V6JOR_1SV7avv_lBDXEMg",
    authDomain: "hotel-dynamic-chittagong.firebaseapp.com",
    projectId: "hotel-dynamic-chittagong",
    storageBucket: "hotel-dynamic-chittagong.appspot.com",
    messagingSenderId: "306083412206",
    appId: "1:306083412206:web:9049d464df2148b39e9bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);