const game = () => {

  let computerScore = 0;
  let playerScore = 0;

  function playRound() {
    const options = document.querySelectorAll('.options button');
    const weapons = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function () {
        const randomWeapon = Math.floor(Math.random() * weapons.length);
        const computerSelection = weapons[randomWeapon];
        compareHands(this.textContent, computerSelection);
        if (playerScore == 4 || computerScore == 4) {
          return console.log('Last round!');
        } else if (playerScore == 5 || computerScore == 5) {
          console.log('The final scores are: Computer: ' + computerScore + 
          ' and Player: ' + playerScore + '.');
    
          if (computerScore == playerScore) {
            return console.log('It\'s a tie game! How boring.');
          } else if (computerScore > playerScore) {
            return console.log('You lose! Sucks to be you!');
          } else if (computerScore < playerScore) {
            return console.log('You win! Who would\'ve thought?!');
          }
        } 
      });
    });
  };

  function compareHands(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
      return console.log('You both picked the same weapon! It\'s a tie.');
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        return console.log('Computer chose Paper. \nPaper beats Rock! Computer wins this ' +
        'round. \nThe score is Computer: ' + computerScore + ' and Player: ' + 
        playerScore + '.');
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        return console.log('Computer chose Scissors. \nScissors beats Paper! Computer wins ' +
        'this round. \nThe score is Computer: ' + computerScore + 
        ' and Player: ' + playerScore + '.');
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerScore++;
        return console.log('Computer chose Paper. \nScissors beats Paper! You win this ' +
        'round. \nThe score is Computer: ' + computerScore + ' and Player: ' + 
        playerScore + '.');
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++;
        return console.log('Computer chose Rock. \nPaper beats Rock! You win this round. ' +
        '\nThe score is Computer: ' + computerScore + ' and Player: ' + 
        playerScore + '.');
    }
    /* My attempt at rejecting the user's input if it's not one of the options
    given. Gonna come back later.
      else if (playRound() === undefined) {  
        alert('That\s not an option silly! Be serious now, c\'mon.');
        return playRound(playerSelection, computerSelection);
    } */
  };
  playRound();
};


game();