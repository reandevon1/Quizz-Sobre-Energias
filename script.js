const questions = [
    {
        question: "Qual das seguintes palavras mais te descreve?",
        answers: ["Determinado", "Flexível", "Tranquilo", "Intenso"],
        results: ["Energia Solar", "Energia Eólica", "Energia Hidrelétrica", "Energia Nuclear"]
    },
    {
        question: "Qual é a sua maior prioridade na vida?",
        answers: ["Segurança", "Liberdade", "Equilíbrio", "Força"],
        results: ["Energia Nuclear", "Energia Eólica", "Energia Hidrelétrica", "Carvão Mineral"]
    },
    {
        question: "Como você prefere passar o tempo livre?",
        answers: ["Ao ar livre", "Explorando novas ideias", "Relaxando em casa", "Fazendo algo produtivo"],
        results: ["Energia Solar", "Energia Eólica", "Energia Hidrelétrica", "Gás Natural"]
    },
    {
        question: "O que te motiva a seguir em frente?",
        answers: ["O Sol", "O Vento", "A Água", "A Combustão"],
        results: ["Energia Solar", "Energia Eólica", "Energia Hidrelétrica", "Petróleo"]
    },
    {
        question: "Como você lida com os desafios?",
        answers: ["Com paciência", "Com criatividade", "Com calma", "Com força bruta"],
        results: ["Energia Hidrelétrica", "Energia Eólica", "Energia Solar", "Carvão Mineral"]
    },
    {
        question: "Qual seria seu papel em um time?",
        answers: ["O líder", "O estrategista", "O mediador", "O executor"],
        results: ["Energia Nuclear", "Energia Solar", "Energia Hidrelétrica", "Gás Natural"]
    },
    {
        question: "Como você se sente em relação ao futuro?",
        answers: ["Esperançoso", "Curioso", "Tranquilo", "Preocupado"],
        results: ["Energia Solar", "Energia Eólica", "Energia Hidrelétrica", "Petróleo"]
    },
    {
        question: "Qual elemento você prefere?",
        answers: ["Fogo", "Ar", "Água", "Terra"],
        results: ["Energia Nuclear", "Energia Eólica", "Energia Hidrelétrica", "Carvão Mineral"]
    }
];

const resultsDescriptions = {
    "Energia Solar": "Você é como a Energia Solar: constante, confiável e uma fonte inesgotável de vitalidade. Sua presença traz luz e vida para todos ao seu redor.",
    "Energia Eólica": "Você é como a Energia Eólica: flexível, adaptável e sempre em movimento. Sua criatividade e capacidade de se ajustar a novas situações são suas maiores forças.",
    "Energia Hidrelétrica": "Você é como a Energia Hidrelétrica: calmo e equilibrado, mas capaz de grandes feitos. Sua força interior é uma corrente constante que move você e os outros.",
    "Energia Nuclear": "Você é como a Energia Nuclear: poderoso, estratégico e capaz de transformar o mundo ao seu redor. Sua força vem da sua habilidade de focar e direcionar sua energia de forma eficaz.",
    "Carvão Mineral": "Você é como o Carvão Mineral: persistente e resiliente, mas talvez precise adaptar suas abordagens para ser mais sustentável e eficiente em longo prazo.",
    "Gás Natural": "Você é como o Gás Natural: prático e eficiente, sempre buscando a melhor maneira de realizar as coisas. Sua adaptabilidade permite que você seja bem-sucedido em diversas situações.",
    "Petróleo": "Você é como o Petróleo: intenso e cheio de energia, mas é importante usar sua força de forma consciente para garantir que seu impacto seja positivo."
};

let currentQuestionIndex = 0;
let selectedAnswers = [];

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = questions[currentQuestionIndex];

    let questionHTML = `<h2>${currentQuestion.question}</h2>`;
    currentQuestion.answers.forEach((answer, index) => {
        questionHTML += `
            <label>
                <input type="radio" name="answer" value="${currentQuestion.results[index]}">
                ${answer}
            </label><br>
        `;
    });

    questionContainer.innerHTML = questionHTML;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        selectedAnswers.push(selectedOption.value);
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('resultButton').style.display = 'inline-block';
        }
    } else {
        alert('Por favor, selecione uma resposta antes de continuar.');
    }
}

function showResult() {
    const resultContainer = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    
    const occurrences = selectedAnswers.reduce((acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
    }, {});

    const mostFrequentResult = Object.keys(occurrences).reduce((a, b) => occurrences[a] > occurrences[b] ? a : b);

    resultText.textContent = `Você é: ${mostFrequentResult} - ${resultsDescriptions[mostFrequentResult]}`;
    resultContainer.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', showQuestion);
