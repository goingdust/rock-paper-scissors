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
      computerScore++;
      return 'Computer chose Paper. Paper beats Rock! Computer wins this round. The score is Computer: ' + computerScore + ' and Player: ' + playerScore + '.';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
      computerScore++;
      return 'Computer chose Scissors. Scissors beats Paper! Computer wins this round. The score is Computer: ' + computerScore + ' and Player: ' + playerScore + '.';
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
      playerScore++;
      return 'Computer chose Paper. Scissors beats Paper! You win this round. The score is Computer: ' + computerScore + ' and Player: ' + playerScore + '.';
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
      playerScore++;
      return 'Computer chose Rock. Paper beats Rock! You win this round. The score is Computer: ' + computerScore + ' and Player: ' + playerScore + '.';
  }
}

function game() {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());

  console.log('The final scores are: Computer: ' + computerScore + ' and Player: ' + playerScore + '.');

  if (computerScore == playerScore) {
    return 'It\'s a tie game! How boring.';
  } else if (computerScore > playerScore) {
    return 'You lose! Sucks to be you!';
  } else if (computerScore < playerScore) {
    return 'You win! Who would\'ve thought?!';
  }
}

console.log(game());