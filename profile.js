import { getAuth ,  onAuthStateChanged , updateProfile } from "./firebase.js";
getAuth()
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log(uid);
      
    } else {
      console.log("User is signed out");
    }
  });
 var userInput = prompt("Enter your name")
  updateProfile(auth.currentUser, {
    displayName: userInput, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
   
  }).catch((error) => {
   console.log(error);
  });
  