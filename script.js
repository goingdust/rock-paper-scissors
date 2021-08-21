const weapons = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;

function computerPlay() {
  let randomWeapon = Math.floor(Math.random() * weapons.length);
  return weapons[randomWeapon];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = prompt('Pick Rock, Paper, or Scissors!', '').toLowerCase();
  if (computerSelection == playerSelection) {
    return 'It\'s a tie game!';
  }
}



console.log(playRound());