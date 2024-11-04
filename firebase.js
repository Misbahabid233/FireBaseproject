
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged ,updateProfile } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyASganQOa2tJFgd73nHGccnmvOl1ByElg8",
    authDomain: "singup-b4e92.firebaseapp.com",
    projectId: "singup-b4e92",
    storageBucket: "singup-b4e92.firebasestorage.app",
    messagingSenderId: "497716396484",
    appId: "1:497716396484:web:ae385bf419f982875ee491",
    measurementId: "G-KEW0JZB3V0"
  };


  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const auth = getAuth(app);
  export{getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged , updateProfile }
