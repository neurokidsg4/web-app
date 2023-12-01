
const children = document.querySelector('.childish_redirect_if')
const profile = document.querySelector('.profile_redirect_if');

children.addEventListener('click', () => {
    if(localStorage.getItem('usuario')) {
        window.location.href = './area_infantil.html';
    } else {
        localStorage.setItem('redirect', './area_infantil.html');
        window.location.href = './login.html';
    };
});

profile.addEventListener('click', () => {
    if(localStorage.getItem('usuario')) {
        window.location.href = './perfil.html';
    } else {
        localStorage.setItem('redirect', './perfil.html');
        window.location.href = './login.html';
    };
});
