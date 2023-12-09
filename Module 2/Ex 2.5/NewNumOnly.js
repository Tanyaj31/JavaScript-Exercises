function UniqueNum() {
    var numbers = [];
    var number;
    var isDuplicate = false;

    while (!isDuplicate) {
        number = parseInt(prompt("Enter a number:"));
        if (numbers.includes(number)) {
            isDuplicate = true;
            console.log("The number " + number + " has already been entered. Only unique numbers can be typed in once.");
        } else {
            numbers.push(number);
        }
    }

    numbers.sort(function(a, b) { return a - b; });
    console.log("All of the entered numbers in ascending order are:");
    numbers.forEach(function(num) {
        console.log(num);
    });
}

window.onload = UniqueNum;