var highScores = [];
var scoreContainer = document.querySelector(".scores")
var goBackBtn = document.querySelector(".go-back")
var clearScoreBtn = document.querySelector(".clear-scores")

var loadScores = function () {
  highScores = localStorage.getItem("quiz-highscore");

  if(!highScores) {
    return false;
  }

  highScores = JSON.parse(highScores);
  
 highScores = highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  
   
  for (let i = 0; i < highScores.length; i++) {
    
    const scoreItem = document.createElement("li");
    scoreItem.textContent = highScores[i].name + " - " + highScores[i].score;

    scoreContainer.appendChild(scoreItem);     
  }
}

goBackBtn.addEventListener("click", function (event) {
  event.preventDefault();

  location.replace("./index.html");
});

clearScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (!highScores) {
    return false;
  } else {
    localStorage.removeItem("quiz-highscore");
    location.reload();
  }

});





loadScores();