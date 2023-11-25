document.addEventListener('DOMContentLoaded', function () {
    var emailShareIcon = document.getElementById('emailShare');

    if (emailShareIcon) {
        emailShareIcon.addEventListener('click', function () {
            var currentPageUrl = encodeURIComponent(window.location.href);
            var emailSubject = encodeURIComponent('Confira este link');
            var emailBody = encodeURIComponent('Veja este link: ' + currentPageUrl);

            var emailLink = 'mailto:?subject=' + emailSubject + '&body=' + emailBody;
            window.location.href = emailLink;
        });
    }
});
