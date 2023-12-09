
const usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};

const btnConfirmar = document.getElementById("iconfirm");

btnConfirmar.addEventListener("click", function(){

    usuario.senha = document.getElementById("ipw").value;

    localStorage.setItem("usuario", JSON.stringify(usuario));

});


//Validando o campo de senha

const erro = document.getElementById("erro");

document.getElementById("iconfirm").disabled = true;

let senha = document.getElementById("ipw");

    senha.addEventListener("input", function(){

    let qtdSenha = senha.value.length;

    if(qtdSenha < 4 || qtdSenha > 8){

        erro.style.display = "block";
        document.getElementById("iconfirm").disabled = true;
    }
    else{

        erro.style.display = "none";
        document.getElementById("iconfirm").disabled = false;

    }


});

