var aButtonEl = document.querySelector("#a");
var bButtonEl = document.querySelector("#b");
var cButtonEl = document.querySelector("#c");
var dButtonEl = document.querySelector("#d");
var startButtonEl = document.querySelector("#start");
var quizContainerEl = document.querySelector(".quizContainer");
var currentQuestion = 0
var questionDisplayEL = document.getElementById("question")
var score = 0
var timerObject
var timerCount = 50
var timerEl = document.querySelector(".timerContainer")
var submitEl = document.querySelector(".submitContainer")
var submitButtonEl = document.querySelector("#submit")

quizContainerEl.style.display = "none"
submitEl.style.display = "none"

startButtonEl.addEventListener("click", function(){
    quizContainerEl.style.display = "block"
    startButtonEl.style.display = "none"
    timerObject = setInterval(function() {
        timerEl.innerText = timerCount
        if(timerCount < 1) {
            enterScore()
        }
        else {
            timerCount --
        }
    }, 1000)
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
    console.log("button clicked", this)
    var userChoice = this.getAttribute("data-correct")
    console.log(userChoice);
    if (userChoice) {
        score += 10
    }
    else {
        score -= 5
        timerCount -= 5
    }
    if (currentQuestion < questionsAnswers.length - 1) {
        currentQuestion ++
        question();
    }
    else {
        enterScore()    
    }
}

function enterScore() {
    quizContainerEl.style.display = "none"
    submitEl.style.display = "block"
    clearInterval(timerObject)
    document.getElementById("scoreDisplay").textContent = "score: " + score + " + time left: " + timerCount +" = "+(score+timerCount)
    // let previousScore = JSON.parse(localStorage.getItem("codequiz")) || []
    submitEl.addEventListener("click", function() {
        var user = document.getElementById("userScore").value
        // previousScore.push({
        //     user:user,
        //     score: score+timerCount
        // }
        // )
        // localStorage.setItem("codequiz", JSON.stringify(previousScore))
    })
}

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

