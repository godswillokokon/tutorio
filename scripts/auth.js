// // add admin cloud function
// const adminForm = document.querySelector(".admin-actions");
// adminForm.addEventListener("submit", e => {
//   e.preventDefault();

//   const adminEmail = document.querySelector("#admin-email").value;
//   const addAdminRole = functions.httpsCallable("addAdminRole");
//   addAdminRole({ email: adminEmail }).then(result => {
//     console.log(result);
//   });
// });
let currentUser = sessionStorage.getItem("email");
console.log(currentUser);
// let currentUser = firebase.auth().currentUser;
// console.log(currentUser, "currentuser");
let currentAdmin = currentUser.admin;
// console.log("outside", cookie);
// LISTEN for auth status changes
// auth.onAuthStateChanged(user => {
// console.log(user.email);
// console.log(session);

if (currentAdmin) {
  location.href = "instructor-dashboard.html";
}
if (!currentUser) {
  location.href = "index.html";
}

// current =
// console.log("i am a user - outside");
// // console.log(user.email);
// console.log(current.email)
// session = firebase
//   .auth()
//   .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//   .then(function() {
//     // console.log(session);
//   });
//get data
// } else {
//   //

//   console.log("i am not a user");
// }
// });

// //create new guide
// const createForm = document.querySelector("#create-form");
// createForm.addEventListener("submit", e => {
//   e.preventDefault();

//   db.collection("guides")
//     .add({
//       title: createForm["title"].value,
//       content: createForm["content"].value
//     })
//     .then(() => {
//       //close modal and rest form
//       const modal = document.querySelector("#modal-create");
//       M.Modal.getInstance(modal).close();
//       createForm.reset();
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });

// // signup
// const signupForm = document.querySelector("#signup-form");
// signupForm.addEventListener("submit", e => {
//   e.preventDefault();

//   // get user info
//   const email = signupForm["signup-email"].value;
//   const password = signupForm["signup-password"].value;
//   // const username = signupForm["signup-name"].value;

//   //signup user
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     console.log(cred.user);
//     return db.collection("users").doc(cred.user.uid);
//   });
//   //  .then(() => {
//   //   constmodal = document.querySelector("#modal-signup");
//   //   M.Modal.getInstance(modal).close();
//   //   signupForm.reset();
//   // });
// });

// logout

// const logout = document.getElementById("logout");
// logout.addEventListener("click", e => {
//   alert('hi');

// });

function logout() {
  //  e.preventDefault();
  auth.signOut().then(() => {
    console.log("user is logged out");
    location.href = "index.html";
  });
  console.log("am logging out");
}

//login
// const loginForm = document.querySelector("#login-form");
// loginForm
//   .addEventListener("click", e => {
//     e.preventDefault();
//     //get user info
//     const email = loginForm["login-email"].value;
//     const password = loginForm["login-password"].value;
//     firebase
//       .auth()
//       .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//       .then(function() {
//         auth.signInWithEmailAndPassword(email, password).then(cred => {
//           console.log(cred.user);
//         });
//       });

//   });
