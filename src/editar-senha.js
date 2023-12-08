
const usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};

const btnConfirmar = document.getElementById("iconfirm");

btnConfirmar.addEventListener("click", function(){

    usuario.senha = document.getElementById("ipw").value;

    localStorage.setItem("usuario", JSON.stringify(usuario));

});

