function ReverseOrder() {
    var numbers = [];
    for (var i = 0; i < 5; i++) {
        var number = parseInt(prompt("Enter number " + (i + 1) + ":"));
        numbers.push(number);
    }

    console.log("The numbers in reverse order are:");
    for (var j = numbers.length - 1; j >= 0; j--) {
        console.log(numbers[j]);
    }
}

window.onload = ReverseOrder;