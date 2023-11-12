
const passwordChecked = document.getElementById('checkbox__visibility___password');
const confirmPasswordChecked = document.getElementById('checkbox__visibility___confirm_password');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

passwordChecked.addEventListener('click', () => {
    if(passwordChecked.checked) {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
})

confirmPasswordChecked.addEventListener('click', () => {
    if(confirmPasswordChecked.checked) {
        confirmPassword.setAttribute('type', 'text');
    } else {
        confirmPassword.setAttribute('type', 'password');
    }
})
