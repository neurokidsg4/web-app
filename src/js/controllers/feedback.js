const button = document.getElementById('submit-feedback');

button.addEventListener('click', (e) => { 
    
    e.preventDefault();

    const inputsRequired = document.querySelectorAll('.input--invalid');
    const message = document.getElementById('message');
    let itsOk = true;

    for(let control = 0; control <= inputsRequired.length - 1 ; control ++) {
        if(inputsRequired[control].className.endsWith('input--invalid')) {
            inputsRequired[control].focus();
            inputsRequired[control].setCustomValidity('Preencha este campo corretamente.')
            inputsRequired[control].reportValidity();
            itsOk = false;
            return;
        }
    }
    
    if(itsOk && message.value) sendMail();
    else {
        alert('O campo de mensagem não pode ser enviado vazio.');
        message.focus();
        itsOk = false;
        return;
    }
});

function sendMail() {

    const radioSentiment = document.querySelectorAll('.radio--sentiment');
    const radioTag = document.querySelectorAll('.radio--tag');
    
    let sentimentValue;
    let tagValue;

    radioSentiment.forEach(sentiment => {
        if(sentiment.checked) sentimentValue = sentiment.value;
    })

    radioTag.forEach(tag => {
        if(tag.checked) tagValue = tag.value;
    });

    const params = {
        message: message.value,
        email: document.getElementById('email').value || 'Prefiro não informar meu email',
        name: document.getElementById('name').value || 'Prefiro não informar meu nome',
        satisfation: sentimentValue || 'Prefiro não dizer',
        tag: tagValue || 'Prefiro não dizer',
    };
    
    const serviceID = 'service_fqsrqhz';
    const templateID = 'template_uppzar8';
    
    emailjs.send(serviceID, templateID, params)
    .then(() => {
        alert('Enviado com sucesso! Nossa equipe agradece sua colaboração. Retornaremos em breve, após ler seu email.');
        location.reload();
    })
    .catch(() => alert('Algo deu errado. Tente novamente mais tarde.'));
};
