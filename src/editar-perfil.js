 
/*Pegando os dados atuais do perfil já armazenados no localstorage e preenchendo automaticamente no campos de editar perfil*/

const usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : {};
var btnSave = document.getElementById("btn-save");
console.log(usuario)
console.log(usuario.nome)

// var foto = localStorage.getItem("foto");
// document.getElementById("foto").src = foto;

// var novoNome = localStorage.getItem("nome");
document.getElementById("name").value = usuario.nome;
  
// var novoGenero = localStorage.getItem("genero");
document.getElementById("gender-select").value = usuario.genero;

// var novoNascimento = localStorage.getItem("nascimento");
document.getElementById("birth").value = usuario.nascimento;

// var novoEmail = localStorage.getItem("email");
document.getElementById("email").value = usuario.email;

// var novoCell = localStorage.getItem("celular");
document.getElementById("cell_phone").value = usuario.celular;

// var novoEndereco = localStorage.getItem("cep");
document.getElementById("address").value = usuario.cep;

// var novoSobreMim = localStorage.getItem("sobreMim");
document.getElementById("about").value = usuario.sobreMim || '';

/*Pegando os novos valores digitados nos campos de editar perfil e atualizando no localstorage*/


btnSave.addEventListener("click", function(){

    var nome = document.getElementById("name").value;
    // localStorage.setItem("nome", nome);
    usuario.nome = nome;

    var genero = document.getElementById("gender-select").value;
    // localStorage.setItem("genero", genero);
    usuario.genero = genero;

    var nascimento = document.getElementById("birth").value;
    // localStorage.setItem("nascimento", nascimento);
    usuario.nascimento = nascimento;

    var email = document.getElementById("email").value;
    // localStorage.setItem("email", email);
    usuario.email = email;

    var celular = document.getElementById("cell_phone").value;
    // localStorage.setItem("celular", celular);
    usuario.celular = celular;

    var cep = document.getElementById("address").value;
    // localStorage.setItem("cep", endereco);
    usuario.cep = cep;

    var sobre = document.getElementById("about").value;
    // localStorage.setItem("sobreMim", sobreMim);
    usuario.sobre = sobre;
    console.log(usuario)
    
    localStorage.setItem("usuario", JSON.stringify(usuario));
});
