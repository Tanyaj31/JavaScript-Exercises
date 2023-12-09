function checkLeapYear() {
    var year = parseInt(prompt("Enter a year:"));
    var isLeapYear = false;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }

    var message = isLeapYear ? year + " is a leap year." : year + " is not a leap year.";
    document.getElementById("checker").innerHTML = message;
}

window.onload = checkLeapYear;