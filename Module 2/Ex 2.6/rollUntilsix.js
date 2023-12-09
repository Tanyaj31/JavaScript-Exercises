function randomDiceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
    var result;
    var listHtml = "<ul>";

    do {
        result = randomDiceRoll();
        listHtml += "<li>" + result + "</li>";
    } while (result !== 6);

    listHtml += "</ul>";
    document.getElementById("rolls").innerHTML = listHtml;
}

window.onload = rollUntilSix;