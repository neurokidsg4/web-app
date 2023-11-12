import { User } from './entities/User.js'

const button = document.getElementById('button');

button.addEventListener('click', (e) => {

    e.preventDefault();
    
    const inputs = document.querySelectorAll('.input--required');

    for(let control = inputs.length - 1; control >= 0 ; control --) {

        if(inputs[control].value === '' || inputs[control].className.endsWith('input--invalid')) {
            inputs[control].setCustomValidity('Preencha este campo corretamente.')
            inputs[control].reportValidity();
            inputs[control].focus();
        }
    }

    // const name = document.getElementById('name').value;
    // const photo = document.getElementById('file__pictury').value;
    // const email = document.getElementById('email').value;
    // const gender = document.getElementById('gender').value;
    // const birth = document.getElementById('birth').value;
    // const acting = document.getElementById('acting').value;
    // const about = document.getElementById('about').value;
    // const password = document.getElementById('password').value;
    // const cellPhone = document.getElementById('cell_phone').value;
    // const cep = document.getElementById('endereco').value;
    
    // let user = new User(photo, name, email, acting, gender, cellPhone, birth, password, about, cep);
    
    // console.log(inputs);

    // window.location.href = '../login.html';
})
