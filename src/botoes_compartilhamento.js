function redirect(platform, content) {
    var url;

    switch (platform) { 
        case 'twitter':
            url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(content);
            break;

        case 'facebook':
            url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(content);
            break;

        case 'linkedn':
            url = 'https://www.linkedin.com/sharing/share-offsite/?mini=true&url=' + encodeURIComponent(content);
            break;

        default:
            console.error('Plataforma não carregada');
            return;
    }

    window.open(url, '_blank');
}

// declaração das variáveis de escopo global que configuram os eventos
var socialMediaTwitter = document.getElementById('twitter_link');
var socialMediaFacebook = document.getElementById('facebook_link');
var socialMediaLinkedIn = document.getElementById('linkedln_link');

socialMediaTwitter.addEventListener("click", function() {
    redirect('twitter', 'https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/');
});

socialMediaFacebook.addEventListener("click", function() {
    redirect('facebook', 'https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/');
});

socialMediaLinkedIn.addEventListener("click", function() {
    redirect('linkedln', 'https://icei-puc-minas-pmv-si.github.io/pmv-si-2023-2-pe1-t2-neurodiversidade/src/');
});