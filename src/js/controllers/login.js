
const button = document.getElementById('button');
const user = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};

button.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(user.senha === password && user.email === email) {
        localStorage.setItem('login', 'true');
        window.location.href = localStorage.getItem('redirect') ? localStorage.getItem('redirect') : './index.html';
        localStorage.setItem('redirect', '');

    } else {
        alert('Usuário ou senha inválidos. Verifique e tente novamente.');
    };
})
