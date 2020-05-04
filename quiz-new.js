var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: {a:"strings", b:"booleans", c:"alerts", d:"numbers"},
      answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
      choices: {a:"quotes", b:"curly brackets", c:"parentheses", d:"square brackets"},
      answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
      choices: {
        a:"numbers and strings",
        b:"other arrays",
        c:"booleans",
        d:"all of the above"
      },
      answer: "all of the above"
    },
    {
        question:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: {a:"commas", b:"curly brackets", c:"quotes", d:"parentheses"},
      answer: "quotes"
    },
    {
        question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: {a:"JavaScript", b:"terminal / bash", c:"for loops", d:"console.log"},
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

// Set the time for the timer and play theme song until complete
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
var questionNum = 0;
var choicesDiv = document.getElementById('choices')
function createQuestion(){
    var choiceList[];
    questions.forEach(
        (currentQuestion, questionNumber) =>{
            var answers=[];
            for(letter in currentQuestion.choices){
                chocies.push(
                    '<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : 
                        ${currentChoice.choices[letter]}
                    </label>'
                );
            }
            choiceList.push(
                '<div class="questionsTitle"> ${currentChoice.choice}
            )
        }
    )

}