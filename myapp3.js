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
    "Are you fond of reading various books",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you like to compose poems?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Would you like to become a great succesful author of  reknowned books in future",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Would you like to gather information about various places on earth?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Would you like to consult someone who is depressed and treat mentally disabled patients ",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you like to study about Indian and Foreign historical moments?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Do you like to draw sketches and various paintings?",
    ["Yes", "No", "Not Sure", "Not noticed yet"],
    "Yes"
  ),
  new Question(
    "Name the leaders who founded Swaraj party.",
    [
      "CR Das and Motilal Nehru",
      "CR Das and Jawaharlal Nehru",
      "CR Das and Gandhiji",
      "CR Das and Dr B.R Ambedkar"
    ],
    "CR Das and Motilal Nehru"
  ),
  new Question(
    "Which incident forced Gandhiji to halt Non-cooperation movement?",
    [
      "Jallianwala Bagh Massacre",
      "The Rowlett act",
      "Chauri Chaura",
      "Arrest of Alluri Sitaram Rammaya"
    ],
    "Chauri Chaura"
  ),
  new Question(
    "Which two cities are mentioned in the famous book The tale of two cities by  Charles Dickons?",
    [
      "Madrid and London",
      "London and Paris",
      "Paris and New York",
      "London and New York"
    ],
    "London and Paris"
  ),
  new Question(
    "Add a question tag. They won’t do that, _____?",
    [" won’t they", "did they", "will they not", "will they"],
    "will they"
  ),
  new Question(
    "In which one of the following states is terrace cultivation practised?",
    ["punjab", "Haryana", "Uttarakhand", "plains of Uttar Pradesh"],
    "Uttarakhand"
  ),
  new Question(
    "Koderma, in Jharkhand is the leading producer of which one of the following minerals?",
    ["Bauxite", "iron ore", "mica", "copper"],
    "mica"
  ),
  new Question(
    "Identify the tense. She had been running for hours.",
    [
      "Present continuous",
      "Past continuous",
      "Simple past",
      "Past perfect continuous"
    ],
    "Past perfect continuous"
  ),
  new Question(
    " Why did Manchester export to India decline after the First World War?",
    [
      "People were busy fighting the war",
      "Factories closed down due to security problem",
      "Factories and mills were busy producing goods to fulfill the need of army",
      "Export trade was restricted by the government"
    ],
    "Factories and mills were busy producing goods to fulfill the need of army"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
