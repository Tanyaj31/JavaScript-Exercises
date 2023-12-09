function listNumbers() {
    var numbers = [];
    var number;

    do {
        number = parseInt(prompt("Enter a number (or type 0 to end this program):"));
        if (number !== 0) {
            numbers.push(number);
        }
    } while (number !== 0);

    numbers.sort(function(a, b) { return b - a; });

    console.log("The numbers arranged from largest to smallest are:");
    for (var i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

window.onload = listNumbers;