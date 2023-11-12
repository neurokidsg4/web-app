
const input = document.getElementById("birth");
const field = document.getElementById("field--birth");
const message = document.querySelector("#message--birth.message--invalid");

input.addEventListener("blur", blurFunction);

function blurFunction() {

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
