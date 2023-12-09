function DiceRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollUntilMax() {
    var sides = parseInt(prompt("Enter the number of sides on the dice:"));
    var result;
    var listHtml = "<ul>";

    do {
        result = DiceRoll(sides);
        listHtml += "<li>" + result + "</li>";
    } while (result !== sides);

    listHtml += "</ul>";
    document.getElementById("rolls").innerHTML = listHtml;
}

window.onload = rollUntilMax;