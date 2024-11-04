// import { getAuth , signInWithEmailAndPassword} from "./firebase.js";
// getAuth()
// const auth = getAuth();

// var loginEmail = document.getElementById("loginEmail")
// var loginPassword = document.getElementById("loginPassword")
// var loginBtn= document.getElementById("loginBtn")
 
// loginBtn.addEventListener("click" ,()=>{
//     signInWithEmailAndPassword(auth,loginEmail.value, loginPassword.value)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
// console.log("login successfully",user);

//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
      
//       const errorMessage = error.message;
//       console.log(errorCode,errorMessage);
      
//     });
  
 
// })


import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
const auth = getAuth();

var loginEmail = document.getElementById("loginEmail"); // Correct ID
var loginPassword = document.getElementById("loginPassword"); // Correct ID
var loginBtn = document.getElementById("loginBtn"); // Correct ID


loginBtn.addEventListener("click", () => {
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value) // Get values
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login successful:", user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage); // Log errors
    });
});
