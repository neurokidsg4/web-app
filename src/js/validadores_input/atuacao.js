
const input = document.getElementById("acting");
const field = document.getElementById("field--acting");
const message = document.querySelector("#message--acting.message--invalid");


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
