
const regex = new RegExp('^([a-zA-Z0-9&.!_-]+@[a-zA-Z0-9&.!_-]+.[a-zA-Z0-9&.!_-]+)*$');

const input = document.getElementById("email");
const field = document.getElementById("field--email");
const message = document.querySelector("#message--email.message--invalid");
const messageExists = document.querySelector("#message--email_exists.message--invalid");

input.addEventListener("input", inputFunction);

function inputFunction() {
    
    if(!regex.test(input.value)) {

            field.classList.add('field--invalid');
            input.classList.add('input--invalid');
            message.style.display = 'inline-block';
    
    } else {
    
        const email = input.value;

        field.classList.remove('field--invalid');
        input.classList.remove('input--invalid');
        message.style.display = 'none';
    }
}
