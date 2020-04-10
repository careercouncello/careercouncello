function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
var b;
function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  b = quiz.score;
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
  let div = document.createElement("button");
  div.className = "btnmq";

  div.innerHTML = "Submit";

  document.body.append(div);

  div.setAttribute("onclick", "vishaln();");
}

// create questions
var questions = [
  
  new Question(
    "Do you possess interest in agricultural work when you visit your native place?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you like to cook various food items at home?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you help your mother cook at home?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you like to collect information about various crops?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you like to collect information about various machines used in agricultural field?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Would you like to collect information about different preservative methods to preserve food?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Which Indian state produces the largest quantity of pulses?",
    ["Maharashtra", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
    "Madhya Pradesh"
  ),
  new Question(
    "Which one of the following is a rabi crop?",
    ["Rice", "Gram", "Millets", "Cotton"],
    "Gram"
  ),
  new Question(
    "Which one of the following is a leguminous crop?",
    ["Pulses", "Millets", "Sesamum", "Jawar"],
    "Pulses"
  ),
  new Question(
    "Which agency is responsible for procurement, distribution and storage of food grain production in India?",
    ["Ministry of Agriculture", "NAFED", "Food Corporation of India", "TRIFED"],
    "Food Corporation of India"
  ),
  new Question(
    "Phosphatase test is used in analysis of _____",
    ["Water", "Tea", "Milk", "All of these"],
    "Milk"
  ),
  new Question(
    "Pasteurization is a _____",
    [
      "Low temperature treatment",
      "High temperature treatment",
      "Both",
      "Steaming treatment",
    ],
    "High temperature treatment"
  ),
  new Question(
    "Bacteria and yeast can _____",
    [
      "Grow with or without air",
      "Grow with or without air",
      " Need more moisture than molds",
      "All of the above",
    ],
    "All of the above"
  ),
  new Question(
    "Which one of the following describes a system of agriculture where a single crop is grown on a large area?",
    [
      "Plantation agriculture",
      "Shifting agriculture",
      "Horticulture",
      "Intensive agriculture",
    ],
    "Plantation agriculture"
  ),
  new Question(
    "Dry storage means at a temperature about _____ and humidity below _____",
    ["20 and 50%", "100 and 50%", "20 and 50-100%", "100 and 50-100%"],
    "20 and 50%"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
