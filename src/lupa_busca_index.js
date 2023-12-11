var originalContent;

function search() {
    var term = document.querySelector('.search-text').value.trim().toLowerCase();
    var contentDiv = document.querySelector('.content-page');
    var container2 = document.querySelector('.container2');
    var container = document.querySelector('.container');

    if (!originalContent) {
        originalContent = contentDiv.innerHTML;
    }

    if (term.length > 1) {
        var regex = new RegExp(`\\b(${term})\\b`, 'gi');
        contentDiv.innerHTML = originalContent.replace(regex, '<span class="highlighted">$1</span>');

        var cards2 = container2.querySelectorAll('.card2 p');
        cards2.forEach(function (card) {
            var cardDescription = card.textContent.toLowerCase();

            if (cardDescription.includes(term)) {
                card.closest('.card2').style.display = 'block';
            } else {
                card.closest('.card2').style.display = 'none';
            }
        });

        var cards = container.querySelectorAll('.card');
        cards.forEach(function (card) {
            var cardTitle = card.querySelector('.card-background h1').textContent.toLowerCase();
            var cardContent = card.querySelector('.content p').textContent.toLowerCase();

            if (cardTitle.includes(term) || cardContent.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        contentDiv.innerHTML = originalContent;

        var cards2 = container2.querySelectorAll('.card2');
        cards2.forEach(function (card) {
            card.style.display = 'block';
        });

        var cards = container.querySelectorAll('.card');
        cards.forEach(function (card) {
            card.style.display = 'block';
        });
    }
}

document.querySelector('.search-text').addEventListener('input', search);
document.querySelector('.search-btn').addEventListener('click', search);
