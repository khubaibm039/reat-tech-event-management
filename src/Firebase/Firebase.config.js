// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNxb9SQj2X68P--7TbX7iwDqfKk-M5BjE",
    authDomain: "react-tech-event-management.firebaseapp.com",
    projectId: "react-tech-event-management",
    storageBucket: "react-tech-event-management.appspot.com",
    messagingSenderId: "766702688366",
    appId: "1:766702688366:web:fcd81165c34c16d6b92e7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
