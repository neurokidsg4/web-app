/*Pegando os dados atuais do perfil e salvando no localstorage*/

btnEditar = document.getElementById('btn-edit');

btnEditar.addEventListener("click", function(){

    var nome = document.getElementById('info-name-1').innerHTML;
    localStorage.setItem("nome", nome);

    var genero = document.getElementById('info-gender-1').innerHTML;
    localStorage.setItem("genero", genero);

    var nascimento = document.getElementById('info-birth-1').innerHTML;
    localStorage.setItem("nascimento", nascimento);

    var email = document.getElementById('info-email-1').innerHtml;
    localStorage.setItem("email", email);

    var cell = document.getElementById("info-cell-1").innerHTML;
    localStorage.setItem("cell", cell);

});

/*Pegando os novos dados do localstorage e colocando no perfil */

var novoNome = localStorage.getItem("nome");
document.getElementById("info-name-1").innerHTML = novoNome;
  
var novoGenero = localStorage.getItem("genero");
document.getElementById("info-gender-1").innerHTML = novoGenero;

var novoNascimento = localStorage.getItem("nascimento");
document.getElementById("info-birth-1").innerHTML = novoNascimento;