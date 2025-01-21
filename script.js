import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJqSF0ZFPyjzEF_Mih4pXJQx0KuiatpJ8",
  authDomain: "myfactoryapp-a5526.firebaseapp.com",
  projectId: "myfactoryapp-a5526",
  storageBucket: "myfactoryapp-a5526.appspot.com", // Fixed incorrect URL
  messagingSenderId: "839648629724",
  appId: "1:839648629724:web:7f8f960db4f80077c7b519",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Enable first-party cookies
setPersistence(auth, browserLocalPersistence)
    .then(() => console.log("First-party cookies enabled."))
    .catch((error) => console.error("Error enabling persistence:", error));

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Signup functionality
    const signupbutton = document.getElementById("signupbutton");
    if (signupbutton) {
        signupbutton.addEventListener("click", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmpassword = document.getElementById("confirmpassword").value;

            if (password !== confirmpassword) {
                alert("Passwords do not match!");
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert("Account created successfully!");

                    // Save user data
                    set(ref(database, "users/" + user.uid), {
                        name: name,
                        email: email
                    })
                        .then(() => alert("User data saved successfully!"))
                        .catch((error) => console.error("Error saving data:", error));
                })
                .catch((error) => alert(Error, $,{error,message} (Code, $,{error,code})));
        });
    }

    // Login functionality
    const loginbutton = document.getElementById("loginbutton");
    if (loginbutton) {
        loginbutton.addEventListener("click", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Login successful!");
                    window.location.href = "index.html";
                })
                .catch((error) => alert(Login ,failed, $,{error,message} (Code, $,{error,code})));
                alert("Don't have an account ")
        });
    }
});