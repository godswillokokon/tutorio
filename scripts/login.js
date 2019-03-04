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
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function(idToken) {
          // Send token to your backend via HTTPS
          let currentUsers = firebase.auth().currentUser;
          console.log(currentUsers, "user");

          console.log(idToken, "token");
          console.log(currentUser, "session");
        })
        .catch(function(error) {
          console.log(error);
        });
      let currentUser = sessionStorage.setItem(
        "email",
        firebase.auth().currentUser.email
      );
      // console.log(cred.user);
      location.href = "student-dashboard.html";
    })
    .catch(err => {
      console.log(err);
    });
});

function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    let currentUser = sessionStorage.removeItem("email");
    console.log("user is logging out");
    // location.href = "index.html";
  });
  // console.log("am logging out");
}
