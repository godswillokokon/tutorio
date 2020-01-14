

const allQuizz = document.querySelector(".allQuizz");
const QuizzsetupContent = data => {
  let html = "";
  data.forEach(data => {
    let Qid = data.id;
    let question = data.data().question;
    let level = data.data().level;
    let courseTitle = data.data().courseTitle;

    const div = `
   <div class="list-group-item d-flex align-items-center">
                            <a class="text-body flex" href="instructor-edit-quiz.html">Question : ${question}</a>
                            <a class="text-body flex" href="instructor-edit-quiz.html">Level : ${level}</a>
                            <a class="text-body flex" href="instructor-edit-quiz.html">Course : ${courseTitle}</a>
                           
                        </div>
    `;
    html += div;
  });
  allQuizz.innerHTML = html;
};
let level = sessionStorage.getItem("userLevel");
db.collection("quizz")
  .orderBy("question", "asc")
  // .where("courseLevel", "<=", level)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      QuizzsetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(QuizzsetupContent, 2000)
// QuizzsetupContent();
