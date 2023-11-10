import { Database } from '../services/Database.js';

const btnActionLogout = document.querySelectorAll('.btn_action_logout');
const btnActionLogin = document.querySelectorAll('.btn_action_login');

const btnLogout = document.querySelectorAll('.btn_logout');
const btnLogin = document.querySelectorAll('.btn_login');

if(Database.isLogged('user')) {

    btnLogin.forEach(btn => {
        btn.style.display = 'none';
    })
}
else {

    btnLogout.forEach(btn => {
        btn.style.display = 'none';
    })
}

btnActionLogout.forEach(btn => {
    btn.addEventListener('click', () => {

        Database.delete('user');
        window.location.href = "./index.html";
    })
})

btnActionLogin.forEach(btn => {
    
    btn.addEventListener('click', () => {
        window.location.href = "./login.html";
    })
})
