
const gameHistory = JSON.parse(localStorage.getItem('jogos')) || {};

const catalogPeformance = document.getElementById('catalog_game_peformance');
for(let i = 0; i < gameHistory.length; i++) {

    const fragment = new DocumentFragment();
    
    const divRow =  document.createElement('div');
    divRow.classList.add('row');

    const divGroup =  document.createElement('div')
    divGroup.classList.add('group');
    divGroup.classList.add('row__group');

    const divNameGameField =  document.createElement('div');
    divNameGameField.classList.add('field');
    divNameGameField.classList.add('group__field');

    const pNameGameText = document.createElement('p')
    pNameGameText.classList.add('game-name');
    pNameGameText.classList.add('group__text');

    const spanArrow =  document.createElement('span');
    spanArrow.classList.add('arrow');
    spanArrow.classList.add('material-symbols-outlined');
    spanArrow.innerHTML = 'east';

    const divPerformanceField =  document.createElement('div');
    divPerformanceField.classList.add('field');
    divPerformanceField.classList.add('group__field');

    const pPeformanceText =  document.createElement('p');
    pPeformanceText.classList.add('group__text');

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
    
    pNameGameText.innerHTML = gameHistory[i][0].gameName;
    divNameGameField.append(pNameGameText);
    divGroup.append(divNameGameField);
    
    divGroup.append(spanArrow);
    
    pPeformanceText.innerHTML = `Desempenho: ${percentage.toFixed(0)}%`;
    divPerformanceField.append(pPeformanceText);
    divGroup.append(divPerformanceField);

    divRow.append(divGroup);

    fragment.appendChild(divRow);
    catalogPeformance.append(fragment);
};

const ul = document.getElementById('list');
for(let j = 0; j < gameHistory.length; j++) {

    for(let k = 0; k < gameHistory[j].length; k++) {

        const fragment = new DocumentFragment();

        const li = document.createElement('li');
        li.classList.add('item');
    
        const divGameName = document.createElement('div');
        divGameName.classList.add('item__game');
    
        const pGameName = document.createElement('p');
        pGameName.classList.add('item__text');
        pGameName.classList.add('game_name');
    
        const divPerformance = document.createElement('div');
        divPerformance.classList.add('item__peformance');
    
        const pPerformance = document.createElement('p');
        pPerformance.classList.add('item__text');
    
        const divDate = document.createElement('div');
        divDate.classList.add('item__date');
    
        const pDate = document.createElement('p');
        pDate.classList.add('item__text');

        pGameName.textContent = gameHistory[j][k].gameName;
        pPerformance.textContent = gameHistory[j][k].peformance;
        pDate.textContent = gameHistory[j][k].data;
        
        divGameName.append(pGameName);
        divPerformance.append(pPerformance);
        divDate.append(pDate);
        li.append(divGameName);    
        li.append(divPerformance);    
        li.append(divDate);    
    
        fragment.append(li);
        ul.append(fragment);
    };
};

const filter = document.querySelector('.filter__selection');
filter.addEventListener('change', search);

function search() {

    const results = document.querySelectorAll('.game_name');
    const value = filter.value;
    
    results.forEach(item => {

        if(item.innerText.includes(value) || value.includes('Todos')) {

            const div = item.parentNode;
            const li = div.parentNode;
            li.style.display = 'grid';
            document.querySelector('.message--not_history').style.display = 'none';

        } else {

            const div = item.parentNode;
            const li = div.parentNode;
            li.style.display = 'none';
            document.querySelector('.message--not_history').style.display = 'inline-block';
        }
    });
};
