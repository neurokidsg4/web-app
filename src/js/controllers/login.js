
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
    .then(userJson => console.log(userJson))
    .catch(err => console.error(err));
})
