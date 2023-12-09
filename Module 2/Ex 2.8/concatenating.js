function concat(arrayOfStrings) {
    var result = '';
    for (var i = 0; i < arrayOfStrings.length; i++) {
        result += arrayOfStrings[i];
    }
    return result;
}

function displayConcatString() {
    var names = ["Johnny", "DeeDee", "Joey", "Marky"];
    var concatenatedString = concat(names);
    document.getElementById("answer").innerHTML = concatenatedString;
}

window.onload = displayConcatString;