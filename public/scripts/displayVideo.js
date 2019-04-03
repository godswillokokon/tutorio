// let cld = cloudinary.Cloudinary.new({ cloud_name: "ogcodes" });

// // Initialize player
// let player = cld.videoPlayer("preview");

// // Pass a sorter to sort list in alphabetical order by publicId
// let sorter = function(a, b) {
//   if (a.publicId < b.publicId) return 1;
//   if (a.publicId > b.publicId) return -1;
//   return 0;
// };

// // Fetch playlist by tag. Since this operation involves an API call
// // the function returns a Promise when the operation completes.
// // The return value is 'player'.
// player
//   .playlistByTag("Javascript Basics", {
//     sorter: sorter,
//     sourceParams: { angle: 13 },
//     autoAdvance: false,
//     repeat: true,
//     presentUpcoming: false
//   })
//   .then(function(player) {
//     let divElem = document.querySelector("div#playlist-data");
//     let list = player
//       .playlist()
//       .list()
//       .map(function(source) {
//         return source.publicId();
//       })
//       .join(", ");

//     divElem.innerText = "Playlist: " + list;
//   });

// function updateSource() {
//   let divElem = document.querySelector("div#source-data");

//   publicIdElem = divElem.querySelector("#public-id-placeholder");
//   sourceUrlElem = divElem.querySelector("#source-url-placeholder");

//   publicIdElem.innerText = "Public Id: " + player.currentPublicId();
//   sourceUrlElem.innerText = "Source URL: " + player.currentSourceUrl();

//   divElem.style.display = "block";
// }

// player.on("sourcechanged", updateSource);

// document
//   .querySelector("button#play-prev")
//   .addEventListener("click", function() {
//     player.playPrevious();
//   });

// document
//   .querySelector("button#play-next")
//   .addEventListener("click", function() {
//     player.playNext();
//   });

let docplayer = document.getElementById("docplayer");

let title = document.getElementById("title");
let intro = document.getElementById("intro");
let description = document.getElementById("description");
let timeframe = document.getElementById("timeframe");

// let cld = cloudinary.Cloudinary.new({ cloud_name: "ogcodes" });
// let demoplayer = cld
//   .videoPlayer("docplayer", {
//     fontFace: "Yatra One",
//     playlistWidget: {
//       direction: "vertical",
//       total: 5
//     }
//   })
//   .width(600);
// const html = `
//         <div>Logged in as ${user.email}</div>
//         <div>${doc.data().bio}</div>
//         <div class="pink-text">${user.admin ? "Admin" : ""}</div>
//       `;
// accountDetails.innerHTML = html;
let id = "yGopCGZ2GpjwSrGR79A0";
db.collection("class")
  .doc(id)
  .get()
  .then(doc => {
    lesson = doc.data().lesson;
    console.log(docplayer);
    docplayer.src = lesson;
    courseTitle = doc.data().courseTitle;
    courseDescription = doc.data().courseDescription;
    date = doc.data().date;
    duration = doc.data().duration;
    username = doc.data().username;
    console.log("lesson : ", lesson);
    console.log("Course Title : ", courseTitle);
    console.log("Course Desscription", courseDescription);
    console.log("date", date);
    console.log("duration", duration);
    console.log("Tutor Name", username);
    const htmlTitle = `
        <span id="title" class="card-title text-body mb-0">${
          doc.data().courseTitle
        }</span>
      `;
    title.innerHTML = htmlTitle;
  })
  .catch(err => {
    console.error(err);
  });
