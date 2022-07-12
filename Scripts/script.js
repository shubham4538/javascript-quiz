var ques = document.getElementById("question");
var opt1 = document.getElementById("answer1");
var opt2 = document.getElementById("answer2");
var opt3 = document.getElementById("answer3");
var opt4 = document.getElementById("answer4");
var next = document.getElementById("proceed");
var number = document.getElementById("number");
var scoreDiv = document.getElementById("score");
var answer = document.querySelectorAll('.butn');
var answerBox = document.querySelector('#answer');
var position = 0;
var score = 0;
var clicked = false;

window.onload = function(){
  quiz();
};

next.addEventListener("click",function(){
  
  if(position == 4 && clicked == true){
	localStorage.setItem('mostRecentScore',score)
    this.href = "name-save.html";
  }else if(clicked == true){
    position++;
    quiz();
    answerBox.style.pointerEvents = "auto";
    clicked = false;
    for(var i = 0;i<answer.length;i++){
      answer[i].style.background = "#286ce6";
    }
  }else{
    alert("Select An Answer");
  }

//var scoresList = document.getElementsByClassName('scores-list');
//var scores = JSON.parse(localStorage.getItem('scores',score)) || [];
//console.log(scores);
  
});

function quiz(){
  number.innerHTML = questions[position].number;
  ques.innerHTML = questions[position].question;
  opt1.innerHTML = questions[position].options[0];
  opt2.innerHTML = questions[position].options[1];
  opt3.innerHTML = questions[position].options[2];
  opt4.innerHTML = questions[position].options[3];
};

for(var i = 0;i<answer.length;i++){

  answer[i].addEventListener("click",function check(e){
    if(e.target.innerText == questions[position].answer){
      e.target.style.background = "green";
      score+=10;
      scoreDiv.innerHTML = score;
    }else{
      e.target.style.background = "red";
    }
    answerBox.style.pointerEvents = 'none';
    clicked = true;
  });
}
