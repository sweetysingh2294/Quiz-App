const quizData = [
    {
        question: "Who is the inventor of Artificical Intelligence?",
        a: "Geoffrey Hinton",
        b: "Andrew Ng",
        c: "John McCarthy",
        d: "Jurgen Schmidhuber",
        correct: "c",
    },
    {
        question: "Which of the following is the branch of Artifical intelligence?",
        a: "Machine learning",
        b: "Cyber Forensics",
        c: "Full-Stack Developver",
        d: "Network Deisgn",
        correct: "a",
    },
    {
        question: "What is the goal of Artificial Intelligence?",
        a: "To solve artificial problems",
        b: "To extrat scientific causes",
        c: "To explain various sorts of intelligence",
        d: "To solve real-world prbolems",
        correct: "a",
    },
    {
        question: "Which of the followingis a component of Artificial Intelligence?",
        a: "Learning",
        b: "Training",
        c: "Designing",
        d: "Puzzling",
        correct: "a",
    },
    {
        question: "Which of the following is not a type of Artificial Intelligence?",
        a: "Learning AI agent",
        b: "Goal-based AI agent",
        c: "Simple reflex AI agent",
        d: "Unity-based AI agent",
        correct: "d",
    },
    {
        question: "Which of the following is not an application of artificial Intelligence?",
        a: "Face recognition System",
        b: "Chatbots",
        c: "LIDAR",
        d: "DBMS",
        correct: "d",
    },
    {
        question: "The total number of propostion symbols in AI are",
        a: "3 Proposition symbols",
        b: "1 proposition symbols",
        c: "2 propositon symbols",
        d: "No proposition symbols",
        correct: "c",
    },
    {
        question: "The total number og logical symbols in AI are _____",
        a: "There are 3 logical symbols",
        b: "There are 5 logical symbols",
        c: "Number of logical symbols are based on the input",
        d: "Logical symbols are not used",
        correct: "b",
    },
    {
        question: "Which of the following are the approaches to Artificial Intelligence?",
        a: "Applied approach",
        b: "Strong approach",
        c: "Weak approach",
        d: "All of the mentioned",
        correct: "d",
    },
    {
        question: "Which of the following is/are the composition for AI agents?",
        a: "Program Only",
        b: "Architecture Only",
        c: "Both program and Architecture",
        d: "None of the mentioned",
        correct: "c",
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