const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  // const displayName = signupForm["login-name"].value;
auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult().then(idTokenResult => {
      let admin = (user.admin = idTokenResult.claims.admin);
      if (admin) {
        let currentUser = sessionStorage.setItem(
          "admin",
          firebase.auth().currentUser.admin
        );
        console.log("admin logged in");
      }
    });
  } else {
    err => console.log(err.message);
    console.log("admin not logged in");
  }
});
});
