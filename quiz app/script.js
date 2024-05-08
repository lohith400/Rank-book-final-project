const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Multi Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        answers: [
            "Java Source",
            "Java Style",
            "JavaScript",
            "Java Syntax"
        ],
        correctAnswer: "JavaScript"
    }
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const question = quizData[index];
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer, question.correctAnswer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    disableButtons();
}

function disableButtons() {
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === quizData[currentQuestionIndex].correctAnswer) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
    });
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
        nextButton.disabled = true;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = `You've completed the quiz! Your score is ${score}/${quizData.length}`;
    answerButtons.innerHTML = "";
    nextButton.style.display = 'none';
}

startQuiz();
