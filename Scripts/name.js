var username = document.querySelector("#name");
var saveBtn = document.querySelector("#button");
var finalScore = document.querySelector("#finalScore");
var mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText += mostRecentScore;

saveBtn.addEventListener("click", function (e) {
  if (username.value == "") {
    alert("Enter Name First");
  } else {
    const score = {
      score: mostRecentScore,
      name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    this.setAttribute("href", "score.html");
  }
});

//Max Value
username.addEventListener("keyup", function () {
  if (this.value.length > 14) {
    alert("maxed");
  }
});
