var aButtonEl = document.querySelector("#a");
var bButtonEl = document.querySelector("#b");
var cButtonEl = document.querySelector("#c");
var dButtonEl = document.querySelector("#d");
var startButtonEl = document.querySelector("#start");
var quizContainerEl = document.querySelector(".quizContainer");
var currentQuestion = 0
var questionDisplayEL = document.getElementById("question")


quizContainerEl.style.display = "none"


startButtonEl.addEventListener("click", function(){
    quizContainerEl.style.display = "block"
    startButtonEl.style.display = "none"
    question()
})

aButtonEl.addEventListener("click", checkUserInput)
bButtonEl.addEventListener("click", checkUserInput)
cButtonEl.addEventListener("click", checkUserInput)
dButtonEl.addEventListener("click", checkUserInput)

function question() {
    questionDisplayEL.textContent = questionsAnswers[currentQuestion].question
    aButtonEl.textContent = questionsAnswers[currentQuestion].options[0].text
    bButtonEl.textContent = questionsAnswers[currentQuestion].options[1].text
    cButtonEl.textContent = questionsAnswers[currentQuestion].options[2].text
    dButtonEl.textContent = questionsAnswers[currentQuestion].options[3].text
    aButtonEl.setAttribute("data-correct", questionsAnswers[currentQuestion].options[0].correct)
    bButtonEl.setAttribute("data-correct", questionsAnswers[currentQuestion].options[1].correct)
    cButtonEl.setAttribute("data-correct", questionsAnswers[currentQuestion].options[2].correct)
    dButtonEl.setAttribute("data-correct", questionsAnswers[currentQuestion].options[3].correct)
}

function checkUserInput() {
    console.log("button clicked", this)}

// setInterval(function(){alert('hello');
// }, 3000)

var questionsAnswers = [
    {
        question: "What does DOM stand for?",
        options: [
            {text: "Document Object Model", correct: true},
            {text: "Document Object Machine", correct: false},
            {text: "Document Orating Model", correct: false},
            {text: "Duffel Object Model", correct: false}
        ]
    },
    {
        question: "What does CSS stand for?",
        options: [
            {text: "Cascading Short Styles", correct: false},
            {text: "Corn Style Sheet", correct: false},
            {text: "Cascading Styling Shirts", correct: false},
            {text: "Cascading Style Sheets", correct: true}
        ]
        
    },
    {
        question: "What does HTML stand for?",
        options: [
            {text: "HyperText Markdown Language", correct: false},
            {text: "HyperText Markup Language", correct: true},
            {text: "HalfText Markup Language", correct: false},
            {text: "HyperTest Markup Language", correct: false}
        ]
        
    },
    {
        question: "How do you define a function in python",
        options: [
            {text: "def <insert name>():",correct: true},
            {text: "insert function <insert name>():",correct: false},
            {text: "def <insert name>()",correct: false},
            {text: "var <insert name> = function()", correct: false}
        ]
        
    }
]

