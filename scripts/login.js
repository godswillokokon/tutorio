auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user from login");
    
   
  } else {
   console.log(" not user from login"); 
  }
});
//login
const loginForm = document.querySelector("#login-form");
loginForm
  .addEventListener("submit", e => {
    e.preventDefault();
    //get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
          console.log(cred);
          location.href='student-dashboard.html';
    }).catch(err => {
        console.log(err);
    });
      
  });
  
