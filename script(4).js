const quizData = [
    {
        question: "Which of the following is not an electronic device?",
        a: "A mobile",
        b: "A computer",
        c: "A magnifying glass",
        d: "A Keyboard",
        correct: "c",
    },
    {
        question: "Which of the following is not a physical components of an electronic circuit?",
        a: "Capacitor",
        b: "Inductor",
        c: "Diode",
        d: "Temperature",
        correct: "d",
    },
    {
        question: "What type of semiconductor is used in LED electronic circuits?",
        a: "Intrinsic semiconductor",
        b: "Compound semiconductor",
        c: "Degenerated semiconductor",
        d: "Compensatd semiconductor",
        correct: "b",
    },
    {
        question: "Which type of semiconductor is used in Tunnel Diode?",
        a: "Compound semiconductor",
        b: "Elemental semiconductor",
        c: "Degerated semiconductor",
        d: "Extrinsic semiconductor",
        correct: "c",
    },
    {
        question: "Mass action law is not valid for which type of semiconductor in electronic devices?",
        a: "Compound",
        b: "Elemental",
        c: "Degenerated",
        d: "Compensated",
        correct: "c",
    },
    {
        question: "What is the conductivity of an extrinsic type semiconductor electronic device is 0K?",
        a: "Maximum",
        b: "Zero",
        c: "Can't be determined",
        d: "Minimum",
        correct: "b",
    },
    {
        question: "Which of the following diode is used in ultra-high speed switching electronic cicuits?",
        a: "Zener Diode",
        b: "Varactor Diode",
        c: "Tunnel Diode",
        d: "Schottky Diode",
        correct: "c",
    },
    {
        question: "Which of the following is true about Zener Diode?",
        a: "It is lightly doped",
        b: "It is mostly used in voltage regulator",
        c: "It is used in forward bias",
        d: "It has avalance breakdown",
        correct: "b",
    },
    {
        question: "In which region does BJT act as the OFF switch in electronic circuits?",
        a: "Cut-Off",
        b: "Saturation",
        c: "Active",
        d: "Reverse Saturation",
        correct: "b",
    },
    {
        question: "Which semiconductor device is not a current triggering device?",
        a: "TRIAC",
        b: "MOSFET",
        c: "GTO",
        d: "Thyristor",
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