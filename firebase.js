import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyASganQOa2tJFgd73nHGccnmvOl1ByElg8",
    authDomain: "singup-b4e92.firebaseapp.com",
    projectId: "singup-b4e92",
    storageBucket: "singup-b4e92.appspot.com", // Fixed typo from "app" to "appspot.com"
    messagingSenderId: "497716396484",
    appId: "1:497716396484:web:ae385bf419f982875ee491",
    measurementId: "G-KEW0JZB3V0"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
    auth,
    provider,
    db,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
    sendEmailVerification,
    collection,
    addDoc,
    getAuth
};
