console.log(data);
/*
<li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li>
*/
const pokemonCardList = document.querySelector('.cards');

function renderPokemonCard() {
  pokemonCardList.innerHTML = '';

  data.forEach((item) => {

    const li = document.createElement('li');
    li.className = 'card';

    const h2 = document.createElement('h2');
    h2.className = 'card--title';
    h2.textContent = item.name.charAt(0).toUpperCase() + item.name.slice(1);

    const img = document.createElement('img');
    img.width = '256';
    img.height = '256';
    img.className = 'card--img';
    img.src = item.sprites.other.dream_world.front_default;


    const dataStats = document.createElement('ul');
    dataStats.className = 'card--text';
   
    item.stats.forEach((currentStat) => {
      const oneStat = document.createElement('li');
      oneStat.className = 'card--text';
      oneStat.textContent = currentStat.stat.name.toUpperCase() + ': ' + currentStat.base_stat;
      dataStats.appendChild(oneStat);
    })

    let games = [];

    item.game_indices.forEach((game) => {
      if (!games.includes(game.game_index)){
        games.push(game.game_index);
      }
    })

    const gameIndexes = document.createElement('li');
    gameIndexes.className = 'card--text';
    gameIndexes.textContent = 'Games: '
    games.forEach((uniqueGame) => {
      gameIndexes.textContent = gameIndexes.textContent + '(' + uniqueGame + ')' + ' '
    })

    dataStats.appendChild(gameIndexes);

    li.appendChild(h2);
    li.appendChild(img);
    li.appendChild(dataStats);
    
    pokemonCardList.appendChild(li);
  });
}

renderPokemonCard();
//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
