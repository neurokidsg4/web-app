 
/*Pegando os dados atuais do perfil já armazenados no localstorage e preenchendo automaticamente no campos de editar perfil*/

var nomeAtual = localStorage.getItem("nome");
document.getElementById("name").value = nomeAtual;

var generoAtual = localStorage.getItem("genero");
document.getElementById("gender-select").value = generoAtual;

var nascimentoAtual = localStorage.getItem("nascimento");
document.getElementById("birth").value = nascimentoAtual;

var emailAtual = localStorage.getItem("email");
document.getElementById("email").value = emailAtual;

var cellAtual = localStorage.getItem("cell_phone");
document.getElementById("cell_phone").value = cellAtual;

var enderecoAtual = localStorage.getItem("endereco");
document.getElementById("address").value = enderecoAtual;

var sobreMimAtual = localStorage.getItem("about");
document.getElementById("about").value = sobreMimAtual;


/*Pegando os novos valores digitados nos campos de editar perfil e atualizando no localstorage*/

var btnSave = document.getElementById("btn-save");

btnSave.addEventListener("click", function(){

    var nome = document.getElementById("iname").value;
    localStorage.setItem("nome", nome);

    var genero = document.getElementById("igender-select").value;
    localStorage.setItem("genero", genero);

    var nascimento = document.getElementById("ibirth").value;
    localStorage.setItem("nascimento", nascimento);

    var email = document.getElementById("iemail").value;
    localStorage.setItem("email", email);

    var cell = document.getElementById("icell").value;
    localStorage.setItem("cell", cell);

    var endereco = document.getElementById("iadd").value;
    localStorage.setItem("endereco", endereco);

    var sobreMim = document.getElementById("iabout-me").value;
    localStorage.setItem("sobreMim", sobreMim);

});