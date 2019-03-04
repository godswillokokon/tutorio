// auth.onAuthStateChanged(user => {
//   let currentUser = firebase.auth().currentUser.admin;
//   console.log(currentUser);
// });
// let currentUser = firebase.auth().currentUser;
// add admin cloud function
const adminForm = document.querySelector("#admin-actions");
adminForm.addEventListener("submit", e => {
  e.preventDefault();

  const adminEmail = document.querySelector("#admin-email").value;
  const addAdminRole = functions.httpsCallable("addAdminRole");
  addAdminRole({ email: adminEmail })
    .then(result => {
      console.log(result);

      location.href = "instructor-dashboard.html";
    })
    .catch(err => {
      console.log(err);
    });
});
// listen for auth status changes
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

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("hi");

    // user.getIdTokenResult().then(idTokenResult => {
    //   user.admin = idTokenResult.claims.admin;
    //   setupUI(user);
    // });
    // db.collection("guides").onSnapshot(
    //   snapshot => {
    //     setupGuides(snapshot.docs);
    //   },
  } else {
    // location.href = "index.html";
    err => console.log(err.message);
  }
});
function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    console.log("user is logged out");
    let currentUser = sessionStorage.removeItem("admin");
  });
  console.log("am logging out");
}
