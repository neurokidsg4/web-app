
const button = document.getElementById('button');
const user = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};

button.addEventListener('click', (e) => {

    e.preventDefault();

    console.log(user);
    console.log(user.email);
    console.log(user.senha);
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(email);
    console.log(password);
    console.log(user.senha === password && user.email === email);

    if(user.senha === password && user.email === email) {
        
        window.location.href = localStorage.getItem('redirect') ? localStorage.getItem('redirect') : './index.html';
        localStorage.delete('redirect');

    } else {
        alert('Usuário ou senha inválidos. Verifique e tente novamente.');
    };
})
