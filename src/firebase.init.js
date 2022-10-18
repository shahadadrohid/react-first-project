// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbjauI1wx_obFqPoz_LXiDj8CtvXugfZw",
    authDomain: "ema-jhon-99bb7.firebaseapp.com",
    projectId: "ema-jhon-99bb7",
    storageBucket: "ema-jhon-99bb7.appspot.com",
    messagingSenderId: "815143471611",
    appId: "1:815143471611:web:ecd917aaac0c157e33e35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;