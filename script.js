const quizData = [
    {
        question: " A _______ is the physical path over which a message travels.",
        a: "Path",
        b: "Medium",
        c: "Protocol",
        d: "Route",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: " Bluetooth is an example of __________",
        a: "PAN",
        b: "LAN",
        c: "VPN",
        d: "WAN",
        correct: "a",
    },
    {
        question: "The First Network was called____",
        a: "CNNET",
        b: "NSFNET",
        c: "ASAPNET",
        d: "ARPANET",
        correct: "d",
    },
    {
        question: "A list of protocols used by a system, one protocol per layer, is called ________",
        a: "Protocol architecture",
        b: "Protocol stack",
        c: "Protocol suite",
        d: "Protocol system",
        correct: "b",
    },
    {
        question: "Home Access is provided by_________",
        a: "DSL",
        b: "FTTP",
        c: "Cable",
        d: "All of the mentioned",
        correct: "d",
    },
    {
        question: "How many layers are present in the Internet stack (TCP/IP model)",
        a: "5",
        b: "7",
        c: "6",
        d: "10",
        correct: "a",
    },
    {
        question: "Application layer is implemented in __________",
        a: "End system",
        b: "NIC",
        c: "Ethernet",
        d: "Packet transport",
        correct: "a",
    },
    {
        question: "The functionalities of the presentation layer include________",
        a: "Data compression",
        b: "Data encryption",
        c: "Data description",
        d: "All of the mentioned",
        correct: "d",
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