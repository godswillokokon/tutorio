const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

let imgPreview = document.getElementById("img-preview");
let fileUpload = document.getElementById("file-upload");

let date;
let duration;
let format;
let tag;
let courseDescription = document.getElementById("courseDescription").value;
let courseTitle = document.getElementById("courseTitle").value;
let courseLevel = document.getElementById("courseLevel").value;

let Tutorusername = sessionStorage.getItem("adminUsername");
console.log(Tutorusername);

fileUpload.addEventListener("change", event => {
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log(file);
  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {
      console.log(res);
      imgPreview.src = res.data.secure_url;
      date = res.data.created_at;
      duration = res.data.duration;
      res.data.format = "webm";
      tag = res.data.tags;
      console.log(courseTitle);
      console.log(courseDescription);
      return db
        .collection("class")
        .doc()
        .set({
          lesson: imgPreview.src,
          courseTitle,
          courseDescription,
          date,
          duration,
          courseLevel,
          Tutorusername
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => {
      console.error(err);
    });
});
