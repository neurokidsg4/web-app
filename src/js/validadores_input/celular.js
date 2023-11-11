
const regex = new RegExp('[0-9]{2}');
const regex2 = new RegExp('[!@#$%¨&*+-/a-zA-Z\s:;.,]+');

const input = document.getElementById("cell_phone");
const field = document.getElementById("field--cell_phone");
const message = document.querySelector("#message--cell_phone.message--invalid");

window.onload = function(){
    
    input.addEventListener("input", up);

    function up() {
        
        if(input.value.length >= 2 && input.value.length < 3) {
           
            try {
                const valueNew = input.value.replace(regex, `(${regex.exec(input.value)[0]})`);
                input.value = valueNew.trim();
                
            } catch (err) {
                console.log(err);
            };
        }

        if(regex2.test(input.value)) {
            field.classList.add('field--invalid');
            input.classList.add('input--invalid');
            message.style.display = 'inline-block';

            input.value = input.value.trim();
        } else {
            field.classList.remove('field--invalid');
            input.classList.remove('input--invalid');
            message.style.display = 'none';

            input.value = input.value.trim();
        }
    }
}
