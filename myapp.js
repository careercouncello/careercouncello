function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // document.getElementById("btnm").disabled = true;
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
function showbtn() {
  document.write(
    '<button id="mybutton" align="centre"><a href="index.html">Submit</a></button>'
  );
}

// create questions
var questions = [
 new Question(
    "Do you like to spend hours in solving difficult mathematical questions?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "would you like to discover new technology?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to solve and find proof of theorems?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Would you like to solve mathematical problem in different ways with differen solutions?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you like to read space related articles or books?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Are you interested to work simpler through technology?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Would you like to develop a new computer software?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "would you like to explore different theories of physics?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "would you like to work in a chemical laboratory?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "Do you ever wondered how a chemical reaction works?",
    ["Yes", "No", "Not Sure", "Not notice yet"],
    "Yes"
  ),
  new Question(
    "The	hypotenuse	of	a	right	triangle	is	20m.	If	the	difference	between	the	length	of the other	sides	is	4m.	Find	the	sides?",
    ["12", "14", "18", "20"],
    "12"
  ),
  new Question(
    "Find	two	numbers	whose	sum	is	27	and	product	is	182?",
    ["9,18", "13,14", "11,16", "10,17"],
    "13,14"
  ),
  new Question(
    "Find C: 3x-(1/4)y=6 & 4x-(1/3)y=C ?",
    ["12", "10", "8", "16"],
    "8"
  ),
  new Question(
    "A bag contains 2 red,3 green and 2 blue balls. Two balls ae drawn at random. What is the probability that none of the balls drawn is blue?",
    ["3/7", "2/7", "11/21", "10/21"],
    "10/21"
  ),
  new Question(
    "A person crosses a 600 meter long street in 5 minutes. What is his speed in km/hr?",
    ["3.6", "8.4", "7.2", "6.4"],
    "7.2"
  ),
  new Question(
    "If sinA=5/13. Find cosA and tanA.?",
    ["12/5,12/13", "5/12,12/5", "-12/13,-5/12", "-5/12,-13/12"],
    "-12/13,-5/12"
  ),
  new Question(
    "'A' can do work in 20 days and 'B' can do same work in 30 days. In how many days can A and B together do work?",
    ["12", "15", "18", "20"],
    "12"
  ),
  new Question(
    "The weekest force in universe is?",
    [
      "Electrostatic Force",
      "Gravitational Force",
      "Magnetic Force",
      "nuclear force",
    ],
    "Gravitational Force"
  ),
  new Question(
    "A bike   accelerate uniformly from rest to speed of 7.1m/sec over a distance 35.4 m.Determine the accelaration of bike?",
    ["0.82", "0.89", "0.9", "0.712"],
    "0.712"
  ),
  new Question(
    "Find refractive index if angle of incidence is 60 degree and angle of refraction is 30 degree?",
    ["1", "1.732", "0.7", "0.5"],
    "1.732"
  ),
  new Question(
    "Velocity of sound in air is ?",
    ["350m/s", "340m/s", "343m/s", "323m/s"],
    "343m/s"
  ),
  new Question(
    "If a rubber ball and a steel ball is thrown form a particular height,rubber ball reaches the ground in 15 seconds. Determine the time required for the steel ball to reach the ground?",
    ["30sec", "45sec", "40sec", "15sec"],
    "15sec"
  ),
  new Question("Number of bonds in alkene is/are?", ["1", "2", "3", "4"], "2"),
  new Question(
    "pH value below 7 indicates :?",
    ["Neutral ", "Acidic Nature", "less Basic Nature", "More Basic Narure"],
    "Acidic Nature"
  ),
  new Question(
    "The nucleus of hydrogen atom consists of ?",
    [
      "1 proton only",
      "2neutron only",
      "1 proton + 2 neutron",
      "1 neutron only",
    ],
    "1 proton only"
  )
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
