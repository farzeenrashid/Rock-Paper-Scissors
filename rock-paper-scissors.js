
function showTitleScreen() {
    document.getElementById('game-description-screen').style.display = 'none';
    document.getElementById('game-rules-screen').style.display = 'none';
    document.getElementById('round-selection-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'none';
}

window.onload = function () {
    showTitleScreen();
};

function showGameDesScreen() {
    // Hide start screen
    document.getElementById('start-screen').style.display = 'none';
    // Show game screen
    document.getElementById('game-description-screen').style.display = 'block';
}

function showGameRulesScreen() {
    document.getElementById('game-description-screen').style.display = 'none';
    document.getElementById('game-rules-screen').style.display = 'block';
}

function showRoundSelection() {
    document.getElementById('game-rules-screen').style.display = 'none';
    document.getElementById('round-selection-screen').style.display = 'block';
}

function showMainGameScreen() {
    document.getElementById('round-selection-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
    playerWinCounter = 0;
    computerWinCounter = 0;
    document.getElementById('user-score').textContent = playerWinCounter;
    document.getElementById('computer-score').textContent = computerWinCounter;
}

// when i click rock, computer chooses and clicks its choice
// at same times both choices get dragged to middle of screen side by side
// the side that wins gets background green, the losing side background red
// the choices go back to their spots and another round begins
// when you win, your score increases by 1, when computer wins, its score inccreases by 1
// when the number of rounds that you selected is complete, if you have more points than the computer, it says on your screen congradulating you
// it then asks if you want to restart, if you click restart, it takes you to the round selection screen and you start over from there

// ---------------------------------------------------------------------------

let userScore = 0;
let computerScore = 0;
let round = 1;

function animateMove(elementId) {
    const element = document.getElementById(elementId);
    // element.classList.add('dragging');
    // element.style.zIndex = 2;

    // Define translation values based on the choice
    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    let rotate = 0;

        if (elementId === 'rock') {
            // Move diagonally (100px right and 100px down)
            translateX = 120;
            translateY = 1250;
            scale = 0.55; // Adjust the scale as needed
            rotate = -90;
        } else if (elementId === 'paper') {
            // Move 100px right
            translateX = 140;
            translateY = 680;
            scale = 0.65; // Adjust the scale as needed
            // zIndex = 2;
        } else if (elementId === 'scissors') {
            // Move 100px up and 100px right
            translateX = 140;
            translateY = 50;
            scale = 0.65; // Adjust the scale as needed
            // zIndex = 2;
        } else if (elementId === 'lizard') {
            // Move 100px up and 100px right
            translateX = 120;
            translateY = -580;
            scale = 0.55; // Adjust the scale as needed
            // zIndex = 2;
            rotate = -90;
        } else {
            // Move 100px up and 100px right
            translateX = 140;
            translateY = -1190;
            scale = 0.65; // Adjust the scale as needed
            // zIndex = 2;
        }

    element.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
}


function resetAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.style.transition = ''; 
    element.classList.remove('highlight-winner', 'highlight-loser', 'highlight-tie');
    if (elementId === 'rock') {
        element.style.transform = 'translate(-240px, 1010px) scale(0.2) rotate(-90deg)';
    }
    else if (elementId === 'paper') {
        element.style.transform = 'translate(-230px, 525px) scale(0.2)';
    }
    else if (elementId === 'scissors') {
        element.style.transform = 'translate(-210px, 29px) scale(0.2)';
    }
    else if (elementId === 'lizard') {
        element.style.transform = 'translate(-230px, -475px) scale(0.2) rotate(-90deg)';
    }
    else {
        element.style.transform = 'translate(-210px, -990px) scale(0.2)';
    }
}

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

function makeChoice(playerChoice, computerChoice) {

    playRound(playerChoice, computerChoice);

}

function displayResult(playerChoice, computerChoice) {
    const userChoiceElement = document.getElementById(playerChoice);
    const computerChoiceElement = document.getElementById(computerChoice);

    const resultMessage = determineWinner(playerChoice, computerChoice);

    if (resultMessage.includes('You win!')) {
        userChoiceElement.classList.add('highlight-winner');
        computerChoiceElement.classList.add('highlight-loser');
    } else if (resultMessage.includes('The computer wins!')) {
        computerChoiceElement.classList.add('highlight-winner');
        userChoiceElement.classList.add('highlight-loser');
    }
    else {
        computerChoiceElement.classList.add('highlight-tie');
        userChoiceElement.classList.add('highlight-tie');
    }

    setTimeout(() => {
        resetAnimation(playerChoice);
        resetAnimation(computerChoice);
        userChoiceElement.classList.remove('highlight-winner', 'highlight-loser');
        computerChoiceElement.classList.remove('highlight-winner', 'highlight-loser');
        round++;
        updateScoreDisplay();
    }, 2000);
}

function determineWinner(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "rock" && computerChoice === "lizard") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "paper" && computerChoice === "spock") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "lizard") ||
        (playerChoice === "lizard" && computerChoice === "paper") ||
        (playerChoice === "lizard" && computerChoice === "spock") ||
        (playerChoice === "spock" && computerChoice === "rock") ||
        (playerChoice === "spock" && computerChoice === "scissors")
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "The computer wins!";
    }
}

function updateScoreDisplay() {
    const userScoreElement = document.getElementById('userScore');
    const computerScoreElement = document.getElementById('computerScore');
    const roundElement = document.getElementById('roundNumber');

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
    roundElement.textContent = `Round ${round}`;
}

function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    animateMove(playerChoice);
    animateMove(computerChoice);
    displayResult(playerChoice, computerChoice);
}

