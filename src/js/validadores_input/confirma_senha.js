
const inputPassword = document.getElementById("password");
const input = document.getElementById("confirm_password");
const field = document.getElementById("field--confirm_password");
const message = document.querySelector("#message--confirm_password.message--invalid");

input.addEventListener("blur", blur);

function blur() {

    console.log(input.value !== inputPassword.value);
    
    if(input.value !== inputPassword.value) {
        field.classList.add('field--invalid');
        input.classList.add('input--invalid');
        message.style.display = 'inline-block';

    } else {
        field.classList.remove('field--invalid');
        input.classList.remove('input--invalid');
        message.style.display = 'none';
    }
}
