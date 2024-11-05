import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
const auth = getAuth();

var loginEmail = document.getElementById("loginEmail"); 
var loginPassword = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value) // Get values
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Login successful:", user);
        setTimeout(()=>{
            location.href = "profile.html"
        },3000)
   
    //  
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage); 
    });
});
