const accountDetails = document.querySelector(".account-details");
const adminItems = document.querySelectorAll(".admin");

const setupUI = user => {
  if (user) {
    // // account info
    // db.collection("users")
    //   .doc(user.uid)
    //   .get()
    //   .then(doc => {
    //     const html = `
    //     <div>Logged in as ${user.email}</div>
    //     <div>${doc.data().bio}</div>
    //     <div class="pink-text">${user.admin ? "Admin" : ""}</div>
    //   `;
    //     accountDetails.innerHTML = html;
    //   });
    alert("hi");
  }
};

auth.onAuthStateChanged(user => {
  if (!user) {
    location.href = "index.html";
    console.log("user not logged in");
  } else {
    console.log("user logged in");
  }
});
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
// console.log(currentUser);

// console.log(currentUser, "currentuser");
let currentAdmin = currentUser.admin;
// console.log("outside", cookie);
// LISTEN for auth status changes
// auth.onAuthStateChanged(user => {
// console.log(user.email);
// console.log(session);
if (!currentUser) {
  location.href = "index.html";
  console.log("not logged in from auth");
} else {
  let user = firebase.auth().currentUser;
  console.log(user);
  console.log("user logged in from auth");
}
// if (currentAdmin) {
//   location.href = "instructor-dashboard.html";
// }

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
function _updateUser() {
  const RegNum = document.querySelector("#updateRegNum");
  const photo = document.querySelector("#inputGroupFile01");
  var userNow = firebase.auth().currentUser;
  userNow
    .updateProfile({
      displayName: RegNum,
      photoURL: photo
    })
    .then(
      function() {
        var displayName = userNow.displayName;
        var photoURL = userNow.photoURL;
        console.log(displayName);
      },
      function(error) {
        console.log(error);
      }
    );
}

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
  // clearCookie();
  auth.signOut().then(() => {
    console.log("user is logged out");
    let currentUser = sessionStorage.removeItem("email");
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
