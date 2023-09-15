let player = {
    name: "",
    gold: 10,
}

player.name = prompt("Enter your character's name.");

player.class = prompt("Enter a class. You can pick either Warrior or Thief.");

if (player.class === "Warrior" || player.class === "Thief") {
    
} else {
    alert("Invalid Entry.");
}

alert(`You are ${player.name} the ${player.class}`);

player.choice1 = prompt("You come across a river. Would you like to Swim' across or 'Pay' for a ferry.");

if (player.choice1 === "swim") {
    alert("You swam across.");
    player.choice2 = prompt("You found a bag of gold. Do you want to pick it up or leave it.")
    if (player.choice2 === "Pick") {
        alert("You picked the gold.");
    } else if (player.choice2 === "Leave") {
        alert("You left the gold.");
    }
} else if (player.choice1 === "Pay") {
    player.gold = player.gold - 5;
    alert(`You paid 5 gold for a ferry. You now have ${player.gold}).`);
}

alert("You reached an island.");