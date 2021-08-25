var timeLeft = 0;
var score = 0;
var selected = "";

var timeContainer = document.querySelector("#counter");
var questionContainer = document.querySelector("#questions");
var answerContainer = document.querySelector("#answers");
var resultContainer = document.querySelector("#results");

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
  questionContainer.innerHTML = "<h1>Coding Quiz Challenge</h1>";
  answerContainer.innerHTML =
    "<p>Try to answer the following code-related questions within the time limit <br> Keep in mind that incorrect answers will penalize your score/time <br>By ten seconds!</p>";

  var quizBtn = document.createElement("button");
  quizBtn.className = "btn start-quiz";
  quizBtn.textContent = "Start Quiz";
  resultContainer.appendChild(quizBtn);

  quizBtn.addEventListener("click", function () {
    console.log("Start Quiz");
    quizCountdown();
  });
};

var quizCountdown = function () {
  timeLeft = 75;
  questionContainer.innerHTML = "";
  answerContainer.innerHTML = "";
  resultContainer.innerHTML = "";
  loadQuestion1();

  var timeInterval = setInterval(function (event) {
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      quizEnd();
    } else if (timeLeft > 1) {
      timeLeft--;
      var countDown = "Time left " + timeLeft;
      timeContainer.textContent = countDown;
    } else if (timeLeft === 1) {
      timeLeft--;
      var countDown = "Time left " + timeLeft;
      timeContainer.textContent = countDown;
      alert("Your time has ended, click ok to see your score.");
      clearInterval(timeInterval);
    }
  }, 1000);
};

var questionListener = function () {
  answerContainer.addEventListener("click", function (event) {
    selected = event.target.value;
    console.log(selected);
    return selected;
  });
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
    O: {
      a: "1. JavaScript",
      b: "2. terminal/bash",
      c: "3. for loops",
      d: "4. console.log",
    },
    s: "d",
  },
];

var loadQuestion1 = function () {
  console.log("question 1 loaded");
  console.log(selected);
  questionContainer.innerHTML = "<h1>" + quiz[0].q + "</h1>";
  ansEl1.textContent = quiz[0].o.a;
  ansEl2.textContent = quiz[0].o.b;
  ansEl3.textContent = quiz[0].o.c;
  ansEl4.textContent = quiz[0].o.d;

  answerContainer.appendChild(ansEl1);
  answerContainer.appendChild(ansEl2);
  answerContainer.appendChild(ansEl3);
  answerContainer.appendChild(ansEl4);

  questionListener();

  // answerContainer.addEventListener("click", function (event) {
  //   selected = event.target.value;
  //   console.log(selected);

  if (!selected) {
    resultContainer.innerHTML = "";
    return;
  } else if (selected === quiz[0].s) {
    resultContainer.innerHTML = "<h2>Correct!</h2>";
    console.log(timeLeft);

    score = timeLeft;
    console.log(score);
    loadQuestion2();
  } else {
    resultContainer.innerHTML = "<h2>Wrong!</h2>";
    timeLeft = timeLeft - 10;
    console.log(timeLeft);
    score = timeLeft;
    console.log(score);
    loadQuestion2();
  }
  // });
};

var loadQuestion2 = function () {
  console.log("question 2 loaded");
  selected = "";
  questionContainer.innerHTML = "<h1>" + quiz[1].q + "</h1>";
  ansEl1.textContent = quiz[1].o.a;
  ansEl2.textContent = quiz[1].o.b;
  ansEl3.textContent = quiz[1].o.c;
  ansEl4.textContent = quiz[1].o.d;

  // answerContainer.addEventListener("click", function (event) {
  //   selected = event.target.value;
  //   console.log(selected);

  if (selected === quiz[1].s) {
    resultContainer.innerHTML = "<h2>Correct!</h2>";
    // loadQuestion3();
  } else {
    resultContainer.innerHTML = "<h2>Wrong!</h2>";
    timeLeft = timeLeft - 10;
    // loadQuestion3();
  }
  // });
};

// var loadQuestion3 = function () {
//   console.log("question 3 loaded");
//   questionContainer.innerHTML = "<h1>" + quiz[2].q + "</h1>";
//   ansEl1.textContent = quiz[2].o.a;
//   ansEl2.textContent = quiz[2].o.b;
//   ansEl3.textContent = quiz[2].o.c;
//   ansEl4.textContent = quiz[2].o.d;

//   answerContainer.addEventListener("click", function (event) {
//     selected = event.target.value;
//     console.log(selected);

//     if (selected === quiz[2].s) {
//       resultContainer.innerHTML = "<h2>Correct!</h2>";
//       loadQuestion4();
//     } else {
//       resultContainer.innerHTML = "<h2>Wrong!</h2>";
//       timeLeft = timeLeft - 10;
//       loadQuestion4();
//     }
//   });
// };

// var loadQuestion4 = function () {
//   questionContainer.innerHTML = "<h1>" + quiz[3].q + "</h1>";
//   ansEl1.textContent = quiz[3].o.a;
//   ansEl2.textContent = quiz[3].o.b;
//   ansEl3.textContent = quiz[3].o.c;
//   ansEl4.textContent = quiz[3].o.d;

//   answerContainer.addEventListener("click", function (event) {
//     selected = event.target.value;
//     console.log(selected);

//     if (selected === quiz[3].s) {
//       resultContainer.innerHTML = "<h2>Correct!</h2>";
//       loadQuestion5();
//     } else {
//       resultContainer.innerHTML = "<h2>Wrong!</h2>";
//       timeLeft = timeLeft - 10;
//       loadQuestion5();
//     }
//   });
// };

// var loadQuestion5 = function () {
//   questionContainer.innerHTML = "<h1>" + quiz[4].q + "</h1>";
//   ansEl1.textContent = quiz[4].o.a;
//   ansEl2.textContent = quiz[4].o.b;
//   ansEl3.textContent = quiz[4].o.c;
//   ansEl4.textContent = quiz[4].o.d;

//   answerContainer.addEventListener("click", function (event) {
//     selected = event.target.value;
//     console.log(selected);

//     if (selected === quiz[4].s) {
//       resultContainer.innerHTML = "<h2>Correct!</h2>";
//       quizEnd();
//     } else {
//       resultContainer.innerHTML = "<h2>Wrong!</h2>";
//       timeLeft = timeLeft - 10;
//       quizEnd();
//     }
//   });
// };

var quizEnd = function () {
  alert("Quiz has ended");
};

loadPage();
