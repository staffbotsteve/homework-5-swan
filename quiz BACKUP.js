var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var questionsEl = document.querySelector(".questions");
var questionsTitleEl = document.querySelector(".questionsTitle");
var questionsChoicesEl = document.querySelector(".questionsChoices");
var questionsListEL = document.querySelector(".questionsList");
var startButton = document.querySelector(".startButton");
var soundPlay = document.createElement("audio");
soundPlay.setAttribute("src", "assets/jeopardy.mp3");
var soundFail = document.createElement("audio");    
soundFail.setAttribute("src", "assets/boo.wav");
var soundWin = document.createElement("audio");    
soundWin.setAttribute("src", "assets/applause.wav");
var nextButton = document.createElement('button');
var text = document.createTextNode("Next");


var secondsLeft = 60;

// the song is 33 seconds long
var themeSong = "assets/jeopardy.mp3";
var failSong = "assets/boo.wav"
var successSong = "assets/applause.wav";

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

  var questionNum = 0;
  console.log('questions', questions)

  //Question Title
  questionsTitleEl.textContent = questions[questionNum].title;

//   //Question and Answer Area
// function createQuestionItem(q) {
// let input = document.createElement('input');
//   input.setAttribute('type', 'radio');
//   input.setAttribute('value', q);
//   input.setAttribute('id', q);
//   input.setAttribute('name', 'choice');
//   input.setAttribute('class', 'radiobutton');
// // set a listener to the above class and then know when it is checked it returns the value of what was checked (like "numbers" and put in variable... then just check the variable value
// let label = document.createElement('label');
// label.textContent= q;
// label.setAttribute('for', q);
// let div = document.createElement('div')
// let nextButton = document.createElement('button');
// div.appendChild(input)
// div.appendChild(label)
// nextButton.appendChild(text);
// // let paragraph = document.createElement('p');
// // div.appendChild(paragraph);
// div.appendChild(nextButton);

// return div;
// }

// console.log('questionsListEL', questionsListEL);

//   for (let index = 0; index < questions[questionNum].choices.length; index++) {

//     questionsListEL.appendChild(createQuestionItem(questions[questionNum].choices[index]))
    
//   };


startButton.addEventListener("click", function() {
  setTime();
  soundPlay.loop=true;
  soundPlay.play();
  // questionsEl.textContent=questions;
  // console.log('questions[0]', questions.getattribute("title"))

});

function setTime() {
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
}