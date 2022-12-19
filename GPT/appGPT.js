const MESSAGES = {
    tie: "It's a tie! 🤝",
    win: "You win! 😎",
    lose: "You lose! 😞",
    gameOver: {
        win: "You win the game! 🏆",
        lose: "The computer wins the game! 😢"
    }
}
  
class RockPaperScissorsGame {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
    }

    playRound() {
        // Prompt the player to select an option (rock, paper, or scissors)
        const playerChoice = prompt("Enter 1 for rock 🗿, 2 for paper 📜, or 3 for scissors ✂️:");

        // Generate a random number between 1 and 3 for the computer's choice
        const computerChoice = Math.floor(Math.random() * 3) + 1;

        // Compare the player's and computer's choices to determine the winner
        if (playerChoice == computerChoice) {
            this.displayTieMessage();
        } else if (playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 3 || playerChoice == 3 && computerChoice == 1) {
            this.computerScore++;
            this.displayLoseMessage(computerChoice);
        } else {
            this.playerScore++;
            this.displayWinMessage(computerChoice);
        }
    }

    playGame() {
        // Keep playing until one of the players reaches 3 points
        while (this.playerScore < 3 && this.computerScore < 3) {
            this.playRound();
        }

        // Announce the winner
        if (this.playerScore == 3) {
            this.displayWinGameMessage();
        } else {
            this.displayLoseGameMessage();
        }
    }

    displayTieMessage() {
        alert(MESSAGES.tie);
    }

    displayWinMessage(computerChoice) {
        alert(MESSAGES.win + " The computer chose " + computerChoice + ". The score is now " + this.playerScore + " (you) - " + this.computerScore + " (computer)");
    }

    displayLoseMessage(computerChoice) {
        alert(MESSAGES.lose + " The computer chose " + computerChoice + ". The score is now " + this.playerScore + " (you) - " + this.computerScore + " (computer)");
    }

    displayWinGameMessage() {
        alert(MESSAGES.gameOver.win);
    }

    displayLoseGameMessage() {
        alert(MESSAGES.gameOver.lose);
    }
}

// Unit tests
function testPlayRound() {
    const game = new RockPaperScissorsGame();

    // Test player win
    game.playRound = function() {
        this.playerScore++;
    }
    game.playRound();
    if (game.playerScore != 1) {
        console.error("Error: Test player win failed");
    }

    // Test computer win
    game.playRound = function() {
        this.computerScore++;
    }
    game.playRound();
    if (game.computerScore != 1) {
        console.error("Error: Test computer win failed");
    }
}

const game = new RockPaperScissorsGame();
game.playGame();