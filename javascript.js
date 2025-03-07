function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) {
        return "Rock";
    } else if (number < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper, or Scissors:");
    humanChoice = humanChoice.trim().toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    } else {
        alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "player";
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    } else {
        console.log(`It's a draw! Both chose ${humanChoice}.`);
        return "draw";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    console.log("Starting the game... Best of 5 rounds!");

    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(humanChoice, computerChoice);

        if (roundWinner === "player") {
            humanScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }

        console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    }

    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log("🎉 You won the game! Congratulations! 🏆");
    } else if (computerScore > humanScore) {
        console.log("😔 You lost the game! Better luck next time.");
    } else {
        console.log("🤝 It's a draw! What a match!");
    }
}

// Start the game
playGame();
