 
/*Pegando os dados atuais do perfil já armazenados no localstorage e preenchendo automaticamente no campos de editar perfil*/

import { Cryptography } from "./js/services/cryptography.js";

const usuario = localStorage.getItem('usuario') ? JSON.parse(Cryptography.decode(localStorage.getItem('usuario'))) : {};

var btnSave = document.getElementById("btn-save");

//const foto = localStorage.getItem("foto") || "";

document.getElementById("name").value = usuario.nome;
document.getElementById("gender-select").value = usuario.genero;
document.getElementById("birth").value = usuario.nascimento;
document.getElementById("email").value = usuario.email;
document.getElementById("cell_phone").value = usuario.celular;
document.getElementById("cep").value = usuario.cep;
document.getElementById("about").value = usuario.sobreMim || '';
document.getElementById("state").value = usuario.estado;
document.getElementById("city").value = usuario.cidade;
document.getElementById("ocupation").innerHTML = usuario.atuacao;
document.getElementById("name_profile").innerHTML = usuario.nome;


btnSave.addEventListener("click", function(){

    usuario.nome = document.getElementById("name").value;
    usuario.genero = document.getElementById("gender-select").value;
    usuario.nascimento = document.getElementById("birth").value;
    usuario.email = document.getElementById("email").value;
    usuario.celular = document.getElementById("cell_phone").value;
    usuario.cep = document.getElementById("cep").value;
    usuario.sobreMim = document.getElementById("about").value;
    usuario.estado = document.getElementById("state").value;
    usuario.cidade = document.getElementById("city").value;

    localStorage.setItem("usuario", Cryptography.encode(JSON.stringify(usuario)));
});

//document.getElementById("foto-perfil1").setAttribute("src", `${foto}`);