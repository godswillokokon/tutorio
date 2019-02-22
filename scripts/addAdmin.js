auth.onAuthStateChanged(user => {

let currentUser = firebase.auth().currentUser;
console.log(user.user);
})
// add admin cloud function
const adminForm = document.querySelector("#admin-actions");
adminForm.addEventListener("submit", e => {
  e.preventDefault();

  const adminEmail = document.querySelector("#admin-email").value;
  const addAdminRole = functions.httpsCallable("addAdminRole");
  addAdminRole({ email: adminEmail }).then(result => {
    console.log(result);
    location.href='instructor-dashboard.html';
  }).catch(err => {
        console.log(err);
    });
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
      err => console.log(err.message)
   
  } else {
    console.log("err");
    
  }
});