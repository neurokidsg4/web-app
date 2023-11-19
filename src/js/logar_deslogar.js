
import { LocalStorage } from './services/LocalStorage.js';

const btnActionLogout = document.querySelectorAll('.btn_action_logout');
const btnActionLogin = document.querySelectorAll('.btn_action_login');

const btnLogout = document.querySelectorAll('.btn_logout');
const btnLogin = document.querySelectorAll('.btn_login');

if(LocalStorage.isLogged('user')) {

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

        LocalStorage.delete('user');
        location.reload();
    })
})

btnActionLogin.forEach(btn => {
    
    btn.addEventListener('click', () => {
        window.location.href = "./login.html";
    })
})
