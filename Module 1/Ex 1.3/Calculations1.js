function calculateValues() {
    var num1 = parseInt(prompt("Enter the first integer:"));
    var num2 = parseInt(prompt("Enter the second integer:"));
    var num3 = parseInt(prompt("Enter the third integer:"));

    var sum = num1 + num2 + num3;
    var product = num1 * num2 * num3;
    var average = sum / 3;

    document.getElementById("results").innerHTML =
        "Sum: " + sum + "<br>" +
        "Product: " + product + "<br>" +
        "Average: " + average.toFixed(2);
}

window.onload = calculateValues;