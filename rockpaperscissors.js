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


}