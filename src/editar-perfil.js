var btnSave = document.getElementById("btn-save");

btnSave.addEventListener("click", function(){

    var nome = document.getElementById("iname").value;
    localStorage.setItem("nome", nome);

    var genero = document.getElementById("igender-select").value;
    localStorage.setItem("genero", genero);

    var nascimento = document.getElementById("ibirth").value;
    localStorage.setItem("nascimento", nascimento);

})


/*Os dados não persistem.
Quando deixa de preencher algum campo ele fica vazio, mesmo que tenha preenchido anteriormente.
Arrumar um jeito de persistir os dados uma vez preenchidos.*/