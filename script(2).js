const quizData = [
    {
        question: "Who developed Python Programming Language?",
        a: "Wick van Rossum",
        b: "Rasmus Lerdorf",
        c: "Guido Van Rossum",
        d: "Niene Stom",
        correct: "c",
    },
    {
        question: "Which type of Programming does Python support?",
        a: "OOP",
        b: "Structured programming",
        c: "Functional programming",
        d: "All of the Mentioned",
        correct: "d",
    },
    {
        question: "Is python case sensitive when delaing with identifiers?",
        a: "No",
        b: "Yes",
        c: "Machine dependent",
        d: "None of the Mentioned",
        correct: "a",
    },
    {
        question: "Which of the following is the correct extension of the Puthon File?",
        a: ".python",
        b: ".pl",
        c: ".py",
        d: ".p",
        correct: "c",
    },
    {
        question: "All Keywords in Python are in _____",
        a: "Capitalized",
        b: "lower Case",
        c: "UPPER CASE",
        d: "None of the Mentioned",
        correct: "d",
    },
    {
        question: "Which of the following is used to define a block of code in Python Language?",
        a: "Indentation",
        b: "Key",
        c: "Brackets",
        d: "All of the Mentioned",
        correct: "a",
    },
    {
        question: "Which keyword is used for function in Python language?",
        a: "Function",
        b: "Def",
        c: "Fun",
        d: "Define",
        correct: "b",
    },
    {
        question: "Which of the following character is used to give single-line comments in Python?",
        a: "//",
        b: "#",
        c: "!",
        d: "/*",
        correct: "b",
    },
    {
        question: "Which of the following functions is a built-in function in Python?",
        a: "factorial()",
        b: "print()",
        c: "seed()",
        d: "sqrt()",
        correct: "b",
    },
    {
        question: "Which of the following is the use of id() function in python?",
        a: "Every object doesn't have a unique id",
        b: "Id returns the identity of the object",
        c: "All of the mentioned",
        d: "None of the metioned",
        correct: "b",
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