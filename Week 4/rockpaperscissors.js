"use strict";

const buttons = document.querySelectorAll(".choice");
const comDisplay = document.getElementById("computer");
const userDisplay = document.getElementById("user");

buttons.forEach((button) => {
    button.addEventListner("click", userPick);
});

function computerPick() {
    // 0 is rock, 1 is paper, 2 is scissors
    Math.floor(Math.random() * 3);
}

function userPick(e) {
    const userChoice = e.target.value;
    userDisplay.innerText = `You chose $(userChoice)`;
    computerPick();
    userDisplay.innerText = `You chose ${userChoice}`;
    if (compChoice === 0) {
        compDisplay.innerText = "The computer chose rock";
    } else if (compChoice === 1) {
        compDisplay.innerText = "The computer chose paper";
    } else if (compChoice === 2) {
        compDisplay.innerText = "The computer chose scissors";
    }

    // See if the user won
    if (userChoice === 'paper' && compChoice === 0 ||
        userChoice === 'rock' && compChoice === 2 ||
        userChoice === 'scissors' && compChoice === 1) {
            endGame("win");
    } else if (userChoice === 'paper' && compChoice === 2 ||
                userChoice === 'rock' && compChoice === 1 ||
                userChoice === 'scissors' && compChoice === 0) 
    {
        endGame("lose");
    } else {
        endGame("tie");
    }
}
function endGame(outcome) {
    gameData.game++;
    gameDisplay.innerText = gameData.game;
    gameData[outcome]++;
    outcomeDisplay.innerText = `You ${outcome}`;
    document.getElementById(outcome).innerText++;
}