console.log("welcome to rock paper scissors");
const choice = ['rock', 'paper', 'scissors']
let PlayerScore = 0;
let ComputerScore = 0;
Game()


function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)] 
}

function getPlayerChoice() {
   let input = prompt('choose on of the three option rock, paper, scissors');
   input = input.toLowerCase();
   return input
}

function winCondition(playerSelection, computerSelection) {
if ( playerSelection === computerSelection) {
    return "it's a tie no winner!"
}
else if (
        (playerSelection === 'rock' && computerSelection ==='scissors' ) || 
        (playerSelection === 'paper' && computerSelection ==='rock' ) ||
        (playerSelection === 'scissors' && computerSelection ==='paper' ) 
        ){ 
            return `you win! you picked  ${playerSelection} and the computer picked ${computerSelection}`
        }
    else {
            return `you loose!you picked  ${playerSelection} and the computer picked  ${computerSelection}` 
        }
}

function Game() {
    for( i = 1; i <= 5; i++) {
        console.log("Round :" + i)
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(winCondition(playerSelection, computerSelection));
        console.log("--------------------------");
        if (winCondition(playerSelection,computerSelection) == 'player win') 
        {
            PlayerScore++;
        }
        else (winCondition(playerSelection,computerSelection) == 'computer wins')
        {
            ComputerScore++;
        }
       
    } 
}
console.log("game over");
console.log("Player score :" + PlayerScore);
console.log("Computer score :" + ComputerScore);
if (PlayerScore > ComputerScore) {
    console.log("Player is the winner!")
}
else (ComputerScore > PlayerScore)
{
    console.log("Computer is the winner!")
}






