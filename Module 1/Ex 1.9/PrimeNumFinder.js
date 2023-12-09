function findPrime() {
    var number = parseInt(prompt("Enter an integer:"));
    var isPrime = true;

    if (number < 2) {
        isPrime = false;
    } else {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    var message = isPrime ? number + " is a prime number." : number + " is not a prime number.";
    document.getElementById("answer").innerHTML = message;
}

window.onload = findPrime;