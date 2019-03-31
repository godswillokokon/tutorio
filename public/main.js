// // var cld = cloudinary.Cloudinary.new({ cloud_name: "ogcodes" });
// // cloudinary.config({
// //   cloud_name: "ogcodes",
// //   api_key: "334988893317523",
// //   api_secret: "i2aIgxj33Bk3hJRIzCfHcx26N-s"
// // });

// // function upload() {
// //   cloudinary.v2.uploader.upload(
// //     "videoFirst.mp4",
// //     {
// //       resource_type: "video",
// //       public_id: "heyMyPublicId",
// //       overwrite: true
// //     },
// //     function(error, result) {
// //       console.log(result, error);
// //     }
// //   );

// //   // notification_url: "https://mysite.example.com/notify_endpoint"
// // }
// // var demoplayer = cld
// //   .videoPlayer("doc-player", {
// //     fontFace: "Yatra One",
// //     playlistWidget: {
// //       direction: "vertical",
// //       total: 5
// //     }
// //   })
// //   .width(600);

// // demoplayer.playlistByTag("video_race", {
// //   sourceParams: {
// //     overlay: "cloudinary_icon",
// //     opacity: 80,
// //     effect: "brightness:200",
// //     width: 100,
// //     gravity: "north_east",
// //     x: 20,
// //     y: 10
// //   },
// //   autoAdvance: 0,
// //   repeat: true,
// //   presentUpcoming: 5
// // });
// var cld = cloudinary.Cloudinary.new({ cloud_name: "miki-cloudinary" });

// // Initialize player
// var player = cld.videoPlayer("example-player");

// // Pass a sorter to sort list in alphabetical order by publicId
// var sorter = function(a, b) {
//   if (a.publicId < b.publicId) return 1;
//   if (a.publicId > b.publicId) return -1;
//   return 0;
// };

// // Fetch playlist by tag. Since this operation involves an API call
// // the function returns a Promise when the operation completes.
// // The return value is 'player'.
// player
//   .playlistByTag("demo", {
//     sorter: sorter,
//     sourceParams: { angle: 13 },
//     autoAdvance: 0,
//     repeat: true
//   })
//   .then(function(player) {
//     var divElem = document.querySelector("div#playlist-data");
//     var list = player
//       .playlist()
//       .list()
//       .map(function(source) {
//         return source.publicId();
//       })
//       .join(", ");

//     divElem.innerText = "Playlist: " + list;
//   });

// function updateSource() {
//   var divElem = document.querySelector("div#source-data");

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
var cld = cloudinary.Cloudinary.new({ cloud_name: "ogcodes" });
var demoplayer = cld
  .videoPlayer("doc-player", {
    fontFace: "Yatra One",
    playlistWidget: {
      direction: "vertical",
      total: 5
    }
  })
  .width(600);
console.log(demoplayer.playlistByTag);
console.log(cld);

demoplayer.playlistByTag("Javascript", {
  sourceParams: {
    overlay: "cloudinary_icon",
    opacity: 80,
    effect: "brightness:200",
    width: 100,
    gravity: "north_east",
    x: 20,
    y: 10
  },
  autoAdvance: 0,
  repeat: true,
  presentUpcoming: 5
});
