// variables
// time and user score
var timeEl = document.querySelector("#timeLeft");
var scoreEl = document.querySelector("#score");

// event listener variable
var startEl = document.querySelector("#startQuiz");

// variables for buttons
var buttonChoice = document.querySelector("#options");
var questionTitle = document.querySelector('questions-title');
var buttonChoice1 = document.querySelector("option-1");
var buttonChoice2 = document.querySelector("option-2");
var buttonChoice3 = document.querySelector("option-3");
var buttonChoice4 = document.querySelector("option-4");
var questionsEl = document.querySelector("#Questions");
var questionCount = 0;

// list out question/choices
//Array Questions
var questionArr = [
    {
        question: "Who created JavaScript?",
        answers: [
        "1. Michell Baker", 
        "2. Brenden Eich", 
        "3. Chris Beard", 
        "4. Ryan Dahl"
    ],
    correctAnswer: "2"
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: [
        "1. <javascript>",
        "2. <scripted>",
        "3. <script>",
        "4. <js>"
    ],
    correctAnswer: "3"
    },
    {
        question: "The function and var are known as: ",
        answers: [
        "1. keywords",
        "2. data types",
        "3. decleration statements",
        "4. prototypes"
        ],
    correctAnswer: "3"
    },
    {
        question: "9. When interpreter encounters an empty statements, what it will do:",
        answers: [
             "1. Shows a warning",
             "2. Prompts to complete the statement",
             "3. Throw an error",
             "4. Ignore the statements"
        ],
    correctAnswer: "4"
    },
    {
        question: "10. Which of the following variables takes precedence over the others if the names are the same?",
        answers:[
             "1. Global variable",
             "2. The local element",
             "3. Both A and B are correct",
             "4. None of the choices are correct"
        ],
        correctAnswer: "2"
    }
];

// Timer
function setTime() {
    var timeLeft = 75;
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft === 0) {
            // Calls function to create and append image
            timeEl.textContent = "Time's Up, Game Over";
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Start Quiz using the click feature
startEl.addEventListener("click", function(event) {
    
    event.preventDefault();
    setTime();
    randomQuest();

});

//generate a question from the statements below
function randomQuest (){
        questionsEl.style.display = 'block';
        console.log(questionArr[questionCount]);
        questionTitle.textContent = questionArr[questionCount].question;
        const buttons = [buttonChoice1, buttonChoice2, buttonChoice3, buttonChoice4];
        for (var i = 0; i < questionArr[questionCount].answers.length; i++){
            
            console.log(questionArr[questionCount].answers[i]);
            buttons[i].textContent = questionArr[questionCount].answers[i];
        }
        
    }

    function handleAnswer (event) {
        event.preventDefault();
        console.log(questionArr[questionCount].correctAnswer, event.target.value)
        if (questionArr[questionCount].correctAnswer === event.target.value) {
            alert('here')
        } else {
            alert('wrong');
        }
        questionCount++;
        randomQuest();
    }
    buttonChoice1.addEventListener('click', handleAnswer);
    buttonChoice2.addEventListener('click', handleAnswer);
    buttonChoice3.addEventListener('click', handleAnswer);
    buttonChoice4.addEventListener('click', handleAnswer);























