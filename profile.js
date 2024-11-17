import { getAuth ,  onAuthStateChanged , updateProfile ,signOut , sendEmailVerification} from "./firebase.js";
getAuth()
const auth = getAuth();
var updEmail = document.getElementById("email")
var singoutupd = document.getElementById("signout")
var edit =  document.getElementById("editbtn")
var nameUpd = document.getElementById("name")
var proffesionUpd = document.getElementById("proffesion")
var updverifyEmail = document.getElementById("verifyEmail")

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log(user)
      console.log(uid)
      updEmail.innerHTML = user.email
      singoutupd.addEventListener("click", ()=>{
        signOut(auth).then(() => {
         alert("Logged out!")
        location.href= "login.html"
        }).catch((error) => {
          console.log(error);
           });
           
        
})
updverifyEmail.addEventListener("click" , ()=>{
  sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("email has been sent");
  });
})
     

  
 
 
edit.addEventListener("click" , () =>{
   var userInput = prompt("name")
 var proffesion = prompt("proffesion")

  updateProfile(auth.currentUser, {
    displayName: userInput, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    console.log("profilecreated")
    proffesionUpd .innerHTML = proffesion
        
    nameUpd.innerHTML = userInput
        
  }).catch((error) => {
   console.log(error);
  });
  
})
 
} else {
  alert("User is signed out");
}
});

document.getElementById("post").addEventListener("click", () => {
  console.log("Navigate to post.html");
  location.href = "post.html";
});
