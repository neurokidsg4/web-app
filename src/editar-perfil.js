 
/*Pegando os dados atuais do perfil já armazenados no localstorage e preenchendo automaticamente no campos de editar perfil*/

const usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};
var btnSave = document.getElementById("btn-save");

document.getElementById("name").value = usuario.nome;
document.getElementById("gender-select").value = usuario.genero;
document.getElementById("birth").value = usuario.nascimento;
document.getElementById("email").value = usuario.email;
document.getElementById("cell_phone").value = usuario.celular;
document.getElementById("address").value = usuario.cep;
document.getElementById("about").value = usuario.sobreMim || '';

btnSave.addEventListener("click", function(){

    usuario.nome = document.getElementById("name").value;
    usuario.genero = document.getElementById("gender-select").value;
    usuario.nascimento = document.getElementById("birth").value;
    usuario.email = document.getElementById("email").value;
    usuario.celular = document.getElementById("cell_phone").value;
    usuario.cep = document.getElementById("address").value;
    usuario.sobre = document.getElementById("about").value;
    usuario.estado = document.getElementById("state").value;
    usuario.cidade = document.getElementById("city").value;

    localStorage.setItem("usuario", JSON.stringify(usuario));
});
