const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";
// let mm = firebase.firestore();
// console.log(mm);
let imgPreview = document.getElementById("img-preview");
let fileUpload = document.getElementById("file-upload");

let courseDescription = document.getElementById("courseDescription").value;
let courseTitle = document.getElementById("courseTitle").value;
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
      res.data.tags = courseTitle;
      console.log(courseTitle);
      return db
        .collection("class")
        .set({
          lesson: imgPreview.src
        })
        .catch(function(error) {
          console.log(error);
        });
    })
    .catch(err => {
      console.error(err);
    });
});
