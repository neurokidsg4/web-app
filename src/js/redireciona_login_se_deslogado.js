
import { LocalStorage } from "./services/LocalStorage.js";

const children = document.querySelector('.childish_redirect_if')
const profile = document.querySelector('.profile_redirect_if');

children.addEventListener('click', () => {
    if(LocalStorage.isLogged('user')) {
        window.location.href = './area_infantil.html';
    } else {
        LocalStorage.insert('redirect', './area_infantil.html');
        window.location.href = './login.html';
    };
});

profile.addEventListener('click', () => {
    if(LocalStorage.isLogged('user')) {
        window.location.href = './perfil.html';
    } else {
        LocalStorage.insert('redirect', './perfil.html');
        window.location.href = './login.html';
    };
});
