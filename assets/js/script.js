// list out all elements

var timeEl = document.getElementById("time-left");
var startQuiz = document.getElementById("begin-quiz");
var buttonChoice = document.getElementById("options");

// list out question/choices
//Array Questions
var questionArr = [
    {
        question: "1. Who created JavaScript?",
        answers: {
            A: "Michell Baker",
            B: "Brenden Eich",
            C: "Chris Beard",
            D: "Ryan Dahl"
        }
    correctAnswer: "Brenden Eich"
    },

    {
        question: "2. Which of the following is correct about features of JavaScript?",
        answers: {
            A: "JavaScript is complementary to and integreted with HTML",
            B: "JavaScript is open and cross platform",
            C: "Both A and B are correct",
            D: "All of the above"
        }
    correctAnswer: "Both A and B are correct"
    },

    {
        question: "3. Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",
        answers: {
            A: "toLocaleUpperCase()",
            B: "toUpperCase()",
            C: "toString()",
            D: "substring()"
        }
    correctAnswer: "toLocaleUpperCase()"
    },

    {
        question: "4. Which of the following function of Array object removes the first element from an array and returns that element?",
        answers: {
            A: "reverse()",
            B: "shift()",
            C: "slice()",
            D: "some()"
        }
    correctAnswer: "shift()"
    },

    {
        question: "5. Which built-in method returns the length of the string?",
        answers: {
            A: "length()",
            B: "size()",
            C: "index()",
            D: "None of the above"
        }
    correctAnswer: "length()"
    },
    {
        question: "6. Which of the following is not a reserved word in JavaScript?",
        answers: {
            A: "interface",
            B: "throws",
            C: "program",
            D: "short"
        }
    correctAnswer: "program"
    },
    {
        question: "7. What is the HTML tag under which one can write the JavaScript code?",
        answers: {
            A: "<javascript>",
            B: "<scripted>",
            C: "<script>",
            D: "<js>"
        }
    correctAnswer: "<script>"
    },
    {
        question: "8. The function and var are known as: ",
        answers: {
            A: "keywords",
            B: "data types",
            C: "decleration statements",
            D: "prototypes"
        }
    correctAnswer: "Decleration statements"
    },

    {
        question: "9. When interpreter encounters an empty statements, what it will do:",
        answers: {
            A: "Shows a warning",
            B: "Prompts to complete the statement",
            C: "Throw an error",
            D: "Ignore the statements"
        }
    correctAnswer: "Ignore the statements"
    },

    {
        question: "10. Which of the following variables takes precedence over the others if the names are the same?",
        answers: {
            A: "Global variable",
            B: "The local element",
            C: "Both A and B are correct",
            D: "None of the choices are correct"
        }
    correctAnswer: "The local element"
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
                sendMessage();
            }

        }, 1000);
    }
}
























