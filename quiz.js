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
  console.log('div5', div5);

  var input1 = document.getElementById('quizInputChoice1');
  var input2 = document.getElementById('quizInputChoice2');
  var input3 = document.getElementById('quizInputChoice3');
  var input4 = document.getElementById('quizInputChoice4');

  // input1.setAttribute('class','form-check-input');
  // input1.setAttribute('type','radio');
  // input1.setAttribute('name','quizRadios');
  // input1.setAttribute('value','option1');
  // input1.setAttribute('style','visibility: hidden');
  // console.log('input1', input1)

  // input2.setAttribute('class','form-check-input');
  // input2.setAttribute('type','radio');
  // input2.setAttribute('name','quizRadios');
  // input2.setAttribute('value','option2');
  // input2.setAttribute('style','visibility: hidden');
  // console.log('input2', input2)

  // input3.setAttribute('class','form-check-input');
  // input3.setAttribute('type','radio');
  // input3.setAttribute('name','quizRadios');
  // input3.setAttribute('value','option3');
  // input3.setAttribute('style','visibility: hidden');
  // console.log('input3', input3)

  // input4.setAttribute('class','form-check-input');
  // input4.setAttribute('type','radio');
  // input4.setAttribute('name','quizRadios');
  // input4.setAttribute('value','option4');  
  // input4.setAttribute('style','visibility: hidden');
  console.log('input4', input4)

  var label1 = document.getElementById('quizLabelChoice1');
  var label2 = document.getElementById('quizLabelChoice2');
  var label3 = document.getElementById('quizLabelChoice3');
  var label4 = document.getElementById('quizLabelChoice4');
  console.log('label1', label1)
  console.log('label2', label2)
  console.log('input3', label3)
  console.log('label4', label4)

  // label1.setAttribute('class','form-check-label');
  // label1.setAttribute('for','quizInputChoice1');
  // label1.setAttribute('style','visibility: hidden');

  // label2.setAttribute('class','form-check-label');
  // label2.setAttribute('for','quizInputChoice2');
  // label2.setAttribute('style','visibility: hidden');

  // label3.setAttribute('class','form-check-label');
  // label3.setAttribute('for','quizInputChoice3');
  // label2.setAttribute('style','visibility: hidden');

  // label4.setAttribute('class','form-check-label');
  // label4.setAttribute('for','quizInputChoice4');
  // label4.setAttribute('style','visibility: hidden');

  var nextButton = document.getElementById("nextButton")

  // div1.appendChild(input1);
  // div2.appendChild(input2);
  // div3.appendChild(input3);
  // div4.appendChild(input4);
  // div5.appendChild(nextButton);
  console.log('div5', div5)


  // div1.appendChild(label1);
  // div2.appendChild(label2);
  // div3.appendChild(label3);
  // div4.appendChild(label4);

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
    //   sendMessage();
    }
  }, 1000);
  // addQuestion();
}
var questionNum = 0;
function addQuestion(){

// in this function we need to
// 1. change the titleEl to the value in questions[i].title[i]
// 2. change the radio button choice values
//    - change the values in input1[0] to questions[i].input[0]
//    - change the values in input1[1] to questions[i].input[1]
//    - change the values in input1[2] to questions[i].input[2]
//    - change the values in input1[3] to questions[i].input[3]

  };
var selection = "";
var score ="";

function checkAnswer(){
// in this function we need to
// 1. collect all radios
// 2. through a loop, check to see which are checked
// 3. get the corresponding value (through label?)
// 4. store to the selection variable so we can compare to questions[i].answer(0)
// 5. add an event listener on the #nextButton 
// 6. onClick, compare selection to selected value
// 7. if they are === then score++ and then run addQuestion so that we can change the html values with the next questions
// 8. if they are !== then do not change the score, and deduct 10 seconds from the timer

var radios = document.querySelectorAll("input");
console.log('radios', radios)
// console.log('finding values test', radios(0).checked)

// input1.addEventListener('input', function (evt) {
//   something(this.value);
// if(input1.checked) { 
//   selection = label1.innerHTML;
//   console.log('selection',selection)
// }
}
checkAnswer();

function storeScore(){
  // in this function, we need to access the session and store their name and score to an array / list if they WebAuthentication
}