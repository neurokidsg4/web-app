
const catalogPeformance = document.getElementById('catalog_game_peformance');

const gameHistory = JSON.parse(localStorage.getItem('jogos')) || {};
const fragment = new DocumentFragment();

for(let i = 0; i < gameHistory.length; i++) {

    const row =  document.createElement('div');
    row.classList.add('row');

    const group =  document.createElement('div')
    group.classList.add('group');
    group.classList.add('row__group');

    const nameGameField =  document.createElement('div');
    nameGameField.classList.add('field');
    nameGameField.classList.add('group__field');

    const nameGameFieldText = document.createElement('p')
    nameGameFieldText.classList.add('game-name');
    nameGameFieldText.classList.add('group__text');

    const arrow =  document.createElement('span');
    arrow.classList.add('arrow');
    arrow.classList.add('material-symbols-outlined');
    arrow.innerHTML = 'east';

    const peformanceField =  document.createElement('div');
    peformanceField.classList.add('field');
    peformanceField.classList.add('group__field');

    const peformanceText =  document.createElement('p');
    peformanceText.classList.add('group__text');

    const peformancePercentage =  document.createElement('P');
    peformancePercentage.classList.add('group__peformance');

    const numberOfResults = gameHistory[i].length;
    let totalScore = 0;
    let expectedScore = 0;
    let percentage = 0;

    for(let t = 0; t < gameHistory[i].length; t++) {
        
        gameHistory[i][t].gameName;

        totalScore += gameHistory[i][t].punctuation;
        expectedScore += gameHistory[i][t].attempt;

        gameHistory[i][t].peformance;
        gameHistory[i][t].data;
    }

    percentage = (totalScore * 100) / expectedScore;

    
    nameGameFieldText.innerHTML = gameHistory[i][0].gameName;
    nameGameField.append(nameGameFieldText);
    group.append(nameGameField);
    
    group.append(arrow);
    
    peformanceText.innerHTML = `Desempenho: ${percentage}%`;
    peformanceField.append(peformanceText);
    group.append(peformanceField);

    // peformancePercentage.innerHTML = `${percentage}%`;
    // peformanceField.append(peformancePercentage);

    row.append(group);

    fragment.appendChild(row);
    catalogPeformance.append(fragment);
}


//esta calculando a porcentagem
//esta calculando adicionando o nome do jogo na tag <p>


// element.classList.add ('new-class');

// div.id = 'meuId' document.createElement('div'); div.setAttribute('id', 'meuId');

// <div class="row">
//     <div class="group row__group">
//         <div class="field group__field"><p class="game-name group__text">${game}</p></div>

//         <span class="arrow material-symbols-outlined">east</span>

//         <div class="field group__field">
//             <p class="group__text">Desempenho</p>
//             <i id="group__peformance">${peformance}</i>
//         </div>
//     </div>
// </div>
