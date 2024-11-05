import { getAuth ,  onAuthStateChanged , updateProfile } from "./firebase.js";
getAuth()
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      // console.log(uid);
      
    } else {
      console.log("User is signed out");
    }
  });
//  var userInput = prompt("Enter your name")
//  var userprofilepic = prompt("enter your profile pic")
  updateProfile(auth.currentUser, {
    displayName: userInput, photoURL: "userprofilepic"
  }).then(() => {
   
  }).catch((error) => {
   console.log(error);
  });
  