
const btnActionLogout = document.querySelectorAll('.btn_action_logout');
const btnActionLogin = document.querySelectorAll('.btn_action_login');

const btnLogout = document.querySelectorAll('.btn_logout');
const btnLogin = document.querySelectorAll('.btn_login');

if(localStorage.getItem('login')) {

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

        if(localStorage.getItem('restricted_area')) {
          window.location.href = './index.html';
          localStorage.setItem('login', '');

        } else {

            localStorage.setItem('login', '');
            location.reload();
        }
    })
})

btnActionLogin.forEach(btn => {
    
    btn.addEventListener('click', () => {
        window.location.href = "./login.html";
    })
})

localStorage.setItem('restricted_area', '');
