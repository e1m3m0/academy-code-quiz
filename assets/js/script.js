var timeLeft = 0;
var score = 0;
var countDown = "";
var timerCountDown;
var highscore = [];
var timeContainer = document.querySelector("#counter");
var questionContainer = document.querySelector("#questions");
var answerContainer = document.querySelector("#answers");
var result = document.querySelector("#results");

var ansEl1 = document.createElement("button");
ansEl1.className = "btn answer-option";
ansEl1.value = "a";
var ansEl2 = document.createElement("button");
ansEl2.className = "btn answer-option";
ansEl2.value = "b";
var ansEl3 = document.createElement("button");
ansEl3.className = "btn answer-option";
ansEl3.value = "c";
var ansEl4 = document.createElement("button");
ansEl4.className = "btn answer-option";
ansEl4.value = "d";

var loadPage = function () {
  loadScore();
  questionContainer.innerHTML =
    "<h1>Coding Quiz Challenge</h1> <br> <p>Try to answer the following code-related questions within the time limit <br> Keep in mind that incorrect answers will penalize your score/time <br>By ten seconds!</p>";

  var quizBtn = document.createElement("button");
  quizBtn.className = "btn start-quiz";
  quizBtn.textContent = "Start Quiz";
  questionContainer.appendChild(quizBtn);

  quizBtn.addEventListener(
    "click",
    function () {
      timeLeft = 75;
      questionContainer.innerHTML = "";
      answerContainer.innerHTML = "";

      loadQuestion1();

      timerCountDown = setInterval(function () {
        quizCountdown();
      }, 1000);
    },
    { once: true }
  );
};

var quizCountdown = function () {
  if (timeLeft <= 0) {
    quizEnd();
  } else if (timeLeft > 1) {
    timeLeft--;
    countDown = "Time: " + timeLeft;
    timeContainer.textContent = countDown;
  } else if (timeLeft === 1) {
    timeLeft--;
    countDown = "Time: " + timeLeft;
    timeContainer.textContent = countDown;
    alert("Your time has ended, click ok to see your score.");

    quizEnd();
  }
};

var quizTimeout = function () {
  clearInterval(timerCountDown);
};

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
    o: {
      a: "1. JavaScript",
      b: "2. terminal/bash",
      c: "3. for loops",
      d: "4. console.log",
    },
    s: "d",
  },
];

var loadQuestion1 = function () {
  
  questionContainer.innerHTML =
    "<h1 class='questionaire'>" + quiz[0].q + "</h1>";
  ansEl1.textContent = quiz[0].o.a;
  ansEl2.textContent = quiz[0].o.b;
  ansEl3.textContent = quiz[0].o.c;
  ansEl4.textContent = quiz[0].o.d;

  answerContainer.appendChild(ansEl1);
  answerContainer.appendChild(ansEl2);
  answerContainer.appendChild(ansEl3);
  answerContainer.appendChild(ansEl4);

  answerContainer.addEventListener(
    "click",
    function (event) {
      var ans1 = event.target.value;

      if (ans1 === quiz[0].s) {
        correctAnswer();
        score = timeLeft;
        loadQuestion2();
      } else {
        wrongAnswer();
        timeLeft = timeLeft - 10;
        score = timeLeft;
        loadQuestion2();
      }
    },
    { once: true }
  );
};

var loadQuestion2 = function () {
  selected = "";
  questionContainer.innerHTML =
    "<h1 class='questionaire'>" + quiz[1].q + "</h1>";
  ansEl1.textContent = quiz[1].o.a;
  ansEl2.textContent = quiz[1].o.b;
  ansEl3.textContent = quiz[1].o.c;
  ansEl4.textContent = quiz[1].o.d;

  answerContainer.addEventListener(
    "click",
    function (event) {
      var ans2 = event.target.value;

      if (ans2 === quiz[1].s) {
        correctAnswer();
        score = timeLeft;
        loadQuestion3();
      } else {
        wrongAnswer();
        timeLeft = timeLeft - 10;
        score = timeLeft;
        loadQuestion3();
      }
    },
    { once: true }
  );
};

var loadQuestion3 = function () {
  questionContainer.innerHTML =
    "<h1 class='questionaire'>" + quiz[2].q + "</h1>";
  ansEl1.textContent = quiz[2].o.a;
  ansEl2.textContent = quiz[2].o.b;
  ansEl3.textContent = quiz[2].o.c;
  ansEl4.textContent = quiz[2].o.d;

  answerContainer.addEventListener(
    "click",
    function (event) {
      var ans3 = event.target.value;

      if (ans3 === quiz[2].s) {
        correctAnswer();
        score = timeLeft;
        loadQuestion4();
      } else {
        wrongAnswer();
        timeLeft = timeLeft - 10;
        score = timeLeft;
        loadQuestion4();
      }
    },
    { once: true }
  );
};

var loadQuestion4 = function () {
  questionContainer.innerHTML =
    "<h1 class='questionaire'>" + quiz[3].q + "</h1>";
  ansEl1.textContent = quiz[3].o.a;
  ansEl2.textContent = quiz[3].o.b;
  ansEl3.textContent = quiz[3].o.c;
  ansEl4.textContent = quiz[3].o.d;

  answerContainer.addEventListener(
    "click",
    function (event) {
      var ans4 = event.target.value;

      if (ans4 === quiz[3].s) {
        correctAnswer();
        score = timeLeft;
        loadQuestion5();
      } else {
        wrongAnswer();
        timeLeft = timeLeft - 10;
        score = timeLeft;
        loadQuestion5();
      }
    },
    { once: true }
  );
};

var loadQuestion5 = function () {
  questionContainer.innerHTML =
    "<h1 class='questionaire'>" + quiz[4].q + "</h1>";
  ansEl1.textContent = quiz[4].o.a;
  ansEl2.textContent = quiz[4].o.b;
  ansEl3.textContent = quiz[4].o.c;
  ansEl4.textContent = quiz[4].o.d;

  answerContainer.addEventListener(
    "click",
    function (event) {
      var ans5 = event.target.value;

      if (ans5 === quiz[4].s) {
        correctAnswer();
        score = timeLeft;
        quizEnd();
      } else {
        wrongAnswer();
        timeLeft = timeLeft - 10;
        score = timeLeft;
        quizEnd();
      }
    },
    { once: true }
  );
};

var correctAnswer = function () {
  result.innerHTML = "<h2>Correct!</h2>";
  setTimeout(function () {
    result.innerHTML = "";
  }, 1000);
};

var wrongAnswer = function () {
  result.innerHTML = "<h2>Wrong!</h2>";
  setTimeout(function () {
    result.innerHTML = "";
  }, 1000);
};

var quizEnd = function () {
  quizTimeout();
  timeContainer.innerHTML = "Time: " + score;

  answerContainer.innerHTML = "";

  questionContainer.innerHTML =
    "<h1 class='quiz-done'>All done!</h1><br><p>Your final score is " +
    score +
    ".</p><br>";
  var formSubmit = document.createElement("form");
  formSubmit.setAttribute("id", "initials-form");

  var labelForm = document.createElement("label");
  labelForm.innerHTML = "Enter Initials: ";

  formSubmit.appendChild(labelForm);

  var inputForm = document.createElement("input");
  inputForm.setAttribute("type", "text");

  formSubmit.appendChild(inputForm);

  var submitBtn = document.createElement("button");
  submitBtn.className = "btn submit-button";
  submitBtn.textContent = "Submit";

  formSubmit.appendChild(submitBtn);

  questionContainer.appendChild(formSubmit);

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var inputValue = inputForm.value;
    var scoreObj = {
      name: inputValue,
      score: score,
    }

    highscore.push(scoreObj);
    saveScore();
    location.replace("./highscores.html");
    
  });
};

var saveScore = function () {
  localStorage.setItem("quiz-highscore", JSON.stringify(highscore));
}

var loadScore = function () {
  highscoreData = localStorage.getItem("quiz-highscore");


  if (!highscoreData) {
    return false;
  } else {
  highscore = JSON.parse(highscoreData);
  }

};

loadPage();
