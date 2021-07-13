const quizData = [
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        a: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        b: '<a href="http://www.w3schools.com">W3Schools</a>',
        c: '<a>http://www.w3schools.com</a>',
        d: '<a name="http://www.w3schools.com">W3Schools.com</a>',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hello To My Life',
        b: 'Hyperlinks Markup Language',
        c: 'Hyper Text Markup Language',
        d: 'Home Tool Markup Language',
        correct: 'c'
    },
    {
        question: 'Choose the correct HTML tag for the largest heading?',
        a: '<heading>',
        b: '<h6>',
        c: '<head>',
        d: '<h1>',
        correct: 'd'
    },
    {
        question: 'What is the correct HTML tag for inserting a line break?',
        a: '<br>',
        b: '<lb>',
        c: '<break>',
        d: 'break',
        correct: 'a'
    },
    {
        question: 'Who is the best at Rocket League?',
        a: 'Endrias',
        b: 'Teddy',
        c: 'Yaffet',
        d: 'Shahid',
        correct: 'c'
    }
];

const answers = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questions = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function selected() {
    

    let answer = undefined;
    b

    answers.forEach((ans) => {
        if(ans.checked) {
            answer = ans.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    answers.forEach((ans) => {
            ans.checked = false;
    })
}

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questions.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submit.addEventListener('click', () => {
    const corrct = selected();
    
    if(corrct) {
        if(corrct === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {            
            quiz.innerHTML = `<h2>You have finished the quiz! Your total score was a ${score}/${quizData.length} questions. </h2>
            <button class=" btnDark" onClick="location.reload()">Restart</button>
            `;
        }
    }     
})