
const children = document.querySelectorAll('.childish_redirect_if')
const profile = document.querySelectorAll('.profile_redirect_if');

children.forEach(btn => {

    btn.addEventListener('click', () => {
        if(localStorage.getItem('login')) {
            window.location.href = './area_infantil.html';
        } else {
            localStorage.setItem('redirect', './area_infantil.html');
            window.location.href = './login.html';
        };
    });
})

profile.forEach(btn => {
    
    btn.addEventListener('click', () => {
        if(localStorage.getItem('login')) {
            window.location.href = './perfil.html';
        } else {
            localStorage.setItem('redirect', './perfil.html');
            window.location.href = './login.html';
        };
    });
})

localStorage.setItem('redirect', '');
