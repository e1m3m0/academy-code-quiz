var timeCounter = document.querySelector("#counter");
var timeLeft = 0;

var quizTimer = function () {
  timeLeft = 75;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeLeft--;
      var countDown = "Time left " + timeLeft;
      timeCounter.textContent = countDown;
    } else if (timeLeft === 1) {
      timeLeft--;
      var countDown = "Time left " + timeLeft;
      timeCounter.textContent = countDown;
      alert("Your time has ended, click ok to see your score.");
    }
  }, 1000);
};

var questionsContainer = document.querySelector("#questions");
var answersContainer = document.querySelector("#answers");
var answersResponseContainer = document.querySelector("#answer-response");

questionsContainer.innerHTML = "<h1>Coding Quiz Challenge</h1>";
answersContainer.innerHTML =
  "<p>Try to answer the following code-related questions within the time limit <br> Keep in mind that incorrect answers will penalize your score/time <br>By ten seconds!</p>";

var startQuizBtn = document.createElement("button");
startQuizBtn.className = "start-quiz btn";
startQuizBtn.textContent = "Start Quiz";

console.log(startQuizBtn);
answersResponseContainer.appendChild(startQuizBtn);
