function listLeapYears() {
    var startYear = parseInt(prompt("Enter the start year:"));
    var endYear = parseInt(prompt("Enter the end year:"));
    var leapYears = [];

    for (var year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    var listHtml = "<ul>";
    for (var i = 0; i < leapYears.length; i++) {
        listHtml += "<li>" + leapYears[i] + "</li>";
    }
    listHtml += "</ul>";

    document.getElementById("answer").innerHTML = listHtml;
}

window.onload = listLeapYears;