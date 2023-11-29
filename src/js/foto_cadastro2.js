const clientId = 'e27fd7baa0c0a27'; // Substitua com sua chave de API do Imgur
const API_URL = 'https://api.imgur.com/3/image';

const photo = document.getElementById('photo');
const filePictury = document.getElementById('file__pictury');

let photoReader;

filePictury.addEventListener('change', function (evt) {
    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
        return;
    }

    photoReader = new FileReader();

    photoReader.onload = function () {
        photo.src = photoReader.result;
        photo.style.maxHeight = '120px';
        photo.style.maxWidth = '120px';
        photo.style.borderRadius = '9999px';

        // Envia a imagem para o Imgur
        const formData = new FormData();
        formData.append('image', evt.target.files[0]);

        fetch(API_URL, {
            method: 'POST',
            headers: {
                Authorization: `Client-ID ${clientId}`
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Imagem enviada para o LocalStorage com sucesso:', data);
                
                // Armazena o link Imgur em localStorage para recuperar em outra página
                const imgurLink = data.data.link;
                localStorage.setItem('imgurLink', imgurLink);

                // Exibe uma mensagem no navegador
                alert('Imagem enviada para o LocalStorage com sucesso!');

                // Redireciona para outra página
                //window.location.href = './index.html';
            })
            .catch(error => {
                console.error('Erro ao enviar imagem para o LocalStorage:', error);
                alert('Erro ao enviar imagem para o LocalStorage. Por favor, tente novamente.');
            });
    };

    photoReader.readAsDataURL(evt.target.files[0]);
});
