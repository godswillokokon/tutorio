auth.onAuthStateChanged(user => {
  if (user) {
    let currentUser = firebase.auth().currentUser.email;
    let currentUserSession = sessionStorage.setItem("user", currentUser);

    console.log(currentUserSession);

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
          // console.log(idToken);
          // Send token to your backend via HTTPS
          // setupUI(cred);
          const RegNum = document.querySelector("#signup-regnum");

          let regNum = RegNum.value;
          console.log(regNum);
          let regNumSession = sessionStorage.setItem("regnum", regNum);

          return db
            .collection("users")
            .doc(cred.user.email)
            .set({
              regNum: RegNum.value
            });
        })
        .catch(function(error) {
          console.log(error);
        });

      console.log(cred.user);
      location.href = "student-dashboard.html";
    })
    .catch(err => {
      console.log(err);
    });
});
// function _updateUser() {
//   const RegNum = document.querySelector("#signup-regnum");

//   var userNow = firebase.auth().currentUser;
//   userNow
//     .updateProfile({
//       displayName: RegNum
//     })
//     .then(
//       function() {
//         var displayName = userNow.displayName;

//         console.log(displayName);
//       },
//       function(error) {
//         console.log(error);
//       }
//     );
// }
