function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");

const resultDiv = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice) {
    if (gameOver) return; // Stop the game if a winner has been declared

    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;
        resultMessage = `🎉 You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        resultMessage = `🤝 It's a draw! Both chose ${humanChoice}.`;
    } else {
        computerScore++;
        resultMessage = `😔 You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update the result div with the game outcome
    resultDiv.innerHTML = `
        <p>${resultMessage}</p>
        <p>Score: You ${humanScore} - ${computerScore} Computer</p>
    `;

    checkGameOver();
}

function checkGameOver() {
    if (humanScore === 5) {
        resultDiv.innerHTML += `<p>🏆 Congratulations! You won the game!</p>`;
        gameOver = true;
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.innerHTML += `<p>😞 You lost! Better luck next time.</p>`;
        gameOver = true;
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorBtn.addEventListener("click", () => playRound("Scissors"));
