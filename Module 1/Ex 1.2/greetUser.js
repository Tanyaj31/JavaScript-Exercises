function greetUser() {
    var userName = prompt("Please enter your name:");
    document.getElementById("greeting").innerHTML = "Hello, " + userName + "!";
}

window.onload = greetUser;