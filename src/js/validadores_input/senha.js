
const regex = new RegExp('^([@!&#.-_a-zA-Z0-9]{4,8})$');

const input = document.getElementById("password");
const field = document.getElementById("field--password");
const lockIcon = document.querySelector("#field--password.lock");
const eyeOpenIcon = document.querySelector("#field--password.eye_open");
const eyeClosedIcon = document.querySelector("#field--password.eye_closed");
const message = document.querySelector("#message--password.message--invalid");

input.addEventListener("input", inputFunction);

function inputFunction() {
    
    if(!regex.test(input.value)) {

        field.classList.add('field--invalid');
        input.classList.add('input--invalid');
        message.style.display = 'inline-block';
        lockIcon.style.color = '#F86645';
        eyeClosedIcon.style.color = '#F86645';
        eyeOpenIcon.style.color = '#F86645';

    } else {

        field.classList.remove('field--invalid');
        input.classList.remove('input--invalid');
        message.style.display = 'none';
        lockIcon.style.color = '#505050';
        eyeClosedIcon.style.color = '#505050';
        eyeOpenIcon.style.color = '#505050';
    }
}
