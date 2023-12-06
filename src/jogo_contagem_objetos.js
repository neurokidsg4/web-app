function getRandomColor() {
    const colors = ['green', 'yellow', 'red', 'blue'];
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
  
  const maxAttempts = 3;
  let currentAttempt = 0;
  
  function updateColors() {
    currentAttempt++;
  
    if (currentAttempt > maxAttempts) {
      messageElement.textContent = `Fim de jogo. Você tentou ${maxAttempts} vezes. Reiniciando...`;
      setTimeout(() => {
        currentAttempt = 0;
        updateColors();
      }, 2000);
      return;
    }
  
    let randomColor;
    let coloredObjects;
    let correctNumber;
  
    do {
      randomColor = getRandomColor();
      coloredObjects = Array.from(icons).filter(icon => {
        const iconColor = getRandomColor();
        icon.style.backgroundColor = iconColor;
        return iconColor === randomColor;
      });
  
      correctNumber = coloredObjects.length;
    } while (coloredObjects.length === 0);
  
    const textByColor = {
      'green': 'Verde',
      'yellow': 'Amarelo',
      'red': 'Vermelho',
      'blue': 'Azul',
    };
  
    colorTextElement.style.color = randomColor;
    colorTextElement.textContent = textByColor[randomColor];
  
    const availableNumbers = [1, 2, 3, 4, 5];
  
    const shuffledNumbers = availableNumbers.sort(() => Math.random() - 0.5);
  
    buttons.forEach((button, index) => {
      const buttonText = index + 1 === correctNumber ? correctNumber : shuffledNumbers.pop();
      button.textContent = buttonText;
    });

    icons.forEach(icon => {
        const iconColor = getRandomColor();
        icon.style.backgroundColor = iconColor;
        icon.classList.add('rounded');
      });
  
    messageElement.textContent = '';
    showButtons();
  }
  
  function showButtons() {
    buttonMessageContainer.style.display = 'flex';
    continueButton.style.display = 'block';
  }
  
  function hideButtons() {
    buttonMessageContainer.style.display = 'none';
    continueButton.style.display = 'none';
  }
  

  backButton.addEventListener('click', function () {
    
    window.location.href = './area_infantil.html';
  });
  
  continueButton.addEventListener('click', function () {
    hideButtons();
    
  });
  
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedNumber = parseInt(this.textContent);
      const coloredObjects = Array.from(icons).filter(icon => icon.style.backgroundColor === colorTextElement.style.color);
  
      if (selectedNumber === coloredObjects.length) {
        messageElement.textContent = 'Parabéns! Você acertou!';
       
        showButtons();
      } else {
        messageElement.textContent = 'Ops! Tente novamente.';
        
        showButtons();
      }
  
      // Chama a função para definir as cores após um curto intervalo
      setTimeout(updateColors, 1000);
    });
  });
  
  hideButtons();
  updateColors();
  