const weapons = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let randomWeapon = Math.floor(Math.random() * weapons.length);
  return weapons[randomWeapon];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = prompt('Pick Rock, Paper, or Scissors!', '').toLowerCase();
  if (computerSelection == playerSelection) {
    return 'It\'s a tie!';
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
      return 'Computer wins this round. Paper beats Rock!';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
      return 'Computer wins this round. Scissors beats Paper!';
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
      return 'You win this round. Scissors beats Paper!';
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
      return 'You win this round. Paper beats Rock!';
  }
}

function game() {
  if (playRound() == 'Computer wins this round. Paper beats Rock!') {
    return computerScore++;
  } else if (playRound() == 'Computer wins this round. Scissors beats Paper!') {
    return computerScore++;
  } else if (playRound() == 'You win this round. Scissors beats Paper!') {
    return playerScore++;
  } else if (playRound() == 'You win this round. Paper beats Rock!') {
    return playerScore++;
  }

  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());

  console.log('The final scores are: Computer: ' + computerScore + ' and Player: ' + playerScore + '.');

  if (computerScore == playerScore) {
    return 'It\'s a tie game!';
  } else if (computerScore > playerScore) {
    return 'You lose! Sucks to be you!';
  } else if (computerScore < playerScore) {
    return 'You win! Who would\'ve thought?!';
  }
}

console.log(game());