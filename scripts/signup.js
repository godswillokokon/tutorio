// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  // const username = signupForm["signup-name"].value;

  //signup user
  auth.createUserWithEmailAndPassword(email, password)
  .then(cred => {
    console.log(cred.user);
    location.href='student-dashboard.html';
  })
  .catch(err => {
        console.log(err);
  });
  
});
let currentUser = firebase.auth().currentUser;
console.log(user.user);
})
