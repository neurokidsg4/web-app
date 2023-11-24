// document.addEventListener('DOMContentLoaded', function () {
//     var satisfação = ''; // Inicializa a variável satisfação

//     // Mapeamento dos IDs para textos
//     var satisfactionMap = {
//         'sentiment_satisfied': 'muito satisfeito',
//         'sentiment_neutral': 'neutro',
//         'sentiment_dissatisfied': 'muito ruim'
//     };

//     // Captura seleção do Span e faz a conversão do ID para texto
//     document.querySelectorAll('.satisfaction span').forEach(span => {
//         span.addEventListener('click', function () {
//             satisfação = satisfactionMap[this.id]; // Converta o ID em texto
//             // Remova a classe "selected" de todos os ícones de satisfação
//             document.querySelectorAll('.satisfaction span').forEach(icon => icon.classList.remove('selected'));
//             // Adicione a classe "selected" ao ícone de satisfação selecionado
//             this.classList.add('selected');
//         });
//     });

//     // Função para salvar um feedback no localStorage
//     function saveFeedback(feedback) {
//         const existingFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
//         existingFeedbacks.push(feedback);
//         localStorage.setItem('feedbacks', JSON.stringify(existingFeedbacks));
//     }

//     // Função para listar todos os feedbacks salvos no localStorage
//     function listFeedbacks() {
//         const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
//         const feedbackList = document.getElementById('feedback-list'); // Adicione um elemento para listar os feedbacks

//         // Limpe a lista de feedbacks antes de exibir novamente
//         feedbackList.innerHTML = '';

//         feedbacks.forEach((feedback, index) => {
//             // Crie elementos HTML para exibir o feedback
//             const feedbackItem = document.createElement('div');
//             feedbackItem.classList.add('feedback-item');
//             feedbackItem.innerHTML = `
//                 <h3>ID: ${feedback.id}</h3>
//                 <p>Satisfação: ${feedback.satisfaction}</p>
//                 <p>Descrição: ${feedback.description}</p>
//                 <p>Tipo: ${feedback.type}</p>
//             `;
//             feedbackList.appendChild(feedbackItem);
//         });
//     }

//     // Event listener para capturar e salvar feedback
//     document.getElementById('submit-feedback').addEventListener('click', function () {
//         const satisfactionElements = document.querySelectorAll('.satisfaction span');
//         for (const element of satisfactionElements) {
//             if (element.classList.contains('selected')) {
//                 satisfação = satisfactionMap[element.id]; // Use o mapeamento para obter o texto correto
//                 break;
//             }
//         }

//         const description = document.getElementById('message').value;
//         const typeElements = document.querySelectorAll('.type-error input[type="checkbox"]');
//         var type = ''; // Inicializa a variável type
//         typeElements.forEach(element => {
//             if (element.checked) {
//                 type = element.value;
//             }
//         });

//         const feedback = {
//             id: new Date().getTime(),
//             satisfaction: satisfação,
//             description: description,
//             type: type,
//         };

//         saveFeedback(feedback);
//         listFeedbacks();
//     });

//     // Event listener para reiniciar o formulário
//     document.querySelector('button[type="reset"]').addEventListener('click', function () {
//         // Seleciona o formulário e chama o método reset() para reiniciá-lo
//         document.querySelector('.feedback-form').reset();
//     });

//     // Adicione a chamada para listar feedbacks ao carregar a página
//     listFeedbacks();
// });
