function rollDice() {
    var numberOfRolls = parseInt(prompt("Enter the number of dice rolls:"));
    var sum = 0;

    for (var i = 0; i < numberOfRolls; i++) {
        var roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6 is generated
        sum += roll;
    }

    document.getElementById("result").innerHTML = "Total sum of dice rolls: " + sum;
}

window.onload = rollDice;