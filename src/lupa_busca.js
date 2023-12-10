document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const pageContent = document.getElementById('pageContent');
  const elementsToHighlight = pageContent.querySelectorAll('h1, h2, p, li');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm.length > 1) {
      elementsToHighlight.forEach((element) => {
        const textContent = element.textContent.toLowerCase();

        if (textContent.includes(searchTerm)) {
          const highlightedText = textContent.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlighted">${match}</span>`);
          element.innerHTML = highlightedText;
        } else {
          element.innerHTML = textContent;
        }
      });
    } else {
      // Se o termo de pesquisa tiver apenas uma letra, remove a marcação 
      elementsToHighlight.forEach((element) => {
        element.innerHTML = element.textContent;
      });
    }
  });
});