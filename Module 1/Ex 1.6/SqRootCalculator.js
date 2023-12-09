function calculateSquareRoot() {
    if (confirm("Should I calculate the square root?")) {
        var number = parseFloat(prompt("Enter the number:"));

        if (number < 0) {
            document.getElementById("calculator").innerHTML = "The square root of a negative number is not defined.";
        } else {
            var squareRoot = Math.sqrt(number);
            document.getElementById("calculator").innerHTML = "The square root of " + number + " is " + squareRoot.toFixed(2) + ".";
        }
    } else {
        document.getElementById("calculator").innerHTML = "The square root is not calculated.";
    }
}

window.onload = calculateSquareRoot;