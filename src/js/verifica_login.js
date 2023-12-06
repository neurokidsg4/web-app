
if(localStorage.getItem('restricted_area')) {
    localStorage.setItem('login', '');
    window.location.href = './index.html';
}

localStorage.setItem('restricted_area', 'true');
