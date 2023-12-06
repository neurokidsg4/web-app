
const catalogPeformance = document.getElementById('catalog_game_peformance');

const row =  document.createElement('div').classList.add('row');
const group =  document.createElement('div').classList.add('group row__group');
const nameGameField =  document.createElement('div').classList.add('field group__field');
const nameGameFieldText = document.createElement('p').classList.add('game-name group__text');
const arrow =  document.createElement('span').classList.add('arrow material-symbols-outlined').innerHTML = east;
const peformanceField =  document.createElement('div').classList.add('field group__field');
const text =  document.createElement('p').classList.add('group__text');
const peformanceResult =  document.createElement('i').classList.add('group__peformance');

const gameHistory = JSON.parse(localStorage.getItem('jogos')) || {};
const acerteAsCores = gameHistory.acerteAsCores || [];



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
