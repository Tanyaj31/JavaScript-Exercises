function sortStudent() {
    var studentName = prompt("Enter the student's name:");
    var houseNumber = Math.floor(Math.random() * 4) + 1; // A random number between 1 and 4 is generated
    var houseName;

    switch (houseNumber) {
        case 1:
            houseName = "Gryffindor";
            break;
        case 2:
            houseName = "Slytherin";
            break;
        case 3:
            houseName = "Hufflepuff";
            break;
        case 4:
            houseName = "Ravenclaw";
            break;
    }

    document.getElementById("houseAssignment").innerHTML = studentName + ", you are " + houseName + ".";
}

window.onload = sortStudent;