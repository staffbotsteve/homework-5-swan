var timeEl = document.querySelector(".time");
var titelEl = document.querySelector(".questionsTitle");
var mainEl = document.getElementById("main");
var questionsEl = document.querySelector(".questions");
// var questionsTitleEl = document.querySelector(".questionsTitle");
// var questionsChoicesEl = document.querySelector(".questionsChoices");
// var questionsListEL = document.querySelector(".questionsList");
var startButton = document.querySelector(".startButton");
var soundPlay = document.createElement("audio");
soundPlay.setAttribute("src", "assets/jeopardy.mp3");
var soundFail = document.createElement("audio");    
soundFail.setAttribute("src", "assets/boo.wav");
var soundWin = document.createElement("audio");    
soundWin.setAttribute("src", "assets/applause.wav");

var secondsLeft = 60;

// the song is 33 seconds long
var themeSong = "assets/jeopardy.mp3";
var failSong = "assets/boo.wav"
var successSong = "assets/applause.wav";

  //Question and Answer Area
  var container = document.getElementById('mainContainer') 
  var div1 = document.getElementById('questionDiv1')
  var div2 = document.getElementById('questionDiv2')
  var div3 = document.getElementById('questionDiv3')
  var div4 = document.getElementById('questionDiv4')
  var div5 = document.getElementById('buttonDiv')
  var div6 = document.getElementById('storeScoreDiv')

  var input1 = document.getElementById('quizInputChoice1');
  var input2 = document.getElementById('quizInputChoice2');
  var input3 = document.getElementById('quizInputChoice3');
  var input4 = document.getElementById('quizInputChoice4');

  var label1 = document.getElementById('quizLabelChoice1');
  var label2 = document.getElementById('quizLabelChoice2');
  var label3 = document.getElementById('quizLabelChoice3');
  var label4 = document.getElementById('quizLabelChoice4');
  var nextButton = document.getElementById("nextButton")
  console.log('div5', div5)
  var storeScoreButton = document.getElementById("storeScoreButton")
  console.log('div5', div5)


var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];

  // Start Button
  startButton.addEventListener("click", function() {
    setTime();
    soundPlay.loop=true;
    soundPlay.play();
    // questionsEl.textContent=questions;
    // console.log('questions[0]', questions.getattribute("title"))
  
  });

  nextButton.addEventListener('click', function(){
    checkAnswer();
    addQuestion();
  });

  //Question Title
  // questionsTitleEl.textContent = questions[questionNum].title;

// Set the time for the timer and play theme song until complete
function setTime() {
  container.setAttribute('style', 'visibility: visible')
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      soundPlay.pause(); 
      soundWin.play();
      sendMessage();
    }
  }, 1000);
  // addQuestion();
}
var questionNum = 0;
function addQuestion(){
// if (questions.length=questionNum){
//   div5.setAttribute('style', "visibility:hidden")
//   div6.setAttribute('style', "visibility:visible")
//   soundPlay.pause(); 
//   soundWin.play();
//   return(timeEl.textContent = "Time Remaining: " + secondsLeft);
// }
console.log('questions.length', questions.length)
console.log('questionNum', questionNum)

  var questionTitle = document.getElementById('questionsTitle');
  var radios = document.querySelectorAll("input");
  for (let index = 0; index < radios.length; index++) {
    const radio = radios[index];
    radio.checked=false;
  }

  questionTitle.innerHTML = questions[questionNum].title;
  input1.value = questions[questionNum].choices[0];
  input2.value = questions[questionNum].choices[1];
  input3.value = questions[questionNum].choices[2];
  input4.value = questions[questionNum].choices[3];
  label1.innerHTML = questions[questionNum].choices[0];
  label2.innerHTML = questions[questionNum].choices[1];
  label3.innerHTML = questions[questionNum].choices[2];
  label4.innerHTML = questions[questionNum].choices[3];
// in this function we need to
// 1. change the titleEl to the value in questions[i].title[i]
// 2. change the radio button choice values
//    - change the values in input1[0] to questions[i].input[0]
//    - change the values in input1[1] to questions[i].input[1]
//    - change the values in input1[2] to questions[i].input[2]
//    - change the values in input1[3] to questions[i].input[3]

  };
var selection = "";
var score = 0;

function checkAnswer(){
// in this function we need to
// 1. collect all radios (DONE)
// 2. through a loop, check to see which are checked
// 3. get the corresponding value (through label?)
// 4. store to the selection variable so we can compare to questions[i].answer(0)
// 5. add an event listener on the #nextButton 
// 6. onClick, compare selection to selected value
// 7. if they are === then score++ and then run addQuestion so that we can change the html values with the next questions
// 8. if they are !== then do not change the score, and deduct 10 seconds from the timer

var radios = document.querySelectorAll("input");
console.log('radios', radios)
var selectedRadio = Array.from(radios).find(el => el.checked);
var answer = '';
if (selectedRadio) {
  answer = selectedRadio.value;
}
var correctAnswer = questions[questionNum].answer;
if (answer === correctAnswer) {
  score++;
  questionNum++;
  addQuestion();
  console.log('answer', answer, correctAnswer);
}else {
  secondsLeft=secondsLeft-10;
  timeEl.textContent = "Time Remaining: " + secondsLeft;
  addQuestion();
}
}
checkAnswer();

function storeScore(){
  // in this function, we need to access the session and store their name and score to an array / list if they WebAuthentication

  $(document).ready(function() {

    $("#random-button").on("click", function() {

      // Create a string which will hold the lottery number
      var lottoNumber = "";

      // Then initiate a loop to generate 9 separate numbers
      for (var i = 0; i < 9; i++) {

        // For each iteration, generate a new random number between 0 and 9.
        var random = Math.floor(Math.random() * 10);

        // Take this number and then add it to the rest of the string.
        // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
        lottoNumber = random + lottoNumber;

      }

      // ... and then dump the random number into our random-number div.
      $("#random-number").prepend("<br><hr>" + lottoNumber);

    });

  });


}