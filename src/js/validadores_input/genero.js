
const input = document.getElementById("gender");
const field = document.getElementById("field--gender");
const message = document.querySelector("#message--gender.message--invalid");

input.addEventListener("blur", blur);

function blur() {

    if(input.value === '') {
        field.classList.add('field--invalid');
        input.classList.add('input--invalid');
        message.style.display = 'inline-block';

    } else {
        field.classList.remove('field--invalid');
        input.classList.remove('input--invalid');
        message.style.display = 'none';
    }
}
