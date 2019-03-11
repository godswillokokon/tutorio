const accountDetails = document.querySelector(".admin-details");

let username = sessionStorage.getItem("adminUsername");
// console.log(regnum);
const html = `
        <h2>Logged in as ${username}</h2>
        
      `;
accountDetails.innerHTML = html;