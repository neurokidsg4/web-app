/*Pegando os dados atuais do perfil e salvando no localstorage*/
import { LocalStorage } from './js/services/LocalStorage.js';

const btnEditar = document.getElementById('btn-edit');

const user = LocalStorage.select('user');
console.log(user);

const id = user[0].id;


const url = `http://localhost:3000/users/${id}`;

fetch(url, {
    method : "GET",
    headers: {'Content-Type': 'application/json'}
})
.then(response => response.json())
.then((user) => {

    console.log(user);
    var novoNome = user.name;
    document.getElementById("info-name-1").innerHTML = novoNome;
    
    var novoGenero = user.gender;
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

})
.catch(err => {});


// btnEditar.addEventListener("click", function(){

//     var nome = document.getElementById('info-name-1').innerHTML;
//     localStorage.setItem("nome", nome);

//     var genero = document.getElementById('info-gender-1').innerHTML;
//     localStorage.setItem("genero", genero);

//     var nascimento = document.getElementById('info-birth-1').innerHTML;
//     localStorage.setItem("nascimento", nascimento);

//     var email = document.getElementById('info-email-1').innerHTML;
//     localStorage.setItem("email", email);

//     var cell = document.getElementById("info-cell-1").innerHTML;
//     localStorage.setItem("cell", cell);

//     var endereco = document.getElementById("info-add-1").innerHTML;
//     localStorage.setItem("endereco", endereco);

//     var sobreMim = document.getElementById("iabout-me").innerHTML;
//     localStorage.setItem("sobreMim", sobreMim);

// });

// /*Pegando os novos dados do localstorage e colocando no perfil */

// var novoNome = localStorage.getItem("nome");
// document.getElementById("info-name-1").innerHTML = novoNome;
  
// var novoGenero = localStorage.getItem("genero");
// document.getElementById("info-gender-1").innerHTML = novoGenero;

// var novoNascimento = localStorage.getItem("nascimento");
// document.getElementById("info-birth-1").innerHTML = novoNascimento;

// var novoEmail = localStorage.getItem("email");
// document.getElementById("info-email-1").innerHTML = novoEmail;

// var novoCell = localStorage.getItem("cell");
// document.getElementById("info-cell-1").innerHTML = novoCell;

// var novoEndereco = localStorage.getItem("endereco");
// document.getElementById("info-add-1").innerHTML = novoEndereco;

// var novoSobreMim = localStorage.getItem("sobreMim");
// document.getElementById("iabout-me").innerHTML = novoSobreMim;