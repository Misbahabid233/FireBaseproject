


import { db, collection, addDoc, getDocs, query, orderBy, doc, deleteDoc, updateDoc, getAuth } from "./firebase.js";

// Add Post Button
let postButton = document.getElementById("postBtn");
postButton.addEventListener("click", async () => {
  const title = document.getElementById("post-title").value;
  const description = document.getElementById("postdescrib").value;

  try {
    // Ensure the user is authenticated
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to add a post.");
      return;
    }

    // Validate inputs
    if (!title || !description) {
      alert("Both Title and Description are required.");
      return;
    }

    // Create post data
    const savedata = {
      postTitle: title,
      content: description,
      uid: user.uid,
      time: new Date(), 
    };

 
    const docRef = await addDoc(collection(db, "posts"), savedata);
    console.log("Post added with ID: ", docRef.id);
    alert("Post added successfully!");
    document.getElementById("post-title").value = "";
    document.getElementById("postdescrib").value = "";
  } catch (error) {
    console.error("Error adding post: ", error);
    alert("Failed to add post: " + error.message);
  }
});

// Get All Posts Button 
let getAllPostsButton = document.getElementById("allpost");
getAllPostsButton.addEventListener("click", async () => {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";

  try {
    
    const postsQuery = query(collection(db, "posts"), orderBy("time", "desc"));

    const querySnapshot = await getDocs(postsQuery);
    querySnapshot.forEach((doc) => {
      const post = doc.data();

      const postElement = `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${post.postTitle}</h5>
            <p class="card-text">${post.content}</p>
            <button class="btn btn-danger delete-btn" data-id="${doc.id}">Delete</button>
            <button class="btn btn-warning update-btn" data-id="${doc.id}">Update</button>
          </div>
        </div>`;
      postsContainer.innerHTML += postElement;
    });

    attachEventListeners();
  } catch (error) {
    console.error("Error fetching posts: ", error);
    alert("Failed to load posts: " + error.message);
  }
});

// Attach Event Listeners for Delete and Update Buttons
function attachEventListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const updateButtons = document.querySelectorAll(".update-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const postId = button.getAttribute("data-id");
      try {
        await deleteDoc(doc(db, "posts", postId));
        alert("Post deleted successfully!");
        button.parentElement.parentElement.remove();
      } catch (error) {
        console.error("Error deleting post: ", error);
        alert("Failed to delete post: " + error.message);
      }
    });
  });

  updateButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const postId = button.getAttribute("data-id");
      const newTitle = prompt("Enter new title:");
      const newContent = prompt("Enter new content:");

      if (newTitle && newContent) {
        try {
          await updateDoc(doc(db, "posts", postId), {
            postTitle: newTitle,
            content: newContent,
          });
          alert("Post updated successfully!");
          button.parentElement.querySelector(".card-title").textContent = newTitle;
          button.parentElement.querySelector(".card-text").textContent = newContent;
        } catch (error) {
          console.error("Error updating post: ", error);
          alert("Failed to update post: " + error.message);
        }
      } else {
        alert("Title and Content cannot be empty.");
      }
    });
  });
}
