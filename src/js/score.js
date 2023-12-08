
const gameHistory = JSON.parse(localStorage.getItem('jogos')) || {};

const catalogPerformance = document.getElementById('catalog_game_performance');
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
    divNameGameField.classList.add('field--game_name');

    const pNameGameText = document.createElement('p')
    pNameGameText.classList.add('group__text');

    const spanArrow =  document.createElement('span');
    spanArrow.classList.add('arrow');
    spanArrow.classList.add('material-symbols-outlined');
    spanArrow.innerHTML = 'east';

    const spanArrowMobile =  document.createElement('span');
    spanArrowMobile.classList.add('material-symbols-outlined');
    spanArrowMobile.classList.add('arrow--mobile');
    spanArrowMobile.classList.add('hidden--score_performance');
    spanArrowMobile.innerHTML = 'east';

    const divPerformanceField =  document.createElement('div');
    divPerformanceField.classList.add('field');
    divPerformanceField.classList.add('group__field');
    divPerformanceField.classList.add('field--performance');

    const pPerformanceText =  document.createElement('p');
    pPerformanceText.classList.add('group__text');
    
    const pPerformanceTextCopy =  document.createElement('p');
    pPerformanceTextCopy.classList.add('group__text');
    pPerformanceTextCopy.classList.add('hidden--score_performance');

    let totalScore = 0;
    let expectedScore = 0;
    let percentage = 0;

    for(let t = 0; t < gameHistory[i].length; t++) {
        totalScore += gameHistory[i][t].punctuation;
        expectedScore += gameHistory[i][t].attempt;
    }

    percentage = (totalScore * 100) / expectedScore;

    pPerformanceTextCopy.innerHTML = `Desempenho: ${percentage.toFixed(0)}%`;
    pNameGameText.innerHTML = gameHistory[i][0].gameName;
    divNameGameField.append(pNameGameText);
    divNameGameField.append(spanArrowMobile);
    divNameGameField.append(pPerformanceTextCopy);
    divGroup.append(divNameGameField);
    
    divGroup.append(spanArrow);
    
    pPerformanceText.innerHTML = `Desempenho: ${percentage.toFixed(0)}%`;
    divPerformanceField.append(pPerformanceText);
    divGroup.append(divPerformanceField);

    divRow.append(divGroup);
    
    fragment.appendChild(divRow);
    catalogPerformance.appendChild(fragment);
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

        const pGameNameLabel = document.createElement('p');
        pGameNameLabel.classList.add('hidden--score_table');
        pGameNameLabel.classList.add('role');
    
        const divPerformance = document.createElement('div');
        divPerformance.classList.add('item__performance');
    
        const pPerformance = document.createElement('p');
        pPerformance.classList.add('item__text');
        
        const pPerformanceLabel = document.createElement('p');
        pPerformanceLabel.classList.add('hidden--score_table');
        pPerformanceLabel.classList.add('role');
    
        const divDate = document.createElement('div');
        divDate.classList.add('item__date');
    
        const pDate = document.createElement('p');
        pDate.classList.add('item__text');

        const pDateLabel = document.createElement('p');
        pDateLabel.classList.add('hidden--score_table');
        pDateLabel.classList.add('role');

        pGameName.textContent = gameHistory[j][k].gameName;
        pPerformance.textContent = gameHistory[j][k].performance;
        pDate.textContent = gameHistory[j][k].data;

        pGameNameLabel.textContent = 'Jogo: ';
        pPerformanceLabel.textContent = 'Desempenho: ';
        pDateLabel.textContent = 'Data: ';
        
        divGameName.append(pGameNameLabel);
        divGameName.append(pGameName);
        divPerformance.append(pPerformanceLabel);
        divPerformance.append(pPerformance);
        divDate.append(pDateLabel);
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
            li.setAttribute('id', '');
            document.querySelector('.message--not_history').style.display = 'none';

        } else {

            const div = item.parentNode;
            const li = div.parentNode;
            li.setAttribute('id', 'none');
            document.querySelector('.message--not_history').style.display = 'inline-block';
        }
    });
};
