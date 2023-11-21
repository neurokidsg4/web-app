 
/*Pegando os dados atuais do perfil já armazenados no localstorage e preenchendo automaticamente no campos de editar perfil*/

var nomeAtual = localStorage.getItem("nome");
document.getElementById("iname").value = nomeAtual;

var generoAtual = localStorage.getItem("genero");
document.getElementById("igender-select").value = generoAtual;

var nascimentoAtual = localStorage.getItem("nascimento");
document.getElementById("ibirth").value = nascimentoAtual;


/*Pegando os novos valores digitados nos campos de editar perfil e atualizando no localstorage*/

var btnSave = document.getElementById("btn-save");

btnSave.addEventListener("click", function(){

    var nome = document.getElementById("iname").value;
    localStorage.setItem("nome", nome);

    var genero = document.getElementById("igender-select").value;
    localStorage.setItem("genero", genero);

    var nascimento = document.getElementById("ibirth").value;
    localStorage.setItem("nascimento", nascimento);

});