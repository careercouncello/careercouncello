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
    "Do you have interest in knowing functionality of different human organs?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to read different biological books?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to treat your family members with different home remedies?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Would you like to treat stray animals from different streets?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Would you like to collect information about different species of plants and make research on them?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you suggest your family members for regular health cheakup?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you apply first aid to any person suffering from some illness?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Glands located in mouth which helps in digestion process are?",
    ["Larynx", "Pharynx", "Submandibular glands", "Salivary glands"],
    "Salivary glands"
  ),
  new Question(
    "How many basic sensory organs are there in human body?",
    ["3", "5", "6", "4"],
    "5"
  ),
  new Question(
    "What sensory function do the ears provide other than hearing?",
    ["radiation", "smell", "balance", "comand other organ"],
    "balance"
  ),
  new Question(
    "The study of function is called?",
    ["ecology", "anatomy", "physiology", "cytology"],
    "physiology"
  ),
  new Question(
    "The proteins having three diamensional structures are called?",
    ["primery", "tertiary", "quaternary", "secondary"],
    "tertiary"
  ),
  new Question(
    "What is the study of animal life called?",
    ["geology", "cetology", "epidemiology", "zoology"],
    "zoology"
  ),
  new Question(
    "______ is a potential sources of energy?",
    ["carbohydrates", "vitamins", "proteins", "None of these"],
    "carbohydrates"
  ),
  new Question(
    "Ordinary table salt is sodium chloride what is baking soda?",
    [
      "Potassium chloride ",
      "sodium Bicarbonate ",
      "Potassium Hydroxide",
      "Potassium Carbonate",
    ],
    "sodium Bicarbonate "
  ),
  new Question(
    "How many sex chromosome are there in human body?",
    ["20", "24", "26", "22"],
    "22"
  ),
  new Question(
    "Which of the following is a part of female reproductive system?",
    ["Uterus", "Vas deferens", "testicles", "Urethra"],
    "Uterus"
  ),
  new Question(
    "The average internal temperature of human body is?",
    ["35°c", "36°c", "37°c", "38°c"],
    "37°c"
  ),
  new Question(
    "Prokaryotic cells lack?",
    [
      "Nucleolus",
      "Nuclear membrane",
      "membrane bound by organelles",
      "All of these",
    ],
    "All of these"
  ),
  new Question(
    " Pollination is best defined as?",
    [
      "Transfer of pollen from anther to stigma",
      "Germination of pollen grains",
      "Growth of pollen tube in ovule",
      "visiting flowers by insects",
    ],
    "Transfer of pollen from anther to stigma"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
