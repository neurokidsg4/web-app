
import { User } from '../entities/User.js';
import { Cryptography } from '../services/cryptography.js';

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
    
    const date = new Date(document.getElementById('birth').value);

    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const birth = `${day}/${(month)}/${year}`;

    if(itsOk) {

        const user = new User(
            document.getElementById('name').value,
            document.getElementById('email').value,
            document.getElementById('acting').value,
            document.getElementById('gender').value,
            document.getElementById('cell_phone').value,
            birth,
            Cryptography.encode(document.getElementById('password').value),
            document.getElementById('about').value,
            document.getElementById('cep').value,
            document.getElementById('state').value,
            document.getElementById('city').value,
        );
        
        localStorage.setItem('usuario', JSON.stringify(user));

        window.location.href = 'login.html'
    } 
    else { alert('Ops! Algo deu errado. Tente novamente mais tarde. Se o problema persistir contate a gente pelo link "Contato" que se encontra no rodape do site.'); }
});
