function openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'flex'; 
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.getElementById('closemodal').addEventListener('click', closeModal);

function redirect(platform, content) {
    var url;

    switch (platform) { 
        case 'twitter':
            url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(content);
            break;

        case 'facebook':
            url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(content);
            break;

        case 'linkedln':
            url = 'https://www.linkedin.com/sharing/share-offsite/?mini=true&url=' + encodeURIComponent(content);
            break;

        default:
            console.error('Plataforma não carregada');
            return;
    }

    window.open(url, '_blank');
}

// declaração das variáveis de escopo global que configuram os eventos
var twitterbutton = document.getElementById('twitter_link_button');
var facebookbutton = document.getElementById('facebook_link_button');
var linkedInbutton = document.getElementById('linkedln_link_button');

twitterbutton.addEventListener("click", function() {
    redirect('twitter', 'https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/');
});

facebookbutton.addEventListener("click", function() {
    redirect('facebook', 'https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/');
});

linkedInbutton.addEventListener("click", function() {
    redirect('linkedln', 'https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/');
});