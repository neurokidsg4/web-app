
const button = document.getElementById('submit-feedback');

button.addEventListener('click', sendMail);

function sendMail(e) {

    e.preventDefault();

    const radioSentiment = document.querySelectorAll('.radio--sentiment');
    const radioTag = document.querySelectorAll('.radio--tag');

    let sentimentValue;
    let tagValue;

    radioSentiment.forEach(sentiment => {
        if(sentiment.checked) sentimentValue = sentiment.value;
    })

    console.log(sentimentValue);

    radioTag.forEach(tag => {
        if(tag.checked) tagValue = tag.value;
    })

    console.log(tagValue);

    const params = {
        message: document.getElementById('message').value,
        satisfation: sentimentValue,
        tag: tagValue,
    }
    
    const serviceID = 'service_fqsrqhz';
    const templateID = 'template_uppzar8';
    
    emailjs.send(serviceID, templateID, params)
    .then(() => {
        alert('Enviado com sucesso!');
        location.reload();
    })
    .catch(() => alert('Algo deu errado. Tente novamente mais tarde.'));
};
