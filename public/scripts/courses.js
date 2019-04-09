const content = document.querySelector("#content");
const setupContent = data => {
  let html = "";
  data.forEach(data => {
    let id = data.id;
    duration = data.data().duration;
    let mainDuration = duration / 60;
    const div = `<div class="col-12 col-sm-6 col-md-4 col-xl-3">

                                        <div class="card card--elevated card-course overlay js-overlay mdk-reveal js-mdk-reveal " data-partial-height="40" data-toggle="popover" data-trigger="click">




                                            <a href="./student-take-lesson.html?${id}" class="js-image" data-position="">
                                                <img src="assets/images/paths/angular_430x168.png" alt="course">
                                                <span class="overlay__content">
                                                    <span class="overlay__action d-flex flex-column text-center">
                                                        <i class="material-icons">play_circle_outline</i>
                                                        <small>Resume course</small>
                                                    </span>
                                                </span>
                                            </a>

                                            <div class="mdk-reveal__content">
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex">
                                                            <a class="card-title" href="./student-take-lesson.html?${id}">${
      data.data().courseTitle
    }</a>
                                                            <small class="text-50 font-weight-bold mb-4pt">${
                                                              data.data()
                                                                .Tutorusername
                                                            }</small>
                                                        </div>
                                                        <a href="student-take-lesson.html" class="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                                    </div>
                                                    <div class="d-flex">
                                                        <div class="rating flex">
                                                            Level : ${
                                                              data.data()
                                                                .courseLevel
                                                            }
                                                        </div>
                                                        <small class="text-50">${Math.ceil(
                                                          mainDuration
                                                        )}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        

                                        </div>

                                    </div>`;
    html += div;
  });
  content.innerHTML = html;
};

db.collection("class").onSnapshot(
  doc => {
    let data = doc.docs;
    setupContent(data);
  },
  err => {
    console.log(err);
  }
);
// setInterval(setupContent, 2000)
// setupContent();
