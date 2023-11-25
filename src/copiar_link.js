document.addEventListener('DOMContentLoaded', function () {
    var pageLink = document.getElementById('pageLink');

    if (pageLink) {
        pageLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Copiar o link para a área de transferência usando API clipboard
            var linkToCopy = window.location.href;
            navigator.clipboard.writeText(linkToCopy)
                .then(function () {
                    // Exibir mensagem de sucesso
                    console.log('Link copiado: ' + linkToCopy);
                })
                .catch(function (err) {
                    console.error('Erro ao copiar o link: ', err);
                });
        });
    }
});
