import { User } from './entities/User.js'

const button = document.getElementById('button');

button.addEventListener('click', (e) => {

    e.preventDefault();
    
    const inputs = document.querySelectorAll('.input--required');
    let itsOk = true;

    console.log(inputs);

    for(let control = 0; control <= inputs.length - 1 ; control ++) {

        if(inputs[control].value === '' || inputs[control].className.endsWith('input--invalid')) {
            inputs[control].setCustomValidity('Preencha este campo corretamente.')
            inputs[control].reportValidity();
            inputs[control].focus();
            itsOk = false;
            return;
        }
    }

    if(itsOk) {

        const name = document.getElementById('name').value;
        const photo = document.getElementById('file__pictury').value;
        const email = document.getElementById('email').value;
        const gender = document.getElementById('gender').value;
        const birth = document.getElementById('birth').value;
        const acting = document.getElementById('acting').value;
        const about = document.getElementById('about').value;
        const password = document.getElementById('password').value;
        const cellPhone = document.getElementById('cell_phone').value;
        const cep = document.getElementById('endereco').value;
        
        let user = new User(photo, name, email, acting, gender, cellPhone, birth, password, about, cep);
        
        const url = "http://localhost:3000/users";

        fetch(url, {
            method : "POST",
            body : JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}
        }).then(
            response => response.text()
        ).then(
            () => alert('Cadastro realizado com sucesso! Vá para página de login e entre com sua nova conta.')
        ). catch(
            err => alert('Ops! Algo deu errado. Você pode tentar realizar o cadastro novamente mais tarde; nos enviar um feedback relatando o erro ou nos contatar diretamente através do link no rodape, chamado "Contato".')
        );
    }
})
