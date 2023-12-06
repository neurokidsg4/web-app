
const catalogPeformance = document.getElementById('catalog_game_peformance');


// const acerteAsCores = gameHistory.acerteAsCores || [];
const gameHistory = JSON.parse(localStorage.getItem('jogos')) || {};
// const list = document.createElementFragment();

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

    const peformanceText =  document.createElement('p').classList;
    peformanceText.add('group__text');

    const peformanceResult =  document.createElement('i');
    peformanceResult.classList.add('group__peformance');

    nameGameFieldText.innerHTML = gameHistory[i][0].gameName;

    const attemptResults = gameHistory[i].length;

    

    const percentage = 
    console.log(nameGameFieldText);

    for(let t = 0; t < gameHistory[i].length; t++) {
        

    }
}



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
