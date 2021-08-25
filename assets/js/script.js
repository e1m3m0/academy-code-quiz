var timeCounter = document.querySelector("#counter");
var timeLeft = 0;
var questionsContainer = document.querySelector("#questions");
var answersContainer = document.querySelector("#answers");
var answersResponseContainer = document.querySelector("#answer-response");
var selectedAnswer = function (event) {
  var selectedValue = event.target.value.toLowerCase();
  return selectedValue;
};

var startQuiz = function () {
  timeLeft = 75;
  questionsContainer.innerHTML = "";
  answersContainer.innerHTML = "";
  answersResponseContainer.innerHTML = "";

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

var option1 = document.createElement("li");
option1.className = "selection option1";
option1.setAttribute("data-value", "a");
console.log(option1);
var option2 = document.createElement("li");
option2.className = "selection option2";
option2.setAttribute("data-value", "b");
console.log(option2);
var option3 = document.createElement("li");
option3.className = "selection option3";
option3.setAttribute("data-value", "c");
console.log(option3);
var option4 = document.createElement("li");
option4.className = "selection option4";
option4.setAttribute("data-value", "d");
console.log(option4);
// var selected = "";

var quiz = [
  {
    q: "Commonly used data types DO Not Include:",
    o: {
      a: "1. strings",
      b: "2. booleans",
      c: "3. alerts",
      d: "4. numbers",
    },
    s: "c",
  },
  {
    q: "The condition in an if/else statement if enclosed with __________.",
    o: {
      a: "1. quotes",
      b: "2. curly brackets",
      c: "3. parenthesis",
      d: "4. square brackets",
    },
    s: "c",
  },
  {
    q: "Arrays in JavaScript can be used to store ________.",
    o: {
      a: "1. numbers and strings",
      b: "2. other arrays",
      c: "3. booleans",
      d: "4. all of the above",
    },
    s: "d",
  },
  {
    q: "String values must be enclosed within ______ when being assigned to variables.",
    o: {
      a: "1. commas",
      b: "2. curly brackets",
      c: "3. quotes",
      d: "4. parenthesis",
    },
    s: "c",
  },
  {
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    O: {
      a: "1. JavaScript",
      b: "2. terminal/bash",
      c: "3. for loops",
      d: "4. console.log",
    },
    s: "d",
  },
];

var loadPage = function () {
  questionsContainer.innerHTML = "<h1>Coding Quiz Challenge</h1>";
  answersContainer.innerHTML =
    "<p>Try to answer the following code-related questions within the time limit <br> Keep in mind that incorrect answers will penalize your score/time <br>By ten seconds!</p>";

  var startQuizBtn = document.createElement("button");
  startQuizBtn.className = "start-quiz btn";
  startQuizBtn.textContent = "Start Quiz";
  answersResponseContainer.appendChild(startQuizBtn);

  document.addEventListener("click", startQuiz);
};

loadPage();
