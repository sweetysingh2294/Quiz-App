const quizData = [
    {
        question: "What is Software Engineering?",
        a: "Designing a software",
        b: "Testing software",
        c: "Application of engineering principles",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Who is the father of Software Engineering?",
        a: "Margaret Hamilton",
        b: "Watts S. Humphrey",
        c: "Alan Turing",
        d: "Boris Beizer",
        correct: "b",
    },
    {
        question: "What are the features of Software Code?",
        a: "Simplicity",
        b: "Accessibility",
        c: "Modularity",
        d: "All of the above",
        correct: "c",
    },
    {
        question: "CASE stands for",
        a: "Computer-Aided Software Engineering",
        b: "Control Aided Science and Engineering",
        c: "Cost Aided System Experiments",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question: "Attributes of good software is____",
        a: "Development",
        b: "Maintainability & functionality",
        c: "Functionality",
        d: "Maintainability",
        correct: "b",
    },
    {
        question: "What does SDLC stands for?",
        a: "Sytem Design Life Cycle",
        b: "software design Life Cycle",
        c: "Software Development Life Cycle",
        d: "System Development Life Cycle",
        correct: "c",
    },
    {
        question: "Who proposed the spiral model?",
        a: "Barry Boehm",
        b: "Pressman",
        c: "Royce",
        d: "IBM",
        correct: "a",
    },
    {
        question: "Which of the following are CASE tools?",
        a: "Central Repository",
        b: "Integrated Case Tools",
        c: "Upper Case Tools",
        d: "All of the Mentioned",
        correct: "d",
    },
    {
        question: "Software patch is defined as_____",
        a: "Daily or routine Fix",
        b: "Required or Critical Fix",
        c: "Emergency Fix",
        d: "None of the mentioned",
        correct: "c",
    },
    {
        question: "Who proposed Function Points?",
        a: "Albrecht",
        b: "Jacobson",
        c: "Boehm",
        d: "Booch",
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2><center>You answered ${score}/${quizData.length} questions correctly</center></h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})