

const allQuizz = document.querySelector(".allQuizz");
const ResetupContent = data => {
  let html = "";
  data.forEach(data => {
    let Qid = data.id;
    let question = data.data().QuestionTitle;
    let reg = data.data().regnumQ;
    let scores = data.data().score;
    let teachQ = data.data().teachQ;
    let titleQ = data.data().titleQ;


    const div = `
   <div class="list-group-item d-flex align-items-center">
   <a class="text-body flex" href="instructor-edit-quiz.html"> ${titleQ}</a>
                            <a class="text-body flex" href="instructor-edit-quiz.html"> ${question}</a>
                            <a class="text-body flex" href="instructor-edit-quiz.html"> ${reg}</a>
                            <a class="text-body flex" href="instructor-edit-quiz.html"> ${scores}</a>
                             <a class="text-body flex" href="instructor-edit-quiz.html">${teachQ}</a>
                              
                           
                        </div>
    `;
    html += div;
  });
  allQuizz.innerHTML = html;
};
let tutts = sessionStorage.getItem("adminUsername");
db.collection("results")
  .orderBy("QuestionTitle", "asc")
  .where("teachQ", "==", tutts)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      ResetupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(ResetupContent, 2000)
// ResetupContent();

