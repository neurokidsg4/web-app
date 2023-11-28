document.getElementById('cep').addEventListener('blur', function () {
    // Obtem o valor do CEP
    var cep = document.getElementById('cep').value;

    // Consulte a API do ViaCEP
    fetch('https://viacep.com.br/ws/' + cep + '/json/')
        .then(response => response.json())
        .then(data => {
            // Preenche automaticamente os campos de endereço, cidade e estado
            // document.getElementById('endereco').value = data.logradouro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
        })
        .catch(error => console.error('Erro ao consultar o CEP:', error));
});
