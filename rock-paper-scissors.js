
// let roundSelection = 0;

function showTitleScreen() {
    document.getElementById('game-description-screen').style.display = 'none';
    document.getElementById('game-rules-screen').style.display = 'none';
    document.getElementById('round-selection-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('victory-screen').style.display = 'none';
    document.getElementById('defeat-screen').style.display = 'none';
    document.getElementById('tie-screen').style.display = 'none';
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

let selectedRounds = 0;

function showRoundSelection() {
    document.getElementById('game-rules-screen').style.display = 'none';
    document.getElementById('victory-screen').style.display = 'none';
    document.getElementById('defeat-screen').style.display = 'none';
    document.getElementById('tie-screen').style.display = 'none';
    document.getElementById('round-selection-screen').style.display = 'block';
   
    const roundSelection = document.querySelector('#round-selection-screen');
    roundSelection.addEventListener('click', handleClick);

    function handleClick(e) {
        if (e.target.matches('button')) {
            selectedRounds = parseInt(e.target.textContent);
            // showMainGameScreen(selectedRounds);
        }
    }

}

function showMainGameScreen() {
    document.getElementById('round-selection-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
//     document.getElementById('user-score').textContent = playerWinCounter;
//     document.getElementById('computer-score').textContent = computerWinCounter;
}

function showVictoryScreen() {
    // updateScoreBoard();
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('victory-screen').style.display = 'block';
    resetGame();
}

function showDefeatScreen() {
    // updateScoreBoard();
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('defeat-screen').style.display = 'block';
    resetGame();
}

function showTieScreen() {
    // updateScoreBoard();
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('tie-screen').style.display = 'block';
    resetGame();
}

// when i click rock, computer chooses and clicks its choice
// at same times both choices get dragged to middle of screen side by side
// the side that wins gets background green, the losing side background red
// the choices go back to their spots and another round begins
// when you win, your score increases by 1, when computer wins, its score inccreases by 1
// when the number of rounds that you selected is complete, if you have more points than the computer, it says on your screen congradulating you
// it then asks if you want to restart, if you click restart, it takes you to the round selection screen and you start over from there

// ---------------------------------------------------------------------------

let uScore = 0;
let cScore = 0;
let round = 0;
// let message = 0;

// const wMessage = document.getElementById('game-message');

// const lMessage = document.getElementById('game-message');
// // lMessage.textContent = message; 

// const tMessage = document.getElementById('game-message');
// // tMessage.textContent = message; 

// let maxRounds = document.getElementsByClassName(".three-selection button");
// let maxRounds = null;

// function getRounds() {
// const maxRounds = document.querySelector('.three-selection button').onclick;
//     maxRounds = event.target.innerHTML;
//     // maxRounds = ".round-selection".target.textContent;
//     // document.getElementsByClassName('.three-selection button').addEventListener('click', getRounds);
// }

// const maxRounds = document.querySelector('.three-selection button').onclick;
// let roundSelection = 0;

function animateMove(elementId) {
    const element = document.getElementById(elementId);
    // element.classList.add('dragging');
    // element.style.zIndex = 2;

    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    let rotate = 0;

        if (elementId === 'uRock') {
            translateX = 80;
            translateY = 1250;
            scale = 0.55; 
            rotate = -90;
        } else if (elementId === 'uPaper') {
            translateX = 85;
            translateY = 665;
            scale = 0.65; 
        } else if (elementId === 'uScissors') {
            translateX = 95;
            translateY = 40;
            scale = 0.65; 
        } else if (elementId === 'uLizard') {
            translateX = 80;
            translateY = -573;
            scale = 0.55; 
            rotate = -90;
        } else if (elementId === 'uSpock'){
            translateX = 100;
            translateY = -1195;
            scale = 0.65;
        } else if (elementId === 'cRock') {
            translateX = -150;
            translateY = 1218;
            scale = 0.55; 
            rotate = -90;
        }
        else if (elementId === 'cPaper') {
            translateX = -145;
            translateY = 633;
            scale = 0.65; 
        }
        else if (elementId === 'cScissors') {
            translateX = -135;
            translateY = 40;
            scale = 0.65; 
        }
        else if (elementId === 'cLizard') {
            translateX = -145;
            translateY = -605;
            scale = 0.55; 
            rotate = -90;
        }
        else if (elementId === 'cSpock') {
            translateX = -140;
            translateY = -1190;
            scale = 0.65; 
        }
    element.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
}

function resetAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.style.transition = ''; 
    element.classList.remove('highlight-winner', 'highlight-loser', 'highlight-tie');
    if (elementId === 'uRock') {
        element.style.transform = 'translate(-240px, 1010px) scale(0.2) rotate(-90deg)';
    }
    else if (elementId === 'uPaper') {
        element.style.transform = 'translate(-230px, 525px) scale(0.2)';
    }
    else if (elementId === 'uScissors') {
        element.style.transform = 'translate(-210px, 29px) scale(0.2)';
    }
    else if (elementId === 'uLizard') {
        element.style.transform = 'translate(-230px, -475px) scale(0.2) rotate(-90deg)';
    }
    else if (elementId === 'uSpock') {
        element.style.transform = 'translate(-210px, -990px) scale(0.2)';
    }
    else if (elementId === 'cRock') {
        element.style.transform = 'translate(160px, 990px) scale(0.2) rotate(-90deg)';
    }
    else if (elementId === 'cPaper') {
        element.style.transform = 'translate(165px, 509px) scale(0.2)';
    }
    else if (elementId === 'cScissors') {
        element.style.transform = 'translate(180px, 45px) scale(0.2)';
    }
    else if (elementId === 'cLizard') {
        element.style.transform = 'translate(170px, -490px) scale(0.2) rotate(-90deg)';
    }
    else if (elementId === 'cSpock') {
        element.style.transform = 'translate(175px, -985px) scale(0.2)';
    }
    
}

//   const choices = ["rock", "paper", "scissors", "lizard", "spock"];
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];


    playRound('u' + playerChoice);


function messageBoard(resultMessage) {

    if (resultMessage === "You win!") {
        const w = 
        ["You won this round, good job!", "Bravo!", 
        "Keep it up!", "Nice one.", "Let's gooo!"];
        const message = document.getElementById('game-message');
        const wMessage = w[Math.floor(Math.random() * w.length)];
        message.textContent = wMessage;
    }
    else if (resultMessage === "The computer wins!") {
        const l = 
        ["Oh no, looks like you lost.", "Aw shucks.", 
        "Nooo!", "The computer beat you to it.", ":(", "You really lost to a computer..."];
        const message = document.getElementById('game-message');
        const lMessage = l[Math.floor(Math.random() * l.length)];
        message.textContent = lMessage;  
    }
    else if (resultMessage === "It's a tie!"){
        const t = 
        ["It's a tie!", "Looks like we got a tie."];
        const message = document.getElementById('game-message');
        const tMessage = t[Math.floor(Math.random() * t.length)];
        message.textContent = tMessage;
    }
}

    // function wMessageBoard() {
    //     const w = 
    //     ["You won this round, good job!", "Bravo!", 
    //     "Keep it up!", "Nice one.", "Let's gooo!"];
    //     const message = document.getElementById('game-message');
    //     const wMessage = w[Math.floor(Math.random() * w.length)];
    //     message.textContent = wMessage;
    // }
    
    // function lMessageBoard() {
    //     const l = 
    //     ["Oh no, looks like you lost.", "Aw shucks.", 
    //     "Nooo!", "The computer beat you to it.", ":("];
    //     const message = document.getElementById('game-message');
    //     const lMessage = l[Math.floor(Math.random() * l.length)];
    //     message.textContent = lMessage;  
    // }
    
    // function tMessageBoard() {
    //     const t = 
    //     ["It's a tie!", "Looks like we got a tie."];
    //     const message = document.getElementById('game-message');
    //     const tMessage = t[Math.floor(Math.random() * t.length)];
    //     message.textContent = tMessage;  
    // }
    

function displayResult(playerChoice, computerChoice) {
    // const newPlayerChoice = playerChoice.substring(1);
    // const newCompChoice = computerChoice.substring(1);
    const userChoiceElement = document.getElementById(playerChoice);
    const computerChoiceElement = document.getElementById(computerChoice);

    const resultMessage = determineWinner(playerChoice, computerChoice);

    messageBoard(resultMessage);

    if (resultMessage.includes('You win!')) {
        userChoiceElement.classList.add('highlight-winner');
        computerChoiceElement.classList.add('highlight-loser');
        // messageBoard("You win")
    } else if (resultMessage.includes('The computer wins!')) {
        computerChoiceElement.classList.add('highlight-winner');
        userChoiceElement.classList.add('highlight-loser');
        // messageBoard("The computer wins!");
    }
    else {
        computerChoiceElement.classList.add('highlight-tie');
        userChoiceElement.classList.add('highlight-tie');
        // messageBoard("It's a tie!");
    }

    setTimeout(() => {
        resetAnimation(playerChoice);
        resetAnimation(computerChoice);
        userChoiceElement.classList.remove('highlight-winner', 'highlight-loser');
        computerChoiceElement.classList.remove('highlight-winner', 'highlight-loser');
        const message = document.getElementById('game-message');
        message.textContent = '. . .';
        // updateScoreDisplay();
        // messageBoard(resultMessage);
        if (round === selectedRounds) {
            // Check for game result and show the corresponding screen
            if (uScore > cScore) {
                showVictoryScreen();
            } else if (uScore < cScore) {
                showDefeatScreen();
            } else {
                showTieScreen();
            }
        }
    }, 2000);
    
}
// const lMessage = document.getElementById('game-message');
// // lMessage.textContent = message; 

// const tMessage = document.getElementById('game-message');
// tMessage.textContent = message;

function determineWinner(playerChoice, computerChoice) {
    //     const newPlayerChoice = playerChoice.substring(1);
    // const newCompChoice = computerChoice.substring(1);
    if (
        (playerChoice === "uRock" && computerChoice === "cScissors") ||
        (playerChoice === "uRock" && computerChoice === "cLizard") ||
        (playerChoice === "uPaper" && computerChoice === "cRock") ||
        (playerChoice === "uPaper" && computerChoice === "cSpock") ||
        (playerChoice === "uScissors" && computerChoice === "cPaper") ||
        (playerChoice === "uScissors" && computerChoice === "cLizard") ||
        (playerChoice === "uLizard" && computerChoice === "cPaper") ||
        (playerChoice === "uLizard" && computerChoice === "cSpock") ||
        (playerChoice === "uSpock" && computerChoice === "cRock") ||
        (playerChoice === "uSpock" && computerChoice === "cScissors")
    ) {
        round++;
        uScore++;
        return "You win!";
    } else if (
        (computerChoice === "cRock" && playerChoice === "uScissors") ||
        (computerChoice === "cRock" && playerChoice === "uLizard") ||
        (computerChoice === "cPaper" && playerChoice === "uRock") ||
        (computerChoice === "cPaper" && playerChoice === "uSpock") ||
        (computerChoice === "cScissors" && playerChoice === "uPaper") ||
        (computerChoice === "cScissors" && playerChoice === "uLizard") ||
        (computerChoice === "cLizard" && playerChoice === "uPaper") ||
        (computerChoice === "cLizard" && playerChoice === "uSpock") ||
        (computerChoice === "cSpock" && playerChoice === "uRock") ||
        (computerChoice === "cSpock" && playerChoice === "uScissors")
    ) {
        round++;
        cScore++;
        return "The computer wins!";
    }
    else {
        return "It's a tie!";
    } 
}

// function updateScoreDisplay() {
//     const userScoreElement = document.getElementById('u' + 'userScore');
//     const computerScoreElement = document.getElementById('c' + 'computerScore');
//     const roundElement = document.getElementById('roundNumber');

//     userScoreElement.textContent = userScore;
//     computerScoreElement.textContent = computerScore;
//     roundElement.textContent = `Round ${round}`;
// }

// let maxRounds = 0;

function updateScoreBoard() {
    const uScoreDisplay = document.getElementById('userScore');
    uScoreDisplay.textContent = uScore;
    const cScoreDisplay = document.getElementById('computerScore');
    cScoreDisplay.textContent = cScore; 
    const roundDisplay = document.getElementById('roundNumber');
    roundDisplay.textContent = round; 
}



// const roundSelection = document.getElementById(playerChoice);
// function getRoundSelection(roundSelection, resultMessage) {
//     if (roundSelection === 3) {
//         if (resultMessage.includes('You win!')) {
//             showVictoryScreen();
//         } else if (resultMessage.includes('The computer wins!')) {
//             showDefeatScreen();
//         } else if (resultMessage.includes("It's a tie!")) {
//             showTieScreen();
//         } 

//       }
    
//       else if (roundSelection === 5) {
//         if (resultMessage.includes('You win!')) {
//             showVictoryScreen();
//         }
//         else if (resultMessage.includes('The computer wins!')) {
//             showDefeatScreen();
//         }
//         else if (resultMessage.includes("It's a tie!")) {
//             showTieScreen();
//         }
//       }
    
//       else if (roundSelection === 10) {
//         if (resultMessage.includes('You win!')) {
//             showVictoryScreen();
//         }
//         else if (resultMessage.includes('The computer wins!')) {
//             showDefeatScreen();
//         }
//         else if (resultMessage.includes("It's a tie!")) {
//             showTieScreen();
//         }
//       }
// }

function resetGame() {
    // Reset variables and game state
    uScore = 0;
    cScore = 0;
    round = 0;
    selectedRounds = 0;

    // Reset UI elements if needed
    updateScoreBoard();
    // showTitleScreen();

}

function playRound(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    animateMove('u' + playerChoice);
    animateMove('c' + computerChoice);
    displayResult('u' + playerChoice, 'c' + computerChoice);
    updateScoreBoard();

    // const roundSelection = document.querySelector('#round-selection-screen');
    // roundSelection.addEventListener('click', handleClick);
    // function handleClick(e) {
    //     if(e.target.matches('button')) {
    //         let maxRounds = e.target.textContent;
    //         if (round == maxRounds) {
    //             if (resultMessage.includes('You win!')) {
    //                 showVictoryScreen();
    //             } else if (resultMessage.includes('The computer wins!')) {
    //                 showDefeatScreen();
    //             } else if (resultMessage.includes("It's a tie!")) {
    //                 showTieScreen();
    //             } 
    //         }
    //     }
    // }
    
}