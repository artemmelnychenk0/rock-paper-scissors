
let yourScore = 0;
let computerScore = 0;

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



function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        console.log('You won! Rock beats Scissors');
        yourScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        console.log('You lost! Paper beats Rock')
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        console.log('You won! Paper beats Rock')
        yourScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        console.log('You lost! Scissors beat Paper')
        computerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        console.log('You lost! Rock beat Scissors')
        computerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        console.log('You won! Scissors beats Paper')
        yourScore++
    } else {
        console.log('It is a tie!')
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('What do you choose? ROCK/PAPER/SCISSORS?')
        const computerSelection = computerPlay();
        playRound(playerSelection.toLocaleLowerCase(), computerSelection)
    }


}

function finalScore() {
    if (yourScore > computerScore) {
        console.log(`You won! Your score is: ${yourScore} and Computer Score is: ${computerScore} `)
    } else if (computerScore > yourScore) {
        console.log(`You lost! Computer score is: ${computerScore} and Your Score is ${yourScore}`)
    } else {
        console.log('Final SCORE: It is a tie!')
    }
}


game();
finalScore();


// function result() {
//     if (console.log == 'You won! Rock beats Scissors' || console.log == 'You won! Paper beats Rock' || console.log == 'You won! Scissors beats Paper') {
//         console.log('You got 1 point')

//     } else if (console.log == 'You won! Rock beats Scissors' || console.log == 'You won! Paper beats Rock' || console.log == 'You won! Scissors beats Paper') {
//     } console.log('Computer got 1 point')

// }

