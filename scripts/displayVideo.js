var cld = cloudinary.Cloudinary.new({ cloud_name: "ogcodes" });

// Initialize player
var player = cld.videoPlayer("img-preview");

// Pass a sorter to sort list in alphabetical order by publicId
var sorter = function(a, b) {
  if (a.publicId < b.publicId) return 1;
  if (a.publicId > b.publicId) return -1;
  return 0;
};

// Fetch playlist by tag. Since this operation involves an API call
// the function returns a Promise when the operation completes.
// The return value is 'player'.
player
  .playlistByTag("Javascript Basics", {
    sorter: sorter,
    sourceParams: { angle: 13 },
    autoAdvance: false,
    repeat: true,
    presentUpcoming: false
  })
  .then(function(player) {
    var divElem = document.querySelector("div#playlist-data");
    var list = player
      .playlist()
      .list()
      .map(function(source) {
        return source.publicId();
      })
      .join(", ");

    divElem.innerText = "Playlist: " + list;
  });

function updateSource() {
  var divElem = document.querySelector("div#source-data");

  publicIdElem = divElem.querySelector("#public-id-placeholder");
  sourceUrlElem = divElem.querySelector("#source-url-placeholder");

  publicIdElem.innerText = "Public Id: " + player.currentPublicId();
  sourceUrlElem.innerText = "Source URL: " + player.currentSourceUrl();

  divElem.style.display = "block";
}

player.on("sourcechanged", updateSource);

document
  .querySelector("button#play-prev")
  .addEventListener("click", function() {
    player.playPrevious();
  });

document
  .querySelector("button#play-next")
  .addEventListener("click", function() {
    player.playNext();
  });
