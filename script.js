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
    return 'You both picked the same weapon! It\'s a tie.';
  } else if (computerSelection == 'paper' && playerSelection == 'rock') {
      computerScore++;
      return 'Computer chose Paper. \nPaper beats Rock! Computer wins this ' +
      'round. \nThe score is Computer: ' + computerScore + ' and Player: ' + 
      playerScore + '.';
  } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
      computerScore++;
      return 'Computer chose Scissors. \nScissors beats Paper! Computer wins ' +
      'this round. \nThe score is Computer: ' + computerScore + 
      ' and Player: ' + playerScore + '.';
  } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
      playerScore++;
      return 'Computer chose Paper. \nScissors beats Paper! You win this ' +
      'round. \nThe score is Computer: ' + computerScore + ' and Player: ' + 
      playerScore + '.';
  } else if (computerSelection == 'rock' && playerSelection == 'paper') {
      playerScore++;
      return 'Computer chose Rock. \nPaper beats Rock! You win this round. ' +
      '\nThe score is Computer: ' + computerScore + ' and Player: ' + 
      playerScore + '.';
  } 
  /* My attempt at rejecting the user's input if it's not one of the options
  given. Gonna come back later.
    else if (playRound() === undefined) {  
      alert('That\s not an option silly! Be serious now, c\'mon.');
      return playRound(playerSelection, computerSelection);
  } */
}

function game() {
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log(playRound());
  console.log('Last round!');
  console.log(playRound());

  console.log('The final scores are: Computer: ' + computerScore + 
      ' and Player: ' + playerScore + '.');

  if (computerScore == playerScore) {
    return 'It\'s a tie game! How boring.';
  } else if (computerScore > playerScore) {
    return 'You lose! Sucks to be you!';
  } else if (computerScore < playerScore) {
    return 'You win! Who would\'ve thought?!';
  }
}

console.log(game());