const game = () => {

  let computerScore = 0;
  let playerScore = 0;
  const results = document.querySelector('.results');

  function playRound() {
    const options = document.querySelectorAll('.options button');
    const weapons = ['rock', 'paper', 'scissors'];
    

    options.forEach(option => {
      option.addEventListener('click', function () {
        const randomWeapon = Math.floor(Math.random() * weapons.length);
        const computerSelection = weapons[randomWeapon];
        compareHands(this.textContent, computerSelection);
        updateScore(computerScore, playerScore);
        if (playerScore == 5 || computerScore == 5) {
    
          if (computerScore == playerScore) {
            return results.textContent = 'It\'s a tie game! How boring. The final scores are: Computer: ' + computerScore + 
            ' and Player: ' + playerScore + '.';
          } else if (computerScore > playerScore) {
            return results.textContent = 'You lose! Sucks to be you! The final scores are: Computer: ' + computerScore + 
            ' and Player: ' + playerScore + '.';
          } else if (computerScore < playerScore) {
            return results.textContent = 'You win! Who would\'ve thought?! The final scores are: Computer: ' + computerScore + 
            ' and Player: ' + playerScore + '.';
          }
        } 
      });
    });
  };

  function updateScore() {
    const pScore = document.querySelector('.player-score');
    const cScore = document.querySelector('.computer-score');
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
  }

  function compareHands(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
      return results.textContent = 'You both picked the same weapon! It\'s a tie. The score is Computer: ' +
      computerScore + ' and Player: ' + playerScore + '.';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        return results.textContent = 'Computer chose Paper. \nPaper beats Rock! Computer wins this ' +
        'round. \nThe score is Computer: ' + computerScore + ' and Player: ' + 
        playerScore + '.';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        return results.textContent = 'Computer chose Scissors. \nScissors beats Paper! Computer wins ' +
        'this round. \nThe score is Computer: ' + computerScore + 
        ' and Player: ' + playerScore + '.';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerScore++;
        return results.textContent = 'Computer chose Paper. \nScissors beats Paper! You win this ' +
        'round. \nThe score is Computer: ' + computerScore + ' and Player: ' + 
        playerScore + '.';
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++;
        return results.textContent = 'Computer chose Rock. \nPaper beats Rock! You win this round. ' +
        '\nThe score is Computer: ' + computerScore + ' and Player: ' + 
        playerScore + '.';
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