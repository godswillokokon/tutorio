let currentUser = firebase.auth().currentUser;
let currentAdmin = currentUser.admin;

  
if (currentUser && !currentAdmin){
    location.href='student-dashboard.html';
}

if (!currentUser) {
     location.href='index.html';
} 
  