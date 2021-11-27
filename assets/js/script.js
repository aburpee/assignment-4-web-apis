var startButtonEl = document.getElementById("startButton");
var questionContainerEl = document.getElementById("questionContainer")
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answerButtons")

startButtonEl.addEventListener("click", startGame);

let currentQuestion

function startGame() {
    console.log("started")
    currentQuestion = 0
    nextQuestion()
}

function nextQuestion() {
    showQuestion(questionsAnswers[currentQuestion])
}

function showQuestion(question) {
    console.log(question.question)
    questionEl.innerText = question.question
    question.options.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        console.log(button, "button");
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        // answerButtonsEl.appendChild(button);
    
    })
    
}
function selectAnswer(event) {

}

function chooseAnswer() {

}


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

//structure
var takeQuiz = function() {
    
}
//user hits button take quiz
//user selects answer
//user loses time if answer is wrong
//user moves to next question
//build object to store questions and answers

