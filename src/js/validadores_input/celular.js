
const regex = new RegExp('[0-9]{2}');
const regex2 = new RegExp('[_!@#$%¨&*+-/a-zA-Z\s:;.,]+');
const regex3 = new RegExp('^[0-9()]{4}[0-9]{9}$');
const regex4 = /\(/;
const regex5 = /\)/;

const input = document.getElementById("cell_phone");
const field = document.getElementById("field--cell_phone");
const message = document.querySelector("#message--cell_phone.message--invalid");

window.onload = function() {

    input.addEventListener("blur", blur);
    
    function blur() {

        if(!regex3.test(input.value) && input.value !== '') {

            console.log("entrei no blur");

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

    input.addEventListener("input", inputFunction);

    function inputFunction() {
        
        if(input.value.length >= 2 && input.value.length < 3) {
           
            try {
                const valueNew = input.value.replace(regex, `(${regex.exec(input.value)[0]})`);
                input.value = valueNew.trim();
                
            } catch (err) {
                console.log(err);
            };
        }

        if(
            input.value.length <= 11 && 
            input.value.length >= 2 && 
            !regex4.test(input.value) && 
            !regex5.test(input.value)
        ) {
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
