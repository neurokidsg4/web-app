
const regex = new RegExp('^([@!&#.-_a-zA-Z0-9]{4,8})$');

const input = document.getElementById("password");
const field = document.getElementById("field--password");
const message = document.querySelector("#message--password.message--invalid");

input.addEventListener("blur", blur);

function blur() {
    
    if(!regex.test(input.value)) {
        field.classList.add('field--invalid');
        input.classList.add('input--invalid');
        message.style.display = 'inline-block';

    } else {
        field.classList.remove('field--invalid');
        input.classList.remove('input--invalid');
        message.style.display = 'none';
    }
}
