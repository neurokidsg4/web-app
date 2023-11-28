
const regex = new RegExp('^[a-zA-Z]*$');

const input = document.getElementById("name");
const field = document.getElementById("field--name");
const message = document.querySelector("#message--name.message--invalid");

input.addEventListener("input", inputFunction);

function inputFunction() {
    
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
