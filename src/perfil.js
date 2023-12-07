
const usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};

document.getElementById("info-name-1").innerHTML = usuario.nome;
document.getElementById("name").innerHTML = usuario.nome;
document.getElementById("info-gender-1").innerHTML = usuario.genero;
document.getElementById("info-birth-1").innerHTML = usuario.nascimento;
document.getElementById("info-email-1").innerHTML = usuario.email;
document.getElementById("info-cell-1").innerHTML = usuario.celular;
document.getElementById("info-add-1").innerHTML = usuario.cep;
document.getElementById("iabout-me").innerHTML = usuario.sobreMin;
document.getElementById("info-add-estado").innerHTML = usuario.estado;
document.getElementById("info-add-cidade").innerHTML = usuario.cidade;
document.getElementById("ocupation").innerHTML = usuario.atuacao;

