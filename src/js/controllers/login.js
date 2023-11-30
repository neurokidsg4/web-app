
import { Cryptography } from "../services/Cryptography.js";
import { LocalStorage } from "../services/LocalStorage.js";

const button = document.getElementById('button');

button.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const url = "https://api-neurokids.vercel.app/users";

    fetch(`${url}?email=${email}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(user => user.json())
    .then(userJson => {

        const passwordUser = Cryptography.b64_to_utf8(userJson[0].password);

        if(passwordUser === password) {
            LocalStorage.insert('user', userJson);
            window.location.href = LocalStorage.exists('redirect') ? LocalStorage.select('redirect') : './index.html';
            LocalStorage.delete('redirect');
        } else {
            alert('Usuário ou senha invalidos. Verifique e tente novamente.');
        }
    })
    .catch(err => alert('Usuário inválido. Verifique e tente novamente.'));
})
