
const quizData = [
    {
        question: "When is Adityaa Mulmi's birthday?",
        a: "Feb 10",
        b: "Mar 3",
        c: "Feb 9",
        d: "Mar 12",
        correct: "c",
    },
    {
        question: "Who was the first president of USA?",
        a: "George Washington",
        b: "Donald Trump",
        c: "Abraham Lincoln",
        d: "John Washington",
        correct: "a",
    },
    {
    question: "Who was the first King of Nepal?",
        a: "Gyanendra Shah",
        b: "Prithvi Narayan Shah",
        c: "Adityaa Mulmi",
        d: "K.P Oli",
        correct: "b",
    },
    {
        question: "When did the first president of the US die?",
        a: "1804",
        b: "1799",
        c: "1756",
        d: "1769",
        correct: "b",
    },{
        question: "Where was the first gun made?",
        a: "China",
        b: "Nepal",
        c: "Russia",
        d: "America",
        correct:"a",
    },{
        question: "Who killed Abraham Lincoln?",
        a: "John Wilkes Booth",
        b: "Derek Chauvin",
        c: "Niraj Mulmi",
        d: "Ricardo Colares Tavares",
        correct:'a',   
    },{
        question: "Who is the prime minister of Canada?",
        a: "Boris Johnson",
        b: "John Cena",
        c: "Justin Trudeau",
        d: "Scott Morisson",
        correct:'c',
        },{
            question: "What is the name of the black box in airplanes?",
        a: "Blue",
        b: "Black",
        c: "White",
        d: "Orange",
        correct:'d',
        },{
            question: "where is the next world cup going to be?",
        a: "China",
        b: "Russia",
        c: "Qatar",
        d: "Spain",
        correct:'',
        },{
            question: "Where was the first vodka made?",
        a: "China",
        b: "Russia",
        c: "Mexico",
        d: "Moroco",
        correct:'b',
        }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
