
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    
    e.preventDefault();

    const inputsRequired = document.querySelectorAll('.input--required');
    let itsOk = true;

    for(let control = 0; control <= inputsRequired.length - 1 ; control ++) {
        if(inputsRequired[control].value === '' || inputsRequired[control].className.endsWith('input--invalid')) {
            inputsRequired[control].setCustomValidity('Preencha este campo corretamente.')
            inputsRequired[control].reportValidity();
            inputsRequired[control].focus();
            itsOk = false;
            return;
        }
    }

    if(itsOk) {

        localStorage.setItem('nome', document.getElementById('name').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('genero', document.getElementById('gender').value);
        localStorage.setItem('nascimento', document.getElementById('birth').value);
        localStorage.setItem('atuacao', document.getElementById('acting').value);
        localStorage.setItem('sobreMim', document.getElementById('about').value);
        localStorage.setItem('senha', document.getElementById('password').value);
        localStorage.setItem('celular', document.getElementById('cell_phone').value);
        localStorage.setItem('cep', document.getElementById('cep').value);        
    }
})
