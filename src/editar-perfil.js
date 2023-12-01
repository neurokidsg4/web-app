 
/*Pegando os dados atuais do perfil já armazenados no localstorage e preenchendo automaticamente no campos de editar perfil*/

var nomeAtual = localStorage.getItem("nome");
document.getElementById("name").value = nomeAtual;

var generoAtual = localStorage.getItem("genero");
document.getElementById("gender-select").value = generoAtual;

var nascimentoAtual = localStorage.getItem("nascimento");
document.getElementById("birth").value = nascimentoAtual;

var emailAtual = localStorage.getItem("email");
document.getElementById("email").value = emailAtual;

var cellAtual = localStorage.getItem("celular");
document.getElementById("cell_phone").value = cellAtual;

var enderecoAtual = localStorage.getItem("cep");
document.getElementById("address").value = enderecoAtual;

var sobreMimAtual = localStorage.getItem("sobreMim");
document.getElementById("about").value = sobreMimAtual;


/*Pegando os novos valores digitados nos campos de editar perfil e atualizando no localstorage*/

var btnSave = document.getElementById("btn-save");

btnSave.addEventListener("click", function(){

    var nome = document.getElementById("name").value;
    localStorage.setItem("nome", nome);

    var genero = document.getElementById("gender-select").value;
    localStorage.setItem("genero", genero);

    var nascimento = document.getElementById("birth").value;
    localStorage.setItem("nascimento", nascimento);

    var email = document.getElementById("email").value;
    localStorage.setItem("email", email);

    var celular = document.getElementById("cell_phone").value;
    localStorage.setItem("celular", celular);

    var endereco = document.getElementById("address").value;
    localStorage.setItem("cep", endereco);

    var sobreMim = document.getElementById("about").value;
    localStorage.setItem("sobreMim", sobreMim);

});
