document.addEventListener('DOMContentLoaded', function () {
    var satisfação = ''; // Inicializa a variável satisfação

    // Captura seleção do Span e faz a classificação baseada no ID de cada Span
    document.getElementById('sentiment_satisfied').addEventListener('click', function () {
        satisfação = 'Satisfied';
    });

    document.getElementById('sentiment_neutral').addEventListener('click', function () {
        satisfação = 'Neutral';
    });

    document.getElementById('sentiment_dissatisfied').addEventListener('click', function () {
        satisfação = 'Dissatisfied';
    });

    // Captura a seleção do checkbox e faz a classificação baseada no ID de cada checkbox
    var type = ''; // Inicializa a variável type

    document.getElementById('bug').addEventListener('click', function () {
        type = 'bug';
    });

    document.getElementById('sugestion').addEventListener('click', function () {
        type = 'sugestion';
    });

    document.getElementById('other').addEventListener('click', function () {
        type = 'other';
    });

    // Função para salvar um feedback no localStorage
    function saveFeedback(feedback) {
        const existingFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        existingFeedbacks.push(feedback);
        localStorage.setItem('feedbacks', JSON.stringify(existingFeedbacks));
    }

    // Função para listar todos os feedbacks salvos no localStorage
    function listFeedbacks() {
        const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        const feedbackList = document.getElementById('feedback-list'); // Adicione um elemento para listar os feedbacks

        // Limpe a lista de feedbacks antes de exibir novamente
        feedbackList.innerHTML = '';

        feedbacks.forEach((feedback, index) => {
            // Crie elementos HTML para exibir o feedback
            const feedbackItem = document.createElement('div');
            feedbackItem.classList.add('feedback-item');
            feedbackItem.innerHTML = `
                <h3>ID: ${feedback.id}</h3>
                <p>Satisfação: ${feedback.satisfaction}</p>
                <p>Descrição: ${feedback.description}</p>
                <p>Tipo: ${feedback.type}</p>
            `;
            feedbackList.appendChild(feedbackItem);
        });
    }

    // Event listener para capturar e salvar feedback
    document.getElementById('submit-feedback').addEventListener('click', function () {
        const satisfactionElements = document.querySelectorAll('.satisfaction span');
        for (const element of satisfactionElements) {
            if (element.classList.contains('selected')) {
                satisfação = element.id;
                break;
            }
        }

        const description = document.getElementById('message').value;
        const typeElements = document.querySelectorAll('.type-error input[type="checkbox"]');
        for (const element of typeElements) {
            if (element.checked) {
                type = element.value;
                break;
            }
        }

        const feedback = {
            id: new Date().getTime(),
            satisfaction: satisfação,
            description: description,
            type: type,
        };

        saveFeedback(feedback);
        listFeedbacks();
    });

    // Event listener para reiniciar o formulário
    document.querySelector('button[type="reset"]').addEventListener('click', function () {
    // Seleciona o formulário e chama o método reset() para reiniciá-lo
    document.querySelector('.feedback-form').reset();
    });

    // Adicione a chamada para listar feedbacks ao carregar a página
    listFeedbacks();
});


// Captura seleção do Span e faz a classificação baseado no ID de cada Span
document.getElementById('sentiment_satisfied').addEventListener('click', function() {
    satisfação = 'Muito Boa';
    // Remove a classe "selected" de todos os ícones de satisfação
    const satisfactionIcons = document.querySelectorAll('.satisfaction span');
    satisfactionIcons.forEach(icon => icon.classList.remove('selected'));
    // Adiciona a classe "selected" ao ícone de satisfação selecionado
    this.classList.add('selected');
});

document.getElementById('sentiment_neutral').addEventListener('click', function() {
    satisfação = 'Neutra';
    // Remova a classe "selected" de todos os ícones de satisfação
    const satisfactionIcons = document.querySelectorAll('.satisfaction span');
    satisfactionIcons.forEach(icon => icon.classList.remove('selected'));
    // Adicione a classe "selected" ao ícone de satisfação selecionado
    this.classList.add('selected');
});

document.getElementById('sentiment_dissatisfied').addEventListener('click', function() {
    satisfação = 'Muito Ruim';
    // Remove a classe "selected" de todos os ícones de satisfação
    const satisfactionIcons = document.querySelectorAll('.satisfaction span');
    satisfactionIcons.forEach(icon => icon.classList.remove('selected'));
    // Adiciona a classe "selected" ao ícone de satisfação selecionado
    this.classList.add('selected');
});
