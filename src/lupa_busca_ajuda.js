// Definição das variáveis que armazenam o resultado da busca feita no meu documento para o seletor especificado
const filterElement = document.querySelector('.search-text');
const cardsContainer1 = document.querySelectorAll('.container_cards_main .card_01');
const cardsContainer2 = document.querySelectorAll('.container_cards_02 .card_02');

// Adicionando o evento de entrada para disparar a função "filterCards" quando houver input no campo de pesquisa
filterElement.addEventListener('input', filterCards);

function filterCards() {
  const userInput = filterElement.value.trim().toLowerCase();

  // Função para verificar se a entrada do usuário está presente no título ou descrição do card
  function containsUserInput(card) {
    const cardTitleElement = card.querySelector('.title_cards_01') || card.querySelector('.title_cards_02');
    const cardDescriptionElement = card.querySelector('.description_cards_01') || card.querySelector('.description_cards_02');

    if (cardTitleElement && cardDescriptionElement) {
      const cardTitle = cardTitleElement.textContent.trim().toLowerCase();
      const cardDescription = cardDescriptionElement.textContent.trim().toLowerCase();

      return cardTitle.includes(userInput) || cardDescription.includes(userInput);
    }

    return false;
  }

  // Função para filtrar os cards no container principal e secundário
  function filterCardsInContainer(cards) {
    cards.forEach(card => {
      const isVisible = containsUserInput(card);
      card.style.display = isVisible ? 'block' : 'none';
    });
  }

  // Filtra os cards nos containers principais
  filterCardsInContainer(cardsContainer1);

  // Filtra os cards nos containers secundários
  filterCardsInContainer(cardsContainer2);

  // Filtra os artigos
  const articlesContainer = document.querySelector(".container_cards_02");
  const articles = Array.from(articlesContainer.children);
  articles.forEach(article => {
    const isVisible = containsUserInput(article);
    article.style.display = isVisible ? 'block' : 'none';
  });

  // Exibe todos os cards e artigos se não houver entrada de pesquisa
  if (userInput === '') {
    const allCards = [...cardsContainer1, ...cardsContainer2];
    allCards.forEach(card => {
      card.style.display = 'block';
    });

    articles.forEach(article => {
      article.style.display = 'block';
    });
  }
}


// função de redirecionamento para o link correspondente

function redirectToLink(url) {
    window.location.href = url;
  }

  // inicio do código para a dinâmica dos artigos
  document.addEventListener("DOMContentLoaded", function () {
    // Recupera ou inicializa os dados de visualizações do localStorage
    let articleViews = JSON.parse(localStorage.getItem("articleViews")) || {};
  
    // Atualiza as visualizações quando um artigo é clicado
    document.querySelector(".container_cards_02").addEventListener("click", function (event) {
      const card = event.target.closest('.card_02');
      if (card) {
        const articleIndex = Array.from(card.parentElement.children).indexOf(card);
        const articleId = `article_${articleIndex + 1}`;
  
        articleViews[articleId] = (articleViews[articleId] || 0) + 1;
  
        
        localStorage.setItem("articleViews", JSON.stringify(articleViews));
  
        
        updateCardOrder();
      }
    });
  
    // Função para atualizar a ordem dos cartões com base nas visualizações
    function updateCardOrder() {
      const container = document.querySelector(".container_cards_02");
  
      // Ordena os cartões com base nas visualizações em ordem decrescente
      const sortedCards = Array.from(container.children).sort((a, b) => {
        const indexA = Array.from(a.parentElement.children).indexOf(a);
        const indexB = Array.from(b.parentElement.children).indexOf(b);
  
        const idA = `article_${indexA + 1}`;
        const idB = `article_${indexB + 1}`;
  
        return (articleViews[idB] || 0) - (articleViews[idA] || 0);
      });
  
      console.log("articleViews", articleViews);
      console.log("sortedCards", sortedCards);
  
      const fragment = document.createDocumentFragment();
      sortedCards.forEach(card => {
        fragment.appendChild(card.cloneNode(true));
      });
  
      container.innerHTML = "";
      container.appendChild(fragment);
  
      // Exibe apenas os 6 mais visualizados e ajusta a posição dos demais
      Array.from(container.children).forEach((card, index) => {
        if (index < 6) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    updateCardOrder();
  });
  