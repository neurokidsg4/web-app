import { Game } from './js/entities/Jogo.js'

const objGame = new Game('Acerte as Cores');

// Obtém os elementos HTML relevantes
const circles = document.querySelectorAll('.circle');
const colorName = document.querySelector('.color-name');
const message = document.querySelector('#message');
const continueButton = document.querySelector('#continue');
const backButton = document.querySelector('#back');
let correctColorIndex = 2; // Índice do círculo correto (0-5)
let numAttempts = 0;
let correctGuessesPerAttempt = 0

// Array de cores para o jogo
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

// Função para iniciar o jogo
function startGame() {
    // Incrementar o número de tentativas
    numAttempts++;

    // Verificar se atingiu o limite de tentativas
    if (numAttempts > 5) {

        objGame.gameSaves();

        // Limpar a mensagem e exibir apenas o botão de voltar
        message.textContent = '';
        continueButton.style.display = 'none';
        backButton.style.display = 'block';
        backButton.addEventListener('click', handleBackButtonClick);
        // saveCorrectGuessesPerAttempt();
        return;
    }

    // Escolher uma cor aleatória para adivinhar
    correctColorIndex = Math.floor(Math.random() * colors.length);

    // Exibir o nome da cor a ser adivinhada em português
    const colorNames = {
        red: 'Vermelho',
        green: 'Verde',
        blue: 'Azul',
        yellow: 'Amarelo',
        purple: 'Roxo',
        orange: 'Laranja',
    };
    colorName.textContent = colorNames[colors[correctColorIndex]];

    // Definir as cores dos círculos
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colors[i];
        circles[i].addEventListener('click', handleCircleClick);
    }

    // Limpar a mensagem e esconder os botões
    message.textContent = '';
    continueButton.style.display = 'none';
    backButton.style.display = 'none';
}

// Função para lidar com o clique em um círculo
function handleCircleClick(event) {

    objGame.attemptCounter();

    const clickedColorIndex = Array.from(circles).indexOf(event.target);

    if (clickedColorIndex === correctColorIndex) {

        objGame.sumPoint();

        // O jogador acertou
        correctGuessesPerAttempt++;
        message.textContent = 'Você acertou! Parabéns!\n' + correctGuessesPerAttempt + ' de 5';
    } else {
        // O jogador errou
        message.textContent = 'Você errou. Tente novamente.';
    }

    // Remover os ouvintes de clique dos círculos
    for (const circle of circles) {
        circle.removeEventListener('click', handleCircleClick);
    }

    // Exibir o botão de continuar
    continueButton.style.display = 'block';
    continueButton.addEventListener('click', startGame);
    backButton.style.display = 'block';
    backButton.addEventListener('click', handleBackButtonClick);
}


// Função para lidar com o clique no botão "Voltar"
function handleBackButtonClick() {
    // Redireciona para a página desejada
    window.location.href = '/src/area_infantil.html';
}

// Função para salvar a lista de acertos por tentativa no localStorage
// function saveCorrectGuessesPerAttempt() {
    // Obter as tentativas anteriores do localStorage
    // const previousAttempts = JSON.parse(localStorage.getItem('correctGuessesPerAttempt')) || [];

    // Adicionar a lista atual à lista de tentativas anteriores
    // previousAttempts.push({ attempt: numAttempts - 1 , correct: correctGuessesPerAttempt });

    // Salvar a lista completa no localStorage
    // localStorage.setItem('correctGuessesPerAttempt', JSON.stringify(previousAttempts));

// }

// Iniciar o jogo quando a página carregar
window.addEventListener('load', startGame);
