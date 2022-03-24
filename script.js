const buttons = document.querySelectorAll('button')
const result = document.querySelector('h2');
const user = document.querySelector('#user')
const computer = document.querySelector('#computer')
let yourScore = 0;
let computerScore = 0;

//Computer chooses what it will play with
function computerPlay() {
    let randomizer = Math.round(Math.random() * 2 - 1);
    if (randomizer < 0) {
        return ('Rock')
    } else if (randomizer > 0) {
        return ('Paper')
    } else {
        return ('Scissors')
    }
}

//Round of the game
function playRound(playerSelection, computerSelection) {
    if (yourScore == 5 || computerScore == 5) {
        gameOver();
    } else if (playerSelection == buttons[0] && computerSelection == 'Scissors') {
        result.textContent = 'You won! Rock beats Scissors';
        yourScore++;
        user.textContent = `Your Score: ${yourScore}`
    }
    else if (playerSelection == buttons[0] && computerSelection == 'Paper') {
        result.textContent = 'You lost! Paper beats Rock'
        computerScore++;
        computer.textContent = `Computer Score: ${computerScore}`
    } else if (playerSelection == buttons[1] && computerSelection == 'Rock') {
        result.textContent = 'You won! Paper beats Rock'
        yourScore++;
        user.textContent = `Your Score: ${yourScore}`
    } else if (playerSelection == buttons[1] && computerSelection == 'Scissors') {
        result.textContent = 'You lost! Scissors beat Paper'
        computerScore++
        computer.textContent = `Computer Score: ${computerScore}`
    } else if (playerSelection == buttons[2] && computerSelection == 'Rock') {
        result.textContent = 'You lost! Rock beat Scissors'
        computerScore++
        computer.textContent = `Computer Score: ${computerScore}`
    } else if (playerSelection == buttons[2] && computerSelection == 'Paper') {
        result.textContent = 'You won! Scissors beats Paper'
        yourScore++
        user.textContent = `Your Score: ${yourScore}`
    } else {
        result.textContent = 'It is a tie'
    }
}

//Checking when to stop the game
function gameOver() {
    if (yourScore == 5 || computerScore == 5) {
        result.textContent = 'THE END'
        finalScore();
        return;
    }
}

//Deciding who is the winner
function finalScore() {
    if (yourScore > computerScore) {
        result.textContent = `You won! You beat computer this time. To play again restart the page`
    } else if (computerScore > yourScore) {
        result.textContent = `You lost! Computer beat you this time. To play again restart the page`
    }
}

//The actual game
function game(eventObject) {
    const playerSelection = eventObject.target
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    gameOver();
}

//Connecting the game from JS to the DOM
buttons.forEach((button) => {
    button.addEventListener('click', game)
});


