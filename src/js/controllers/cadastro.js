
import { User } from '../entities/User.js';

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

        const user = new User(
            document.getElementById('name').value,
            document.getElementById('email').value,
            document.getElementById('acting').value,
            document.getElementById('gender').value,
            document.getElementById('cell_phone').value,
            document.getElementById('birth').value,
            document.getElementById('password').value,
            document.getElementById('about').value,
            document.getElementById('cep').value
        );
        
        localStorage.setItem('usuario', JSON.stringify(user));

        alert('Cadastro realizado com sucesso. Agora vá para a página de login e entre com sua nova conta.');
    } 
    else { alert('Ops! Algo deu errado. Tente novamente mais tarde. Se o problema persistir contate a gente pelo link "Contato" que se encontra no rodape do site.'); }
});
