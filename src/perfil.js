
var nome = document.querySelector("#info-name-1");

fetch("/db/db.json").then((response) => {

    response.json().then((dados) => {

        dados.users.map((usuario) => {

            Nnome.innerHTML = usuario.nome;
        })
    }) 

})



/*Pegando os dados atuais do perfil e salvando no localstorage

const btnEditar = document.getElementById('btn-edit');

btnEditar.addEventListener("click", function(){

    var nome = document.getElementById('info-name-1').innerHTML;
    localStorage.setItem("nome", nome);

    var genero = document.getElementById('info-gender-1').innerHTML;
    localStorage.setItem("genero", genero);

    var nascimento = document.getElementById('info-birth-1').innerHTML;
    localStorage.setItem("nascimento", nascimento);

    var email = document.getElementById('info-email-1').innerHTML;
    localStorage.setItem("email", email);

    var cell = document.getElementById("info-cell-1").innerHTML;
    localStorage.setItem("cell", cell);

    var endereco = document.getElementById("info-add-1").innerHTML;
    localStorage.setItem("endereco", endereco);

    var sobreMim = document.getElementById("iabout-me").innerHTML;
    localStorage.setItem("sobreMim", sobreMim);

});

//Pegando os novos dados do localstorage e colocando no perfil

var novoNome = localStorage.getItem("nome");
document.getElementById("info-name-1").innerHTML = novoNome;
  
var novoGenero = localStorage.getItem("genero");
document.getElementById("info-gender-1").innerHTML = novoGenero;

    var novoNascimento = localStorage.getItem("nascimento");
    document.getElementById("info-birth-1").innerHTML = novoNascimento;

    var novoEmail = localStorage.getItem("email");
    document.getElementById("info-email-1").innerHTML = novoEmail;

    var novoCell = localStorage.getItem("cell");
    document.getElementById("info-cell-1").innerHTML = novoCell;

    var novoEndereco = localStorage.getItem("endereco");
    document.getElementById("info-add-1").innerHTML = novoEndereco;

var novoSobreMim = localStorage.getItem("sobreMim");
document.getElementById("iabout-me").innerHTML = novoSobreMim;

*/