import { getAuth , createUserWithEmailAndPassword } from "./firebase.js";
getAuth()
const auth = getAuth();
 var userName = document.getElementById("name");
 var userEmail= document.getElementById("email");
 var userPassword = document.getElementById("password");
 console.log(userName.value , userEmail.value , userPassword.value );
 var singUpBtn = document.getElementById("btn")
 singUpBtn.addEventListener("click",()=>{
    createUserWithEmailAndPassword (auth , userEmail.value , userPassword.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      
          alert("Account successfully created!" ,user)
      
        
      })
      .catch((error) => {
        const errorCode = error.code;
        switch(errorCode){
            case "auth/email-already-in use":
            alert("email-already-in use")
            break;
            case "auth/invalid-email":
            alert("invalid email")
            break;
            case "auth/weak-password":
            alert("password should be at least 6 character")
            break;
            default:
                console.log("Complete");
                
            

        }
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
     userEmail.value = ""
       userPassword.value = ""
         userName.value = ""

        
           
        setTimeout(()=>{
          location.href = "login.html"
      },3000)
 })
 export{singUpBtn,userEmail,userPassword,userName }
