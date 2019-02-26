auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  // const displayName = signupForm["login-name"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      let currentUser = sessionStorage.setItem(
        "user",
        firebase.auth().currentUser
      );
      console.log(cred, "cred");
      console.log(currentUser, "currentuser");

      location.href = "student-dashboard.html";
    })
    .catch(err => {
      console.log(err);
    });
});

// function logout() {
//   //  e.preventDefault();
//   // clearCookie();
//   auth.signOut().then(() => {
//     console.log("user is logged out");
//     let currentUser = sessionStorage.removeItem("email");
//     // location.href = "index.html";
//   });
//   console.log("am logging out");
// }
