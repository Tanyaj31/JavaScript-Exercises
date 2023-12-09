function ParticipantsList() {
    var numberOfParticipants = parseInt(prompt("Enter the number of participants:"));
    var participants = [];

    for (var i = 0; i < numberOfParticipants; i++) {
        var name = prompt("Enter the name of the participant " + (i + 1) + ":");
        participants.push(name);
    }

    participants.sort();

    var listHtml = "<ol>";
    for (var j = 0; j < participants.length; j++) {
        listHtml += "<li>" + participants[j] + "</li>";
    }
    listHtml += "</ol>";

    document.getElementById("names").innerHTML = listHtml;
}

window.onload = ParticipantsList;