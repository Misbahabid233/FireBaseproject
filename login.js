import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider , signInWithPopup} from "./firebase.js";
const auth = getAuth();
const provider = new GoogleAuthProvider();

var loginEmail = document.getElementById("loginEmail"); 
var loginPassword = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var googlebtn = document.getElementById ("googlebtn");
googlebtn.addEventListener("click",()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
     
      const user = result.user;
     
      // ...
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode ,errorMessage);
     
      const email = error.customData.email;
     
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
})


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
