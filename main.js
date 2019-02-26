var cld = cloudinary.Cloudinary.new({ cloud_name: "demo" });
var demoplayer = cld
  .videoPlayer("doc-player", {
    fontFace: "Yatra One",
    playlistWidget: {
      direction: "vertical",
      total: 5
    }
  })
  .width(600);

demoplayer.playlistByTag("video_race", {
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
