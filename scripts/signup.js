auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  // const username = signupForm["signup-name"].value;

  //signup user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function(idToken) {
          // Send token to your backend via HTTPS
          console.log(idToken);
        })
        .catch(function(error) {
          console.log(error);
        });

      let currentUser = sessionStorage.setItem(
        "email",
        firebase.auth().currentUser.email
      );
      console.log(currentUser);
      console.log(cred.user);
      location.href = "student-dashboard.html";
    })
    .catch(err => {
      console.log(err);
    });
});
// let currentUser = firebase.auth().currentUser;
// console.log(user.user);
