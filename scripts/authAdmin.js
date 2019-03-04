// // listen for auth status changes
// auth.onAuthStateChanged(user => {
//   if (user) {
//     user.getIdTokenResult().then(idTokenResult => {
//       user.admin = idTokenResult.claims.admin;
//       console.log("admin logged in");
//     });
//   } else {
//     err => console.log(err.message);
//     console.log("admin not logged in");
//   }
// });
