
const dialog = document.querySelector('dialog');
const button = document.getElementById('btn-historico');
const buttonClose = document.querySelectorAll('.close');

button.onclick = function() {
    dialog.showModal();
};

buttonClose.forEach(btn => {
    btn.onclick = function() {
        dialog.close();
    }
});

