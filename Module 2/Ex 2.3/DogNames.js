function listDogNames() {
    var dogNames = [];
    for (var i = 0; i < 6; i++) {
        var name = prompt("Enter the name of dog " + (i + 1) + ":");
        dogNames.push(name);
    }

    dogNames.sort().reverse();

    var listHtml = "<ul>";
    for (var j = 0; j < dogNames.length; j++) {
        listHtml += "<li>" + dogNames[j] + "</li>";
    }
    listHtml += "</ul>";

    document.getElementById("names").innerHTML = listHtml;
}

window.onload = listDogNames;