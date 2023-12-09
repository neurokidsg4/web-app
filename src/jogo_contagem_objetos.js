function getRandomColor() {
  const colors = ['green', 'yellow', 'blue', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const icons = document.querySelectorAll('.objects_description img');
const colorTextElement = document.querySelector('.color_text');
const buttons = document.querySelectorAll('.button');
const messageElement = document.getElementById('message');
const backButton = document.getElementById('back');
const continueButton = document.getElementById('continue');
const buttonMessageContainer = document.querySelector('.button-message-container');


const maxRounds = 3;
let currentRound = 0;


function updateColors() {
  currentRound++;

  // Mapeia os objetos da página com suas cores
  const objectsWithColors = Array.from(icons).map(icon => {
    const iconColor = getRandomColor();
    icon.style.backgroundColor = iconColor; // Atualiza a cor de fundo do objeto
    return { icon, color: iconColor };
  });

  // Seleciona aleatoriamente um objeto
  const randomIndex = Math.floor(Math.random() * objectsWithColors.length);
  const targetObject = objectsWithColors[randomIndex];

  // Define a cor e atualiza a interface
  const targetColor = targetObject.color;
  colorTextElement.style.color = targetColor;
  colorTextElement.textContent = targetColor.charAt(0).toUpperCase() + targetColor.slice(1);

  // Conta a quantidade de objetos com a cor
  const countTargetColor = objectsWithColors.filter(obj => obj.color === targetColor).length;

  // Gera uma lista com números diferentes da quantidade correta
  const otherNumbers = generateUniqueNumbers(countTargetColor, buttons.length);

  // Escolhe aleatoriamente um índice para o botão correto
  const correctButtonIndex = Math.floor(Math.random() * buttons.length);
  otherNumbers[correctButtonIndex] = countTargetColor;

   buttons.forEach((button, index) => {
    button.textContent = otherNumbers[index];
    button.removeEventListener('click', handleButtonClick);
    button.addEventListener('click', function () {
      handleButtonClick.call(this, countTargetColor);
    });
  });

  // Limpa a mensagem e exibe os botões
  messageElement.textContent = '';
  showButtons();  
}

continueButton.addEventListener('click', handleContinueClick);

function generateUniqueNumbers(exclude, count) {
  const uniqueNumbers = [];

  while (uniqueNumbers.length < count) {
    const number = getRandomNumber(exclude);
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers;
}

function getRandomNumber(exclude) {
  let number;
  do {
    number = Math.floor(Math.random() * 6) + 1;
  } while (number === exclude);
  return number;
}

function showButtons() {
  buttonMessageContainer.style.display = 'flex';
}

function hideButtons() {
  buttonMessageContainer.style.display = 'none';
}

function handleButtonClick(countTargetColor) {
  const selectedText = this.textContent.trim();

  // Verifica se o texto não está vazio
  if (!selectedText) {
    console.error('Erro: O texto está vazio.');
    return;
  }

  // Converte o texto para número
  const selectedNumber = parseInt(selectedText, 10);

  if (isNaN(selectedNumber)) {
    console.error(`Erro: Não foi possível converter o texto "${selectedText}" para número.`);
    return;
  }

  console.log(`Número selecionado: ${selectedNumber}`);
  console.log(`Contagem alvo: ${countTargetColor}`);

  // Verifica se o número selecionado é o mesmo da cor alvo
  if (selectedNumber === countTargetColor) {
    messageElement.textContent = 'Parabéns! Você acertou!';
    showButtons(); 
  } else {
    messageElement.textContent = 'Ops! Tente novamente.';
    showButtons();
  }

  currentAttempt++;
  totalAttempts++;

  if (currentRound <= maxRounds) {
    // Exibe mensagem de sucesso ou falha
    messageElement.textContent = (selectedNumber === countTargetColor) ? 'Parabéns! Você acertou!' : 'Ops! Tente novamente.';
    showButtons();
  } else {
  
    messageElement.textContent = `Fim de jogo. Você tentou ${totalAttempts} vezes em ${maxRounds} rodadas. Limite de rodadas atingido.`;
    showButtons();
  }
}

function handleContinueClick() {
  // Reinicia o número de tentativas, a contagem total de tentativas e as rodadas
  totalAttempts = 0;
  roundsCompleted = 0;

  hideButtons();
  updateColors();
}

hideButtons();
updateColors();