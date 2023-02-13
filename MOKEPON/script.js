
// get the mascot selection elements
const mascotSelection = document.getElementById("mascot-selection");
const selectMascotButton = document.getElementById("select-mascot");
const mascots = document.getElementsByName("mascot"); // brings all the elements with name value == 'mascot' and create an HTMLarray

// get the battle setup elements
const battleSetup = document.getElementById("battle-setup");
const playerMascotDiv = document.getElementById("player-mascot");
const computerMascotDiv = document.getElementById("computer-mascot");
let playerLivesSpan = null;
let computerLivesSpan = null;

const fireAttackButton = document.getElementById("fire-attack");
const waterAttackButton = document.getElementById("water-attack");
const earthAttackButton = document.getElementById("earth-attack");

// get the battle messages element
const battleMessages = document.getElementById("battle-messages");

// get the retry button element
const retryButton = document.getElementById("retry-button");
const resetButton = document.getElementById("reset");

//state variables
let playerMascotLives = 3
let computerMascotLives = 3

// select mascot button click event listener
selectMascotButton.addEventListener("click", function() {
    // get the selected mascot
    let selectedMascot;
    
    // iterate over the radiosBtn[name==='mascot'] and assing it's text to a variable if checked
    for (let i = 0; i < mascots.length; i++) {
        if (mascots[i].checked) {
            selectedMascot = mascots[i].value;
            break;
        }
    }

    // if user doesnt activate a radio
    if(!selectedMascot){      //akap
        alert("Select a mascot to play");
        return
    }

    // select a random computer mascot
    const computerMascots = ["perroLoco", "gatoCareverga", "canarioHijueputa"];
    const computerMascot = computerMascots[Math.floor(Math.random() * computerMascots.length)];

    // hide the mascot selection section and show the battle setup section
    mascotSelection.style.display = "none";
    battleSetup.style.display = "block";

    // update the player and create counter span
    playerMascotDiv.innerHTML = `<strong>YOU</strong>: ${selectedMascot} - Lives: <span id="player-lives">3</span>`;
    playerLivesSpan = document.getElementById("player-lives");
    computerMascotDiv.innerHTML = `<strong>PC</strong>: ${computerMascot} - Lives: <span id="computer-lives">3</span>`;
    computerLivesSpan = document.getElementById("computer-lives")
});

// attack button click event listeners
fireAttackButton.addEventListener("click", function() {
    performAttack("fire");
});
waterAttackButton.addEventListener("click", function() {
    performAttack("water");
});
earthAttackButton.addEventListener("click", function() {
    performAttack("earth");
});

// perform attack function
function performAttack(playerAttack) {
    // select a random computer attack
    const computerAttacks = ["fire", "water", "earth"];
    const computerAttack = computerAttacks[Math.floor(Math.random() * computerAttacks.length)];

    // determine the winner of the attack
    let result;
    if (playerAttack === computerAttack) {
        result = "draw";
    } else if (
        (playerAttack === "fire" && computerAttack === "water") ||
        (playerAttack === "water" && computerAttack === "earth") ||
        (playerAttack === "earth" && computerAttack === "fire"))
    {
        result = "win";
    } else {
        result = "lose";
    }

    // update the lives of the player and computer mascots // AKAP
    if (result === "win") {
        computerMascotLives--;
        computerLivesSpan.innerHTML = `${computerMascotLives}`;
    } else if (result === "lose") {
        playerMascotLives--;
        playerLivesSpan.innerHTML = `${playerMascotLives}`;
    }

    // add a message to the battle messages div
    let message;
    if (result === "win") {
        message = `🏆 You won! You used ${playerAttack} and the computer used ${computerAttack}`;
    } else if (result === "lose") {
        message = `😞 You lost! You used ${playerAttack} and the computer used ${computerAttack}`;
    } else {
        message = `🤝 It's a draw! You both used ${playerAttack}`;
    }
    battleMessages.innerHTML += `<p>${message}</p>`;
    
    // check if the game is over
    if (playerMascotLives  === 0 || computerMascotLives === 0) { //akap
        message = playerMascotLives ? '🥳🎉 PLAYER' : '😔⚰️ PC'
        battleMessages.innerHTML += `<p>${message} WON !!</p>`;

        // disable the attack buttons
        fireAttackButton.disabled = true;
        waterAttackButton.disabled = true;
        earthAttackButton.disabled = true;

        // show the retry button
        retryButton.style.display = "block";
    }
}

// reset button click event listener
resetButton.addEventListener("click", function() {
    location.reload();
});