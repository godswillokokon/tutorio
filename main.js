var cld = cloudinary.Cloudinary.new({ cloud_name: "ogcodes" });
cloudinary.config({
  cloud_name: "ogcodes",
  api_key: "334988893317523",
  api_secret: "i2aIgxj33Bk3hJRIzCfHcx26N-s"
});

function upload() {
  cloudinary.v2.uploader.upload(
    "videoFirst.mp4",
    {
      resource_type: "video",
      public_id: "heyMyPublicId",
      overwrite: true
    },
    function(error, result) {
      console.log(result, error);
    }
  );

  // notification_url: "https://mysite.example.com/notify_endpoint"
}
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
