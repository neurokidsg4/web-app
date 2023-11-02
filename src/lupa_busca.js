const searchInput = document.getElementById("searchInput");

// Adiciona um evento para detectar o pressionamento da tecla Enter
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value;
    searchAndHighlight(searchTerm);
  }
});

// Adiciona um evento para clicar no botão de pesquisa
const searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value;
  searchAndHighlight(searchTerm);
});

function searchAndHighlight(term) {
  const bodyText = document.body.innerHTML;

  const regex = new RegExp(term, "gi");
  const highlightedText = bodyText.replace(
    regex,
    (match) => `<mark>${match}</mark>`
  );

  document.body.innerHTML = highlightedText; // Atualiza o HTML da página com o texto destacado

  searchInput.value = ""; // Limpa o campo de entrada após a pesquisa
}
