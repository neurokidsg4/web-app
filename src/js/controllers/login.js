
import { Cryptography } from "../services/Cryptography.js";
import { LocalStorage } from "../services/LocalStorage.js";

const button = document.getElementById('button');

button.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const url = "http://localhost:3000/users";

    fetch(`${url}?email=${email}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(user => user.json())
    .then(userJson => {

        const passwordUser = Cryptography.b64_to_utf8(userJson[0].password);

        if(passwordUser === password) {
            LocalStorage.insert('user', Cryptography.utf8_to_b64(userJson));
            window.location.href = './index.html';
        } else {
            alert('Senha invalida. Verifique e tente novamente.');
        }
    })
    .catch(err => alert('Usuário inválido. Verifique e tente novamente.'));
})
