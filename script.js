const questions = [
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Dom Pedro I", "Getúlio Vargas", "Marechal Deodoro da Fonseca", "Juscelino Kubitschek"],
        answer: "Marechal Deodoro da Fonseca"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Berlim", "Madri", "Paris", "Lisboa"],
        answer: "Paris"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestionIndex;

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

function loadQuestion() {
    currentQuestionIndex = getRandomQuestionIndex();
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    document.getElementById('feedback').innerText = '';
    document.getElementById('reload-btn').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const feedbackElement = document.getElementById('feedback');
    if (selectedOption === correctAnswer) {
        feedbackElement.innerText = "Acertou!!!";
    } else {
        feedbackElement.innerText = `Errado! A resposta correta é: ${correctAnswer}`;
    }
    document.getElementById('reload-btn').style.display = 'block';
}

function reloadQuiz() {
    loadQuestion();
}

// Load the first question when the page is loaded
window.onload = loadQuestion;